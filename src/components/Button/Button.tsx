import { Button, Typography } from "antd";
import classNames from "classnames";
import React from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  btnClass?: "filled_btn_large" | "filled_btn" | "white_btn" | "round_btn";
  label?: string;
  btnType?: "button" | "submit" | "reset";
  onClick?: (e: React.MouseEvent) => void;
}

const { Text } = Typography;

const ChaiiButton: React.FC<ButtonProps> = ({
  btnClass = "filled_btn",
  label = "Button",
  btnType = "button",
  onClick,
}) => {
  const buttonClass = classNames(styles[btnClass]);

  return (
    <Button htmlType={btnType} className={buttonClass} onClick={onClick}>
      <Text className={styles.btn_text}>{label}</Text>
    </Button>
  );
};

export default ChaiiButton;
