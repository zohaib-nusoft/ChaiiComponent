import {
  CheckboxOptionType,
  ConfigProvider,
  Radio,
  RadioChangeEvent,
} from "antd";
import React, { useState } from "react";
import { colors } from "../../colors";
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
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: colors.primary,
        },

        components: {
          Table: {
            headerColor: colors.textColor,
            rowSelectedBg: colors.white,
            rowSelectedHoverBg: colors.hover,
          },
          Radio: {
            buttonCheckedBg: colors.primary,
            buttonSolidCheckedActiveBg: colors.primary,
          },
        },
      }}
    >
      <Radio.Group
        options={options}
        onChange={onChange}
        value={currentValue}
        optionType="button"
        buttonStyle="solid"
      />
    </ConfigProvider>
  );
};

export default ButtonGroup;
