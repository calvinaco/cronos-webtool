import React, { ChangeEventHandler } from "react";
import { Input, Switch, Space, notification } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Account from "./Account";
import CronosService from "./service/cronos";
import { Token } from "./settings";

export default function Accounts(props: Props) {
  const [accountFilter, setAccountFilter] = React.useState<string>("");

  const handleAddAccount = (value: string) => {
    try {
      props.onAddAccountToWatchList(value);
    } catch (err) {
      openError("Cannot Add Account to Watch List", (err as any).toString());
    }
  };

  const handleFilterAccount: ChangeEventHandler<HTMLInputElement> = (e) => {
    setAccountFilter(e.target.value);
  };
  return (
    <React.Fragment>
      <div>
        <Space direction="vertical">
          <Input.Search
            style={{ width: 500 }}
            placeholder="Add Account to Watch List"
            enterButton="Add"
            size="large"
            onSearch={handleAddAccount}
          />
        </Space>
      </div>
      <div style={{ textAlign: "right" }}>
        <Space direction="vertical">
          <div>Auto Refresh <Switch checked={true} disabled /></div>
          <Input
            placeholder="Filter Account"
            prefix={<UserOutlined />}
            size="large"
            onChange={handleFilterAccount}
          />
        </Space>
      </div>
      {!!accountFilter && `Filtering by account: ${accountFilter}`}
      {props.accounts.reduce((accounts, account) => {
        if (!account.includes(accountFilter)) {
          return accounts;
        }
        accounts.push(
          <Space key={account}>
            <Account
              cronosService={props.cronosService}
              onRemoveFromWishList={() =>
                props.onRemoveAccountFromWishList(account)
              }
              account={account}
              tokens={props.tokens}
            />
          </Space>
        );
        return accounts;
      }, [] as any[])}
    </React.Fragment>
  );
}

type Props = {
  cronosService: CronosService;
  onAddAccountToWatchList: (account: string) => void;
  onRemoveAccountFromWishList: (account: string) => void;

  accounts: string[];
  tokens: Token[];
};

const openError = (title: string, description: string) => {
  notification.error({
    message: title,
    description,
  });
};
