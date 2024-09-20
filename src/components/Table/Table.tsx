import {
  CheckboxOptionType,
  Col,
  Input,
  Row,
  Select,
  Table,
  Typography,
} from "antd";
import { Content } from "antd/es/layout/layout";
import React, { useEffect, useState } from "react";
import ChaiiButton from "../Button/Button";
import styles from "./Table.module.scss";
import ButtonGroup from "../ButtonGroup/ButtonGroup";

interface inputProps {
  columns: {
    title: string;
    dataIndex?: string;
    key: string;
    render?: (text: any, record: any) => React.ReactNode;
  }[];
  data: any[];
  title?: string;
  buttonLabel?: string;
  buttonClass?:
    | "filledBtn"
    | "filledBtnLarge"
    | "whiteBtn"
    | "roundBtn"
    | "iconBtnCircle"
    | "addRowBtn";
  searchBar?: boolean;
  pagination?: any;
  onButtonClick?: (e: React.MouseEvent) => void;
  handleRowClick?: (record: any) => void;
  sortByValue?: string;
  sortByOptions?: (string | number | CheckboxOptionType<any>)[] | undefined;
  onChangeFilter?: (value: any) => void;
  onSearch?: (value: string) => void;
  placeholderSearch?: string;
}

const { Text } = Typography;
const { Search } = Input;

const SimpleTable: React.FC<inputProps> = ({
  columns,
  data,
  title,
  buttonLabel,
  buttonClass,
  onButtonClick,
  searchBar,
  pagination,
  handleRowClick,
  sortByOptions,
  onChangeFilter,
  onSearch,
  placeholderSearch,
}) => {
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      if (onSearch) onSearch(searchValue);
    }, 1000);
    return () => {
      clearTimeout(debounceTimeout);
    };
  }, [searchValue]);

  return (
    <Content className={`${styles.tableContainer} d-flex flex-column p-2`}>
      <Row className={`d-flex align-items-center justify-content-between`}>
        {title && (
          <Col span={10}>
            <Text className={styles.text_styles}>{title}</Text>
          </Col>
        )}
        <Col
          span={14}
          className={`d-flex align-items-center justify-content-end gap-1 ${styles.controls}`}
        >
          <Row gutter={20}>
            {sortByOptions && (
              <ButtonGroup
                onChangeValue={onChangeFilter}
                options={sortByOptions}
              />
            )}
            {searchBar && (
              <>
                <Col>
                  <Search
                    placeholder={placeholderSearch}
                    onSearch={(val) => setSearchValue(val)}
                    value={searchValue}
                    className={styles.searchBar}
                  />
                </Col>
              </>
            )}
            <Col>
              {buttonLabel && buttonClass && (
                <ChaiiButton
                  label={buttonLabel}
                  btnClass={buttonClass}
                  onClick={onButtonClick}
                />
              )}
            </Col>
          </Row>
        </Col>
      </Row>
      <Table
        dataSource={data ?? []}
        columns={columns}
        size="small"
        onRow={(record) => {
          return {
            style: { cursor: "pointer" },
            onClick: () => {
              if (handleRowClick) handleRowClick(record);
            },
          };
        }}
        pagination={pagination}
        className={`d-flex ${styles.customTable} mt-3`}
      />
    </Content>
  );
};

export default SimpleTable;
