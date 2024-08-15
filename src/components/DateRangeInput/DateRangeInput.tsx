import React from "react";
import { DatePicker, Form, Typography } from "antd";
import styles from "./DateRangeInput.module.scss";
import classNames from "classnames";
import "../../sharedStyles.scss"; // Importing Bootstrap

const { RangePicker } = DatePicker;
const { Text } = Typography;

interface Props {
  label?: string;
  name: string;
}

const ChaiiDateRange: React.FC<Props> = ({ label, name }) => {
  return (
    <Form.Item
      label={
        label ? (
          <span className={styles.labelMargin}>
            <Text className={styles.inputLabelStyle}>{label}</Text>
          </span>
        ) : null
      }
      labelCol={{ span: label ? 24 : 0 }}
      className={styles.formDiv}
      name={name}
    >
      <RangePicker
        className={classNames(
          "d-flex",
          "align-items-center",
          styles.rangeInputContainer
        )}
      />
    </Form.Item>
  );
};

export default ChaiiDateRange;
