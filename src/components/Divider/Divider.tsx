import React from "react";
import { Divider } from "antd";
import classNames from "classnames";
import styles from "./Divider.module.scss";

const ChaiiDivider: React.FC = () => {
  return <Divider className={`${classNames(styles["dividerStyles"])}`} />;
};

export default ChaiiDivider;
