import React from "react";
import { Form, Select, SelectProps } from "antd";
import ChaiiText from "../ChaiiText/ChaiiText";
import styles from "./ChaiiMultiSelect.module.scss";

interface ChaiiMultiSelectProps {
  size?: "middle" | "large" | "small";
  defaultValue?: string[];
  name: string;
  label?: string;
  options: SelectProps["options"];
  placeholder?: string;
}

const ChaiiMultiSelect: React.FC<ChaiiMultiSelectProps> = ({
  size = "middle",
  defaultValue,
  name,
  label,
  options,
  placeholder,
}) => {
  return (
    <Form.Item
      label={
        <span className={styles.labelStyle}>
          <ChaiiText className="input-label-style">{label}</ChaiiText>
        </span>
      }
      labelCol={{ span: label ? 24 : 0 }}
      className={styles.formDiv}
      name={name}
    >
      <Select
        mode="multiple"
        size={size}
        placeholder={placeholder}
        defaultValue={defaultValue}
        options={options}
        className={styles.multiSelect}
      />
    </Form.Item>
  );
};

export default ChaiiMultiSelect;
