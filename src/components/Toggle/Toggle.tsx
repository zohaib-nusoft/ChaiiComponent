import { Col, Row, Switch, Typography } from "antd";
import classNames from "classnames";
import React from "react";
import styles from "./Toggle.module.scss";

interface ToggleProps {
  checked?: boolean;
  onChange?: (i: boolean) => void | undefined;
  label?: string;
  suffix?: React.ReactNode;
}

const { Text } = Typography;

const ChaiiToggle: React.FC<ToggleProps> = ({
  checked = false,
  onChange,
  label,
  suffix,
}) => {
  const toggleClass = classNames(
    "d-flex justify-content-center align-items-center"
  );

  const toggleLabel = classNames(styles.toggleLabel);
  return (
    <Row gutter={10}>
      {suffix && (
        <Col>
          <Text
            className={classNames(
              "d-flex justify-content-center align-items-center",
              styles.toggleLabelSuffix
            )}
          >
            {suffix}
          </Text>
        </Col>
      )}
      <Col>
        <Switch
          className={toggleClass}
          checked={checked}
          onChange={(val) => {
            if (onChange) onChange(val);
          }}
        />
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
