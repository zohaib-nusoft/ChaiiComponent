import { Input as AntInput, InputNumber, Typography } from "antd";
import TextArea from "antd/es/input/TextArea";
import classNames from "classnames";
import React from "react";
import "../../sharedStyles.scss"; // Importing Bootstrap
import styles from "./Input.module.scss";

interface inputProps {
  suffix?: React.ReactNode;
  placeholder?: string;
  type?: "password" | "input";
  disable?: boolean;
  inputType?: "normal" | "textArea" | "number" | "password";
  maxLength?: number;
  height?: "middle" | "large" | "small";
  style?: React.CSSProperties;
  initialValue?: string;
  minLength?: number | string;
  steric?: boolean; // New prop for asterisk
}

const { Text } = Typography;

const ChaiInput: React.FC<inputProps> = ({
  suffix,
  placeholder,
  type,
  disable,
  inputType = "normal",
  maxLength = 500,
  height = "middle",
  initialValue,
  style,
  minLength,
}) => {
  return (
    <>
      {inputType === "textArea" ? (
        <TextArea
          showCount={height !== "small"}
          maxLength={maxLength}
          placeholder={placeholder}
          style={{
            width: "100%",
            height:
              height === "middle" ? 120 : height === "large" ? 160 : "2.5rem",
            ...style,
          }}
        />
      ) : inputType === "number" ? (
        <InputNumber min={minLength} defaultValue={initialValue} />
      ) : inputType === "password" ? (
        <AntInput.Password
          disabled={disable}
          type="password"
          defaultValue={initialValue}
          placeholder={placeholder}
          className={classNames(
            styles.inputStyles,
            "d-flex align-items-center"
          )}
        />
      ) : (
        <AntInput
          disabled={disable}
          type={type}
          defaultValue={initialValue}
          placeholder={placeholder}
          suffix={suffix}
          className={classNames(
            styles.inputStyles,
            "d-flex align-items-center"
          )}
        />
      )}
    </>
  );
};

export default ChaiInput;
