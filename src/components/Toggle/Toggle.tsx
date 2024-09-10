import React from "react";
import styles from "./Toggle.module.scss";
import { Col, Row, Switch, Typography } from "antd";
import classNames from "classnames";

interface ToggleProps {
  checked?: boolean;
  onChange: (i: boolean) => void;
  label?: string;
}

const { Text } = Typography;

const ChaiiToggle: React.FC<ToggleProps> = ({
  checked = false,
  onChange,
  label,
}) => {
  const toggleClass = classNames(
    "d-flex justify-content-center align-items-center"
  );

  const toggleLabel = classNames(styles.toggleLabel);
  return (
    <Row gutter={10}>
      <Col>
        <Switch className={toggleClass} checked={checked} onChange={onChange} />
      </Col>
      {label && (
        <Col>
          <Text className={toggleLabel}>{label}</Text>
        </Col>
      )}
    </Row>
  );
};

export default ChaiiToggle;
