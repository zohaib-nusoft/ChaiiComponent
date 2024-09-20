import { CheckboxOptionType, Radio, RadioChangeEvent } from "antd";
import React, { useState } from "react";
import "../../sharedStyles.scss";

interface props {
  value?: string;
  options: (string | number | CheckboxOptionType<any>)[] | undefined;
  onChangeValue?: (value: string) => void;
}

const ButtonGroup: React.FC<props> = ({ value, options, onChangeValue }) => {
  const [currentValue, setcurrentValue] = useState(null || value);

  const onChange = ({ target: { value } }: RadioChangeEvent) => {
    setcurrentValue(value);
    if (onChangeValue) onChangeValue(value);
  };

  return (
    <>
      <Radio.Group
        options={options}
        onChange={onChange}
        value={currentValue}
        optionType="button"
        buttonStyle="solid"
      />
    </>
  );
};

export default ButtonGroup;
