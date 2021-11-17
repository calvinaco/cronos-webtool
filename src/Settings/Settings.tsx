import React from "react";
import { Button, Card, Space } from "antd";
import { Settings as SettingsType } from "../settings";
import TokenSetting from "./Token";

export default function Settings(props: Props) {
  return (
    <React.Fragment>
      <Card title="Add Token" style={{ width: 600 }}>
        <TokenSetting onAdd={props.onAddTokenToSettings} />
      </Card>
      {props.settings.tokens.map((token, i) => (
        <Space key={i} direction="vertical">
          <Card
            title={token.name}
            extra={
              <Button onClick={() => props.onRemoveTokenFromSettings(i)}>
                Remove
              </Button>
            }
            style={{ width: 600 }}
          >
            <TokenSetting defaultValue={token} disabled />
          </Card>
        </Space>
      ))}
    </React.Fragment>
  );
}

export type Props = {
  settings: SettingsType;
  onAddTokenToSettings: (value: any) => void;
  onRemoveTokenFromSettings: (index: number) => void;
};
