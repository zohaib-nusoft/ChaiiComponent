import React from "react";
import { Divider as AntDivider } from "antd";
import classNames from "classnames";
import styles from "./Divider.module.scss";

interface DividerProps {
  orientation?: "horizontal" | "vertical";
}

const ChaiiDivider: React.FC<DividerProps> = ({
  orientation = "horizontal",
}) => {
  if (orientation === "vertical") {
    return (
      <AntDivider
        type="vertical"
        className={classNames(styles.verticalDivider)}
      />
    );
  }
  return <AntDivider className={styles.dividerStyles} />;
};

export default ChaiiDivider;
