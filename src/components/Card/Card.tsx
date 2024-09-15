import { Col, Flex, Row } from "antd";
import React from "react";
import "../../sharedStyles.scss";
import ChaiiText from "../ChaiiText/ChaiiText";
import styles from "./cardStyle.module.scss";

interface props {
  heading?: string;
  icon?: React.ReactNode;
  desc?: string;
  children?: React.ReactNode;
}

const Card: React.FC<props> = ({ heading, icon, desc, children }) => {
  return (
    <Flex className={`w-100 ${styles.main} bg-white rounded-1`}>
      <Row className="w-100">
        <Col span={18}>
          <ChaiiText>{heading}</ChaiiText>
          <ChaiiText>{desc}</ChaiiText>
        </Col>
        <Col span={6} className="d-flex justify-content-end">
          {icon}
        </Col>
        <Col span={24}>{children}</Col>
      </Row>
    </Flex>
  );
};

export default Card;
