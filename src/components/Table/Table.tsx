import { CheckboxOptionType, Col, Input, Row, Table, Typography } from "antd";
import { Content } from "antd/es/layout/layout";
import React, { useEffect, useState } from "react";
import ChaiiButton from "../Button/Button";
import ButtonGroup from "../ButtonGroup/ButtonGroup";
import ChaiiToggle from "../Toggle/Toggle";
import styles from "./Table.module.scss";

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
  toggle?: boolean;
  suffix?: string;
  checkedToggle?: boolean;
  onChangeToggle?: (i: boolean) => void | undefined;
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
  sortByValue,
  toggle,
  suffix,
  checkedToggle,
  onChangeToggle,
}) => {
  const [searchValue, setSearchValue] = useState("");
  const [initial, setInitial] = useState(true);

  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      if (!initial) {
        if (onSearch) onSearch(searchValue);
      } else {
        setInitial(false);
      }
    }, 1000);
    return () => {
      clearTimeout(debounceTimeout);
    };
  }, [searchValue]);

  return (
    <Content className={`${styles.tableContainer} d-flex flex-column p-2`}>
      <Row
        className={`d-flex align-items-center  ${title ? "justify-content-between" : "justify-content-end"}`}
      >
        {title && (
          <Col span={6}>
            <Text className={styles.text_styles}>{title}</Text>
          </Col>
        )}
        <Col
          span={18}
          className={`d-flex align-items-center justify-content-end gap-1 ${styles.controls}`}
        >
          <Row gutter={20}>
            {toggle && (
              <>
                <Col className="d-flex align-items-center justify-content-center">
                  <ChaiiToggle
                    suffix={suffix}
                    onChange={onChangeToggle}
                    checked={checkedToggle}
                  />
                </Col>
              </>
            )}
            {sortByOptions && (
              <ButtonGroup
                onChangeValue={onChangeFilter}
                options={sortByOptions}
                value={sortByValue}
              />
            )}
            {searchBar && (
              <>
                <Col>
                  <Search
                    placeholder={placeholderSearch}
                    onChange={(val) => setSearchValue(val.target.value)}
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
        size="middle"
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
