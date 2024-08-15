import { Col, Flex, Row } from "antd";
import classNames from "classnames";
import React from "react";
import { Button, ChaiiText } from "../..";
import styles from "./CardStyles.module.scss";

interface props {
  type?: undefined | "attachment";
  logo?: React.ReactNode;
  data: {
    id?: string;
    date: string;
    location: string;
    heading: string;
    subText: string;
    buttons?: { logo: React.ReactNode }[];
  }[];
}

const ChaiiFlatlistCards = ({ data, type, logo }: props) => {
  return (
    <Flex className="w-100">
      <Row gutter={[20, 20]} className="w-100">
        {data?.map((i) => (
          <Col span={12}>
            <Row className="w-100">
              <Col span={18}>
                <Row>
                  <Col span={3}>{type === "attachment" && logo}</Col>
                  <Col span={21}>
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
          </Col>
        ))}
      </Row>
    </Flex>
  );
};

export default ChaiiFlatlistCards;
