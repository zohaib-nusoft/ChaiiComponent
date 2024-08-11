import { Typography } from "antd";
import React from "react";
import styles from "./ChaiiText.module.scss";

interface Props {
  className?: string;
  children?: React.ReactNode | string;
}

const ChaiiText: React.FC<Props> = ({ className, children }) => {
  return (
    <Typography.Text className={`${styles.defaultText} ${className}`}>
      {children}
    </Typography.Text>
  );
};

export default ChaiiText;
