import { Button, Typography } from "antd";
import classNames from "classnames";
import React from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  btnClass?: "filledBtnLarge" | "filledBtn" | "whiteBtn" | "roundBtn";
  label?: string;
  btnType?: "button" | "submit" | "reset";
  onClick?: (e: React.MouseEvent) => void;
}

const { Text } = Typography;

const ChaiiButton: React.FC<ButtonProps> = ({
  btnClass = "filledBtn",
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
