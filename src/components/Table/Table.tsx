import React, { useState } from "react";
import {
  Table,
  Typography,
  Input,
  Select,
  Row,
  Col,
  Checkbox,
  Space,
  Badge,
} from "antd";
import { Content } from "antd/es/layout/layout";
import styles from "./Table.module.scss";
import ChaiiButton from "../Button/Button"; // Import the ChaiiButton component

interface DataType {
  key: string;
  name: string;
  userName: string;
  age: string;
  status: string;
}

interface inputProps {
  columns: {
    title: string;
    dataIndex?: string;
    key: string;
    render?: (text: any, record: DataType) => React.ReactNode;
  }[];
  data: DataType[];
  title: string;
  sortByOptions: string[];
  buttonLabel?: string;
  buttonClass?:
    | "filledBtn"
    | "filledBtnLarge"
    | "whiteBtn"
    | "roundBtn"
    | "iconBtnCircle"
    | "addRowBtn";
  onButtonClick?: (e: React.MouseEvent) => void;
}

const { Text } = Typography;
const { Search } = Input;
const { Option } = Select;

const SimpleTable: React.FC<inputProps> = ({
  columns,
  data,
  title,
  sortByOptions,
  buttonLabel,
  buttonClass,
  onButtonClick,
}) => {
  const [filteredData, setFilteredData] = useState<DataType[]>(data);

  const handleSearch = (value: string) => {
    const searchData = data.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(searchData);
  };

  const handleSort = (value: string) => {
    // Implement sorting logic here
  };

  // Here we create the columns array dynamically and ensure there is no duplication
  const tableColumns = [
    {
      title: "",
      key: "checkbox",
      render: () => <Checkbox />,
    },
    ...columns,
    {
      title: "Status",
      key: "status",
      dataIndex: "status",
      render: (status: string) => {
        let color = "green";
        if (status === "Busy") color = "red";
        else if (status === "Vacation") color = "gray";
        else if (status === "Completed") color = "green";
        else if (status === "Available") color = "blue";

        return (
          <Space size="small">
            <Badge color={color} />
            <Text>{status}</Text>
          </Space>
        );
      },
    },
    {
      title: "Action",
      key: "action",
      render: (_: any, record: DataType) => (
        <Space size="middle">
          <a
            className={styles["table-action-buttons"]}
            onClick={() => alert(`Edit ${record.name}`)}
          >
            Edit
          </a>
          <a
            className={styles["table-action-buttons"]}
            onClick={() => alert(`View ${record.name}`)}
          >
            View
          </a>
        </Space>
      ),
    },
  ];

  return (
    <Content className={`${styles.tableContainer} p-2`}>
      <Row
        className={`d-flex align-items-center justify-content-between ${styles.tableHeader}`}
      >
        <Col className={styles.title}>
          <Text>{title}</Text>
        </Col>
        <Col
          className={`d-flex align-items-center justify-content-end gap-2 ${styles.controls}`}
        >
          <Select
            defaultValue={sortByOptions[0]}
            onChange={handleSort}
            className={styles.sortBy}
          >
            {sortByOptions.map((option) => (
              <Option key={option} value={option}>
                {option}
              </Option>
            ))}
          </Select>
          <Search
            placeholder="Search Companies"
            onSearch={handleSearch}
            className={styles.searchBar}
          />
          {buttonLabel && buttonClass && (
            <ChaiiButton
              label={buttonLabel}
              btnClass={buttonClass}
              onClick={onButtonClick}
            />
          )}
        </Col>
      </Row>
      <Table
        dataSource={filteredData ?? []}
        columns={tableColumns}
        pagination={{ pageSize: 10 }}
        className={` d-flex ${styles.customTable}`}
      />
    </Content>
  );
};

export default SimpleTable;
