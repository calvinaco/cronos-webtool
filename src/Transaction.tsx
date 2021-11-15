import React from "react";
import { Collapse, Input, Space, Table, notification } from "antd";
import {
  CheckCircleTwoTone,
  CloseCircleTwoTone,
  QuestionCircleTwoTone,
} from "@ant-design/icons";
import ReactJson from "react-json-view";
import CronosService, {
  TransactionStatus,
  TransactionReceipt,
} from "./service/cronos";

export default function Transaction(props: Props) {
  const [transactionRows, setTransactionRecords] = React.useState<
    TransactionRow[]
  >([]);

  const prependTransactionRecords = (record: TransactionRow) => {
    setTransactionRecords([record, ...transactionRows]);
  };

  const handleSearch: AntdInputOnSearchFn = async (value) => {
    if (value === "") {
      return;
    }
    const requestedAt = new Date();
    try {
      const transactionRecord = await props.cronosService.getTransactionRecord(
        value
      );

      prependTransactionRecords({
        key: Date.now(),
        txHash: value,
        requestedAt,
        status: transactionRecord.status,
        receipt: transactionRecord.receipt,
      });
    } catch (err) {
      openError("Get Transaction Error", (err as Error).toString());
      return;
    }
  };

  return (
    <React.Fragment>
      <Space direction="vertical">
        <Input.Search
          placeholder="Transaction Hash"
          enterButton="Query"
          size="large"
          onSearch={handleSearch}
          style={{width: 650}}
        />
      </Space>
      <Table dataSource={transactionRows} columns={columns} pagination={false} />;
    </React.Fragment>
  );
}

type Props = {
  cronosService: CronosService;
};

type TransactionRow = {
  key: number;
  requestedAt: Date;
  txHash: string;
  status: TransactionStatus;
  receipt?: TransactionReceipt;
};

const columns = [
  {
    title: "Requested At",
    dataIndex: "requestedAt",
    key: "requestedAt",
    render: (value: Date) => <span>{value.toLocaleString()}</span>,
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (value: TransactionStatus) => {
      switch (value) {
        case TransactionStatus.NotOnChain:
          return <QuestionCircleTwoTone style={{ fontSize: 22 }} />;
        case TransactionStatus.SuccessOnChain:
          return (
            <CheckCircleTwoTone
              twoToneColor="#52c41a"
              style={{ fontSize: 22 }}
            />
          );
        case TransactionStatus.FailedOnChain:
          return (
            <CloseCircleTwoTone
              twoToneColor="#eb2f96"
              style={{ fontSize: 22 }}
            />
          );
      }
    },
  },
  {
    title: "Transaction Hash",
    dataIndex: "txHash",
    key: "txHash",
    render: (value: string, row: TransactionRow, index: number) => {
      return (
        <React.Fragment>
          <a
            target="_blank"
            rel="noreferrer"
            href={`https://cronos.crypto.org/explorer/tx/${value}`}
          >
            {value}
          </a>
          <Collapse>
            <Collapse.Panel header="Transaction Receipt" key="receipt">
              {!!row.receipt && (
                <ReactJson
                  iconStyle="square"
                  collapsed={1}
                  src={row.receipt!}
                />
              )}
            </Collapse.Panel>
          </Collapse>
        </React.Fragment>
      );
    },
  },
];

type AntdInputOnSearchFn = (
  value: string,
  event?:
    | React.ChangeEvent<HTMLInputElement>
    | React.MouseEvent<HTMLElement>
    | React.KeyboardEvent<HTMLInputElement>
) => void;

const openError = (title: string, description: string) => {
  notification.error({
    message: title,
    description,
  });
};
