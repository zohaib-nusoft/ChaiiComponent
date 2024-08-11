import { Button, Typography } from "antd";
import classNames from "classnames";
import React from "react";
import styles from "./Button.module.scss";
import "../../sharedStyles.scss"; // Importing Bootstrap

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
  icon?: React.ReactNode; // Optional: You can add this if the button includes an icon
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
    <Button htmlType={btnType} className={buttonClass} onClick={onClick}>
      {icon && <span className={styles.icon}>{icon}</span>}{" "}
      {/* Render the icon if provided */}
      {label && <Text className={styles.btnText}>{label}</Text>}
    </Button>
  );
};

export default ChaiiButton;
