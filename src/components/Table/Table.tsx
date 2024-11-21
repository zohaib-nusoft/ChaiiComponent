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
  pagination?: any;
  handleRowClick?: (record: any) => void;
  sortBy?:
    | {
        sortByOption?: (string | number | CheckboxOptionType<any>)[];
        sortByValue?: string;
      }
    | undefined;
  onChangeFilter?: (value: any) => void;
  toggle?:
    | {
        onChangeToggle?: (i: boolean) => void | undefined;
        checkedToggle?: boolean;
        suffix?: string;
      }
    | undefined;

  search?: { onSearch: (value: string) => void; placeholder?: string } | false;
  button?:
    | {
        label: string;
        onClick?: (e: React.MouseEvent) => void;
        buttonClass?:
          | "filledBtn"
          | "filledBtnLarge"
          | "whiteBtn"
          | "roundBtn"
          | "iconBtnCircle"
          | "addRowBtn";
      }
    | undefined;
}

const { Text } = Typography;
const { Search } = Input;

const SimpleTable: React.FC<inputProps> = ({
  columns,
  data,
  title,
  pagination,
  handleRowClick,
  onChangeFilter,
  toggle,
  sortBy,
  button,
  search,
}) => {
  const [searchValue, setSearchValue] = useState("");
  const [initial, setInitial] = useState(true);

  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      if (!initial) {
        if (search) search.onSearch(searchValue);
      } else {
        setInitial(false);
      }
    }, 500);
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
                    suffix={toggle.suffix}
                    onChange={toggle.onChangeToggle}
                    checked={toggle.checkedToggle}
                  />
                </Col>
              </>
            )}
            {sortBy && (
              <ButtonGroup
                onChangeValue={onChangeFilter}
                options={sortBy.sortByOption}
                value={sortBy.sortByValue}
              />
            )}
            {search && (
              <>
                <Col>
                  <Search
                    placeholder={search.placeholder}
                    onChange={(val) => setSearchValue(val.target.value)}
                    value={searchValue}
                    className={styles.searchBar}
                  />
                </Col>
              </>
            )}
            <Col>
              {button && (
                <ChaiiButton
                  label={button.label}
                  btnClass={button.buttonClass}
                  onClick={button.onClick}
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
