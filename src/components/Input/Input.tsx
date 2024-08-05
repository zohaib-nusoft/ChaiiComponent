// import React from "react";
// import { Form, Input as AntInput, InputNumber, Typography } from "antd";
// import TextArea from "antd/es/input/TextArea";
// import styles from "./Input.module.scss";

// interface inputProps {
//   suffix?: React.ReactNode;
//   name: string;
//   placeholder?: string;
//   type?: "password" | "input";
//   label?: string;
//   disable?: boolean;
//   inputType?: "normal" | "textArea" | "number";
//   maxLength?: number;
//   height?: "middle" | "large" | "small";
//   style?: React.CSSProperties;
//   initialValue?: string;
//   minLength?: number | string;
// }

// const { Text } = Typography;

// const ChaiInput: React.FC<inputProps> = ({
//   suffix,
//   name = "test",
//   placeholder,
//   type,
//   label,
//   disable,
//   inputType = "normal",
//   maxLength = 500,
//   height = "middle",
//   initialValue,
//   style,
//   minLength,
// }) => {
//   return (
//     <Form.Item
//       label={
//         <span style={{ marginBottom: "-0.8rem" }}>
//           <Text className={styles.inputLabelStyle}>{label}</Text>
//         </span>
//       }
//       labelCol={{ span: label ? 24 : 0 }}
//       initialValue={initialValue}
//       className={styles.formDiv}
//       name={name}
//     >
//       {inputType === "textArea" ? (
//         <TextArea
//           showCount={height === "small" ? false : true}
//           maxLength={maxLength}
//           placeholder={placeholder}
//           style={{
//             width: "100%",
//             height:
//               height === "middle" ? 120 : height === "large" ? 160 : "2.5rem",
//             ...style,
//           }}
//         />
//       ) : inputType === "number" ? (
//         <InputNumber min={minLength} defaultValue={initialValue} />
//       ) : (
//         <AntInput
//           disabled={disable}
//           type={type}
//           defaultValue={initialValue}
//           placeholder={placeholder}
//           suffix={suffix}
//           className={styles.inputStyles}
//         />
//       )}
//     </Form.Item>
//   );
// };

// export default ChaiInput;
import React from "react";
import { Form, Input as AntInput, InputNumber, Typography } from "antd";
import TextArea from "antd/es/input/TextArea";
import styles from "./Input.module.scss";

interface inputProps {
  suffix?: React.ReactNode;
  name: string;
  placeholder?: string;
  type?: "password" | "input";
  label?: string;
  disable?: boolean;
  inputType?: "normal" | "textArea" | "number" | "password";
  maxLength?: number;
  height?: "middle" | "large" | "small";
  style?: React.CSSProperties;
  initialValue?: string;
  minLength?: number | string;
}

const { Text } = Typography;

const ChaiInput: React.FC<inputProps> = ({
  suffix,
  name = "test",
  placeholder,
  type,
  label,
  disable,
  inputType = "normal",
  maxLength = 500,
  height = "middle",
  initialValue,
  style,
  minLength,
}) => {
  return (
    <Form.Item
      label={
        <span style={{ marginBottom: "-0.8rem" }}>
          <Text className={styles.inputLabelStyle}>{label}</Text>
        </span>
      }
      labelCol={{ span: label ? 24 : 0 }}
      initialValue={initialValue}
      className={styles.formDiv}
      name={name}
    >
      {inputType === "textArea" ? (
        <TextArea
          showCount={height === "small" ? false : true}
          maxLength={maxLength}
          placeholder={placeholder}
          style={{
            width: "100%",
            height:
              height === "middle" ? 120 : height === "large" ? 160 : "2.5rem",
            ...style,
          }}
        />
      ) : inputType === "number" ? (
        <InputNumber min={minLength} defaultValue={initialValue} />
      ) : inputType === "password" ? (
        <AntInput.Password
          disabled={disable}
          type="password"
          defaultValue={initialValue}
          placeholder={placeholder}
          className={styles.inputStyles}
        />
      ) : (
        <AntInput
          disabled={disable}
          type={type}
          defaultValue={initialValue}
          placeholder={placeholder}
          suffix={suffix}
          className={styles.inputStyles}
        />
      )}
    </Form.Item>
  );
};

export default ChaiInput;
