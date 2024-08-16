import { Col, Flex, Row } from "antd";
import classNames from "classnames";
import React from "react";
import { Button, ChaiiText, Divider } from "../..";
import styles from "./CardStyles.module.scss";

interface props {
  type?: undefined | "attachment";
  logo?: React.ReactNode;
  border?: boolean;
  divider?: boolean;
  row?: boolean;
  data: {
    id?: string;
    date?: string;
    location?: string;
    heading: string;
    subText?: string;
    buttons?: { logo: React.ReactNode }[];
  }[];
}

const ChaiiFlatlistCards: React.FC<props> = ({
  data,
  type,
  logo,
  border,
  divider,
  row,
}) => {
  return (
    <Flex className="w-100">
      <Row
        gutter={[10, 20]}
        className={`w-100 ${row ? "d-flex justify-content-between align-items-center" : ""} `}
      >
        {data?.map((i) => (
          <Col span={row ? 12 : 19}>
            <Row
              className={`${border ? "border border-border p-3 rounded-1" : "w-100"}`}
            >
              <Col span={18}>
                <Row>
                  <Col
                    span={type === "attachment" ? 2 : 0}
                    className={
                      "d-flex justify-content-center align-items-center rounded-1 bg-light"
                    }
                  >
                    {type === "attachment" && logo}
                  </Col>
                  <Col span={type === "attachment" ? 22 : 24}>
                    <Col className="pb-1">
                      <ChaiiText
                        className={classNames(styles.experiance_card_title)}
                      >
                        {i?.heading}
                      </ChaiiText>
                    </Col>
                    <Col>
                      <ChaiiText
                        className={classNames(
                          styles.experiance_card_company_name
                        )}
                      >
                        {i?.subText}
                      </ChaiiText>
                    </Col>
                    <Col>
                      {i?.date && i.location ? (
                        <ChaiiText className={styles.experiance_card_location}>
                          {i?.location} - {i?.date}
                        </ChaiiText>
                      ) : (
                        <></>
                      )}
                    </Col>
                  </Col>
                </Row>
              </Col>
              <Col
                className="d-flex gap-2 justify-content-end align-items-start"
                span={6}
              >
                {i?.buttons ? (
                  i.buttons.map(({ logo }) => (
                    <Button icon={logo} btnClass="iconBtnCircle" />
                  ))
                ) : (
                  <></>
                )}
              </Col>
            </Row>
            {divider && <Divider />}
          </Col>
        ))}
      </Row>
    </Flex>
  );
};

export default ChaiiFlatlistCards;
