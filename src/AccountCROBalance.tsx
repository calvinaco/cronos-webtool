import React from "react";
import { Button, Card, Form, Input, InputNumber, Space, notification } from "antd";
import BigNumber from "bignumber.js";
import CronosService from "./service/cronos";

type CROAccountBalance = {
  account: string,
  blockNumber: string,
  baseBalance: BigNumber,
}

export default function AccountCROBalance(props: Props) {
  const [currentAccountBalance, setCurrentAccountBalance] = React.useState<
    CROAccountBalance
  >();


  const handleFinish = async (value: any) => {
    try {
      const baseBalance = await props.cronosService.getBalanceAtHeight(
        value.account,
        value.blockNumber,
      );
      setCurrentAccountBalance({
        account: value.account,
        blockNumber: value.blockNumber,
        baseBalance,
      });
    } catch(err) {
      openError("Get Balance Error", (err as Error).toString());
    }
  }

  return (
    <React.Fragment>
      <Space direction="vertical">
        <Form
        name="basic"
        onFinish={handleFinish}
        >
          <Form.Item label="Account" name="account" rules={[{ required: true }]}>
            <Input size='large' style={{width: 650}} />
          </Form.Item>

          <Form.Item
            label="Block Number"
            name="blockNumber"
            rules={[{ required: true }]}
          >
            <InputNumber
              min={0}
              size='large'
              style={{width: 150}}
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Query Balance
            </Button>
          </Form.Item>
        </Form>
      </Space>
      { currentAccountBalance && (
        <Card title={(
          <React.Fragment>
            <div>
              <a
                target="_blank"
                rel="noreferrer"
                href={`https://cronos.crypto.org/explorer/address/${currentAccountBalance.account}`}
              >
                {currentAccountBalance.account}
              </a>
            </div>
            <div>
              At Block #{currentAccountBalance.blockNumber}
            </div>
          </React.Fragment>
        )}>
          {currentAccountBalance.baseBalance.dividedBy(CRO_TO_BASECRO_MULTIPLIER).toFormat(18, {
            ...currencyFormat,
            suffix: ' CRO',
          })}
        </Card>
      )}
    </React.Fragment>
  );
}

type Props = {
  cronosService: CronosService;
};

const openError = (title: string, description: string) => {
  notification.error({
    message: title,
    description,
  });
};

const CRO_DECIMAL_PLACES = 18;

const CRO_TO_BASECRO_MULTIPLIER = new BigNumber(10).pow(CRO_DECIMAL_PLACES);

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