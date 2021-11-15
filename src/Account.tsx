import React from "react";
import { Button, Card, Table } from "antd";
import CronosService from "./service/cronos";
import { CRO as CROToken, Token } from "./settings";
import BigNumber from "bignumber.js";

export default function Account(props: Props) {
  const [lastUpdatedAt, setLastUpdatedAt] = React.useState<LastUpdatedAt>({
    time: new Date(),
    blockNumber: 0,
  });
  const [balanceRows, setBalanceRows] = React.useState<BalanceRow[]>([]);

  const fetchUpdates = async () => {
    const blockNumber = await props.cronosService.getBlockHeight();

    const tokens = [CROToken, ...props.tokens];
    const tokenBalancePromises = tokens.map((token) => {
      if (token === CROToken) {
        return props.cronosService.getBalance(props.account);
      } else {
        return props.cronosService.getCRC20Balance(
          props.account,
          token.contractAddress
        );
      }
    });

    const balances = await Promise.all(tokenBalancePromises);
    const rows = balances.map((balance, i) => {
      const token = tokens[i];
      return {
        key: token.name,
        name: token.name,
        balance: balance
          .dividedBy(new BigNumber(10).pow(token.decimalPlaces))
          .toFormat(token.decimalPlaces, {
            ...currencyFormat,
            suffix: ` ${token.symbol}`,
          }),
      };
    });

    setBalanceRows(rows);

    setLastUpdatedAt({
      time: new Date(),
      blockNumber,
    });
  };

  React.useEffect(() => {
    if (balanceRows.length === 0) {
      fetchUpdates();
    }
    const timer = setInterval(() => {
      fetchUpdates();
    }, 15000);
    return () => clearInterval(timer);
  });

  return (
    <Card title={(
      <React.Fragment>
      <div>
        <a
          target="_blank"
          rel="noreferrer"
          href={`https://cronos.crypto.org/explorer/address/${props.account}`}
        >
          {props.account}
        </a>
      </div>
      <div>
        {lastUpdatedAt.time.toUTCString()} at Block #{lastUpdatedAt.blockNumber}
      </div>

      </React.Fragment>
    )} extra={(
      <Button
        onClick={() => props.onRemoveFromWishList()}
      >Remove</Button>)
    } style={{ width: 600 }}>
      <Table dataSource={balanceRows} columns={columns} pagination={false} />
    </Card>
  )
}

type Props = {
  cronosService: CronosService;
  onRemoveFromWishList: () => void;

  account: string;
  tokens: Token[];
};

type LastUpdatedAt = {
  time: Date,
  blockNumber: number,
}

type BalanceRow = {
  key: string;
  name: string;
  balance: string;
};

const columns = [
  {
    title: "Token",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Balance",
    dataIndex: "balance",
    key: "balance",
    align: "right" as const,
    render: (value: string) => (
      <span style={{
        fontFamily: 'Nunito,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol'
      }}>
        {value}
      </span>
    )
  },
];

const currencyFormat: BigNumber.Format = {
  prefix: '',
  decimalSeparator: '.',
  groupSeparator: ',',
  groupSize: 3,
  secondaryGroupSize: 0,
  fractionGroupSeparator: ' ',
  fractionGroupSize: 0,
  suffix: ''
}