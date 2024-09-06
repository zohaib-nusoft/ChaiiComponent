import { Select, SelectProps } from "antd";
import React from "react";
import styles from "./ChaiiMultiSelect.module.scss";

interface ChaiiMultiSelectProps {
  size?: "middle" | "large" | "small";
  defaultValue?: string;
  options?: SelectProps["options"]; // Made optional
  placeholder?: string;
  disabled?: boolean;
}

const ChaiiMultiSelect: React.FC<ChaiiMultiSelectProps> = ({
  size = "middle",
  defaultValue,
  options = [], // Provide an empty array as a default value
  placeholder,
  disabled,
}) => {
  return (
    <Select
      mode="tags"
      size={size}
      placeholder={placeholder}
      defaultValue={defaultValue}
      options={options}
      disabled={disabled}
      className={styles.multiSelect}
    />
  );
};

export default ChaiiMultiSelect;
