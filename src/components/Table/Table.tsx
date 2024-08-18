import { Table, Typography, Input, Select, Row, Col } from "antd";
import { Content } from "antd/es/layout/layout";
import React, { useState } from "react";
import styles from "./Table.module.scss";

interface inputProps {
  columns: { title: string; dataIndex: string; key: string }[];
  data: {}[];
  title: string;
  sortByOptions: string[];
}

const { Text } = Typography;
const { Search } = Input;
const { Option } = Select;

const SimpleTable: React.FC<inputProps> = ({
  columns,
  data,
  title,
  sortByOptions,
}) => {
  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = (value: string) => {
    const searchData = data.filter((item: any) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(searchData);
  };

  const handleSort = (value: string) => {
    // Implement sorting logic here
  };

  return (
    <Content className="p-2">
      <Row
        className={`${styles.tableHeader}`}
        style={{ alignItems: "center", justifyContent: "space-between" }}
      >
        <Col className={styles.title}>
          <Text>{title}</Text>
        </Col>
        <Col
          className={`${styles.controls}`}
          style={{
            alignItems: "center",
            justifyContent: "flex-end",
            gap: "0.5rem",
          }}
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
        </Col>
      </Row>
      <Table dataSource={filteredData ?? []} columns={columns} />
    </Content>
  );
};

export default SimpleTable;
