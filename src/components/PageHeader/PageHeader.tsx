import React from "react";
import InputFieldHeader from "../InputFieldHeader/InputFieldHeader";
import styles from "./PageHeader.module.scss";
import "../../sharedStyles.scss";

interface Props {
  heading: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

const PageHeader: React.FC<Props> = ({
  heading,
  buttonText,
  onButtonClick,
}) => {
  return (
    <div className={`d-flex flex-column gap-3 ${styles.pageHeaderContainer}`}>
      <InputFieldHeader
        heading={heading}
        buttonText={buttonText}
        onButtonClick={onButtonClick}
      />
    </div>
  );
};

export default PageHeader;
