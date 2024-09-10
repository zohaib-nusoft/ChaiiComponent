import React from "react";
import { DatePicker, Form, Typography } from "antd";
import styles from "./DatePickerInput.module.scss";
import classNames from "classnames";
import "../../sharedStyles.scss"; // Importing Bootstrap

const { Text } = Typography;

interface Props {
  label?: string;
  name: string;
}

const ChaiiDatePicker: React.FC<Props> = ({ label, name }) => {
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
      <DatePicker
        className={classNames(
          "d-flex",
          "align-items-center",
          styles.dateInputContainer
        )}
      />
    </Form.Item>
  );
};

export default ChaiiDatePicker;