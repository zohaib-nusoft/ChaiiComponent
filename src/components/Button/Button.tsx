import { Button as AntdButton, Typography } from "antd";
import classNames from "classnames";
import React from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  btnClass?:
    | "filledBtnLarge"
    | "filledBtn"
    | "whiteBtn"
    | "roundBtn"
    | "iconBtnCircle"
    | "addRowBtn"
    | "actionBtn"
    | "filledBtnWide";
  label?: string;
  btnType?: "button" | "submit" | "reset";
  onClick?: (e: React.MouseEvent) => void;
  icon?: React.ReactNode;
}

const { Text } = Typography;

const ChaiiButton: React.FC<ButtonProps> = ({
  btnClass = "filledBtn",
  label,
  btnType = "button",
  onClick,
  icon,
}) => {
  const buttonClass = classNames(
    styles[btnClass],
    "d-flex justify-content-center align-items-center"
  );

  return (
    <AntdButton htmlType={btnType} className={buttonClass} onClick={onClick}>
      {icon && <span className={styles.icon}>{icon}</span>}
      {label && <Text className={styles.btnText}>{label}</Text>}
    </AntdButton>
  );
};

export default ChaiiButton;
