import React from "react";
import { Button as AntdButton, Typography } from "antd";
import classNames from "classnames";
import styles from "./Button.module.scss";

interface ButtonProps {
  btnClass?:
    | "filledBtnLarge"
    | "filledBtn"
    | "whiteBtn"
    | "roundBtn"
    | "iconBtnCircle"
    | "iconBtnSquareBlue"
    | "iconBtnSquareGrey";
  label?: string;
  btnType?: "button" | "submit" | "reset";
  onClick?: (e: React.MouseEvent) => void;
  icon?: React.ReactNode;
}

const { Text } = Typography;

const ChaiiButton: React.FC<ButtonProps> = ({
  btnClass = "filledBtn",
  label = "Button",
  btnType = "button",
  onClick,
  icon, // Optional: Pass the icon as a prop if needed
}) => {
  const buttonClass = classNames(
    styles[btnClass],
    "d-flex justify-content-center align-items-center"
  );

  return (
    <AntdButton htmlType={btnType} className={buttonClass} onClick={onClick}>
      {icon && <span className={styles.icon}>{icon}</span>}{" "}
      {/* Render the icon if provided */}
      {label && <Text className="text-center">{label}</Text>}{" "}
      {/* Center the text */}
    </AntdButton>
  );
};

export default ChaiiButton;
