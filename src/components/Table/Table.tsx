import React, { useState } from "react";
import { Table, Typography, Input, Select, Row, Col } from "antd";
import { Content } from "antd/es/layout/layout";
import styles from "./Table.module.scss";
import ChaiiButton from "../Button/Button";

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

  return (
    <Content className={`${styles.tableContainer} p-2`}>
      <Row
        className={`d-flex align-items-center justify-content-between ${styles.tableHeader}`}
      >
        <Col>
          <Text className={styles.custom}>{title}</Text>
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
        columns={columns}
        pagination={{ pageSize: 10 }}
        className={` d-flex ${styles.customTable}`}
      />
    </Content>
  );
};

export default SimpleTable;
