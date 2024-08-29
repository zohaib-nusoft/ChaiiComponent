import React from "react";
import { Typography } from "antd";
import ChaiiButton from "../../components/Button/Button";
import styles from "./InputFieldHeader.module.scss";
import "../../sharedStyles.scss";

interface Props {
  heading: string;
  buttonText?: string; // Made optional
  onButtonClick?: () => void; // Made optional
  buttonClass?:
    | "filledBtnLarge"
    | "filledBtn"
    | "whiteBtn"
    | "roundBtn"
    | "iconBtnCircle";
  btnType?: "button" | "submit" | "reset"; // Add the btnType prop
}

const InputFieldHeader: React.FC<Props> = ({
  heading,
  buttonText,
  onButtonClick,
  buttonClass = "filledBtn", // Default to "filledBtn" if no class is provided
  btnType = "button", // Default value
}) => {
  return (
    <div className="d-flex justify-content-between align-items-center p-3">
      <Typography.Title level={4} className={styles.heading}>
        {heading}
      </Typography.Title>
      {buttonText && onButtonClick && (
        <ChaiiButton
          btnClass={buttonClass}
          label={buttonText}
          btnType={btnType} // Pass btnType to ChaiiButton
          onClick={onButtonClick}
        />
      )}
    </div>
  );
};

export default InputFieldHeader;
