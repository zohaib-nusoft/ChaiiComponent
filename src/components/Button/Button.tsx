import { Button as AntdButton, Tooltip, Typography } from "antd";
import classNames from "classnames";
import React from "react";
import { colors } from "../../colors";
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
    | "filledBtnWide"
    | "actionBtnDanger";
  label?: string;
  btnType?: "button" | "submit" | "reset";
  onClick?: (e: React.MouseEvent) => void;
  icon?: React.ReactNode;
  disabled?: boolean;
  toolTipLabel?: string;
}

const { Text } = Typography;

const ChaiiButton: React.FC<ButtonProps> = ({
  btnClass = "filledBtn",
  label,
  btnType = "button",
  onClick,
  icon,
  disabled,
  toolTipLabel,
}) => {
  const buttonClass = classNames(
    styles[disabled ? "disabledBtn" : btnClass],
    "d-flex justify-content-center align-items-center"
  );

  return (
    <Tooltip color={colors.primary} title={toolTipLabel}>
      <AntdButton
        disabled={disabled}
        htmlType={btnType}
        type={btnClass === "actionBtn" ? "link" : "default"}
        className={buttonClass}
        onClick={onClick}
      >
        {icon && <span className={styles.icon}>{icon}</span>}
        {label && <Text className={styles.btnText}>{label}</Text>}
      </AntdButton>
    </Tooltip>
  );
};

export default ChaiiButton;
