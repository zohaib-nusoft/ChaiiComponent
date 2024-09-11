import { Radio, RadioChangeEvent, Space } from "antd";
import React, { useState } from "react";
import { ChaiiText } from "../..";
import "../../sharedStyles.scss";
import styles from "./textStyles.module.scss";

interface Props {
  heading?: string;
  values: string[] | number[];
}

const RadioGroup: React.FC<Props> = ({ heading, values }) => {
  const [value, setValue] = useState(0);

  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
  };

  return (
    <Space align="start" className="d-flex gap-3 flex-column">
      <ChaiiText className={styles.heading}>{heading}</ChaiiText>
      <Radio.Group onChange={onChange} value={value}>
        {values.map((item) => (
          <Radio value={item}>{item}</Radio>
        ))}
      </Radio.Group>
    </Space>
  );
};

export default RadioGroup;
