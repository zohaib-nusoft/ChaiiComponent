import React from "react";
import { Typography } from "antd";
import ChaiiButton from "../../components/Button/Button";
import styles from "./InputFieldHeader.module.scss";
import "../../sharedStyles.scss";

interface Props {
  heading: string;
  buttonText: string;
  onButtonClick: () => void; // Callback function for button click
  buttonClass?:
    | "filledBtnLarge"
    | "filledBtn"
    | "whiteBtn"
    | "roundBtn"
    | "iconBtnCircle"
    | "iconBtnSquareBlue"
    | "iconBtnSquareGrey";
}

const InputFieldHeader: React.FC<Props> = ({
  heading,
  buttonText,
  onButtonClick,
  buttonClass = "filledBtn", // Default to "filledBtn" if no class is provided
}) => {
  return (
    <div className="d-flex justify-content-between align-items-center p-3">
      <Typography.Title level={4} className={styles.heading}>
        {heading}
      </Typography.Title>
      <ChaiiButton
        btnClass={buttonClass}
        label={buttonText}
        onClick={onButtonClick}
      />
    </div>
  );
};

export default InputFieldHeader;
