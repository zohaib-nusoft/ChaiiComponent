import {
  CheckboxOptionType,
  Col,
  Input,
  Row,
  Skeleton,
  Table,
  Typography,
} from "antd";
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
  tableStyle?: "middle" | "large" | "small";
  isLoading: boolean;
  staticHeight?: boolean;
  heightAdjuster?: number;
  footer?: () => React.ReactNode | undefined;
}

const { Text } = Typography;
const { Search } = Input;

const SimpleTable: React.FC<inputProps> = ({
  columns,
  data,
  pagination,
  handleRowClick,
  onChangeFilter,
  toggle,
  sortBy,
  button,
  search,
  tableStyle = "middle",
  isLoading = true,
  heightAdjuster = 20,
  staticHeight,
  footer,
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

  const loadingColumns = columns.map((col) => ({
    ...col,
    render: (value: any, record: any) =>
      isLoading ? (
        <Skeleton.Input active block />
      ) : (
        (col.render?.(value, record) ?? value)
      ),
  }));

  const tableHeightScroll = `calc(100vh - ${
    (tableStyle === "small" && !heightAdjuster ? 20 : heightAdjuster) + 7.5
  }rem)`;

  return (
    <Content
      style={{ flexGrow: 1 }}
      className={`${styles.tableContainer}  d-flex flex-column p-2`}
    >
      <Row className={`d-flex align-items-center  justify-content-between`}>
        <Col
          span={24}
          className={`d-flex align-items-center justify-content-between  gap-1 ${styles.controls}`}
        >
          <Row
            className="d-flex align-items-center justify-content-between   w-100"
            gutter={20}
          >
            <Col>
              <Row className="ms-1" gutter={20}>
                {sortBy && (
                  <ButtonGroup
                    onChangeValue={onChangeFilter}
                    options={sortBy.sortByOption}
                    value={sortBy.sortByValue}
                  />
                )}
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
              </Row>
            </Col>

            <Row gutter={20}>
              {search && (
                <Col>
                  <Search
                    placeholder={search.placeholder}
                    onChange={(val) => setSearchValue(val.target.value)}
                    value={searchValue}
                    className={styles.searchBar}
                  />
                </Col>
              )}

              {button && (
                <Col>
                  <ChaiiButton
                    label={button.label}
                    btnClass={button.buttonClass}
                    onClick={button.onClick}
                  />
                </Col>
              )}
            </Row>
          </Row>
        </Col>
      </Row>
      <Table
        dataSource={
          isLoading ? Array.from({ length: 5 }).map(() => ({})) : (data ?? [])
        }
        columns={loadingColumns}
        footer={footer}
        rowKey={() => `${Math.random()}`}
        size="middle"
        scroll={{
          y: staticHeight ? undefined : tableHeightScroll,
          x: "min-content",
        }}
        onRow={(record) => {
          return {
            style: { cursor: "pointer" },
            onClick: () => {
              if (handleRowClick) handleRowClick(record);
            },
          };
        }}
        pagination={pagination}
        className={`d-flex ${styles[`customTable_${tableStyle}`]} mt-3`}
      />
    </Content>
  );
};

export default SimpleTable;
