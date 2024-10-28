import React from "react";
import "../../sharedStyles.scss";
import InputFieldHeader from "../InputFieldHeader/InputFieldHeader";
import styles from "./PageHeader.module.scss";

interface Props {
  heading: string | React.ReactNode;
  buttonText?: string;
  onButtonClick?: () => void;
  btnType?: "button" | "submit" | "reset";
}

const PageHeader: React.FC<Props> = ({
  heading,
  buttonText,
  onButtonClick,
  btnType = "button",
}) => {
  return (
    <div className={`d-flex flex-column gap-2 ${styles.pageHeaderContainer}`}>
      <InputFieldHeader
        heading={heading}
        buttonText={buttonText}
        btnType={btnType} // Pass btnType to ChaiiButton
        onButtonClick={onButtonClick}
      />
    </div>
  );
};

export default PageHeader;
