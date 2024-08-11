import React from "react";
import { Button, Typography } from "antd";
import styles from "./InputFieldHeader.module.scss";
import "../../sharedStyles.scss"; // Importing Bootstrap

interface Props {
  heading: string;
  buttonText: string;
  onButtonClick: () => void; // Callback function for button click
}

const InputFieldHeader: React.FC<Props> = ({
  heading,
  buttonText,
  onButtonClick,
}) => {
  return (
    <div className="d-flex justify-content-between align-items-center p-3">
      <Typography.Title level={4} className={styles.heading}>
        {heading}
      </Typography.Title>
      <Button type="primary" onClick={onButtonClick} className={styles.button}>
        {buttonText}
      </Button>
    </div>
  );
};

export default InputFieldHeader;
