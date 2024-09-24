import { Typography } from "antd";
import React from "react";
import ChaiiButton from "../../components/Button/Button";
import "../../sharedStyles.scss";
import styles from "./InputFieldHeader.module.scss";

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
    <div className="d-flex justify-content-between align-items-center px-3 py-1">
      <Typography.Text className={styles.heading}>{heading}</Typography.Text>
      {buttonText && (
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
