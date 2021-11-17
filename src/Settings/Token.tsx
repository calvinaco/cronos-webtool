import React from "react";
import { Button, Form, Input, InputNumber, notification } from "antd";
import { Token } from "../settings";

export default function TokenSetting(props: Props) {
  const disabled = props.disabled;

  const handleFinish = (value: any) => {
      try {
        props.onAdd && props.onAdd(value);
      } catch(err) {
        notification.error({
            message: 'Add Token Error',
            description: (err as Error).toString(),
        })
      }
  }

  return (
    <Form
      name="basic"
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 18 }}
      initialValues={{ remember: true }}
      onFinish={handleFinish}
    >
      <Form.Item label="Token Name" name="name" rules={[{ required: true }]}>
        <Input disabled={disabled} defaultValue={props.defaultValue?.name} />
      </Form.Item>

      <Form.Item label="Symbol" name="symbol" rules={[{ required: true }]}>
        <Input disabled={disabled} defaultValue={props.defaultValue?.symbol} />
      </Form.Item>

      <Form.Item
        label="Decimal Places"
        name="decimalPlaces"
        rules={[{ required: true }]}
      >
        <InputNumber
          min={0}
          disabled={disabled}
          defaultValue={props.defaultValue?.decimalPlaces}
        />
      </Form.Item>

      <Form.Item
        label="Contract Address"
        name="contractAddress"
        rules={[{ required: true }]}
      >
        <Input
          disabled={disabled}
          defaultValue={props.defaultValue?.contractAddress}
        />
      </Form.Item>

      {!disabled && (
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Add Token
          </Button>
        </Form.Item>
      )}
    </Form>
  );
}

export type Props = {
  onAdd?: (value: any) => void;
  defaultValue?: Token;
  disabled?: boolean;
};
