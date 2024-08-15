import { Table, Typography } from "antd";
import { Content } from "antd/es/layout/layout";
import React from "react";

interface inputProps {
  columns: { title: string; dataIndex: string; key: string }[];
  data: {}[];
}

const { Text } = Typography;

const SimpleTable: React.FC<inputProps> = ({ columns, data }) => {
  return (
    <Content className="p-2">
      <Text>TEst</Text>
      <Table dataSource={data ?? []} columns={columns} />
    </Content>
  );
};

export default SimpleTable;
