// import React from "react";
// import { Button, Typography } from "antd";
// import classNames from "classnames";
// import styles from "./Button.module.scss";

// interface ButtonProps {
//   btn_class?: "filled_btn_large" | "filled_btn" | "white_btn";
//   label?: string;
//   btn_Type?: "button" | "submit" | "reset";
//   onClick?: (e: React.MouseEvent) => void;
// }

// const { Text } = Typography;

// const ChaiiButton: React.FC<ButtonProps> = ({
//   btn_class = "filled_btn",
//   label = "Button",
//   btn_Type = "button",
//   onClick,
// }) => {
//   const buttonClass = classNames(styles[btn_class]);

//   return (
//     <Button onClick={onClick} htmlType={btn_Type} className={buttonClass}>
//       <Text className={styles.btn_text}>{label}</Text>
//     </Button>
//   );
// };

// export default ChaiiButton;

import { Button, Typography } from "antd";
import classNames from "classnames";
import React from "react";
import styles from "./Button.module.scss";
interface ButtonProps {
  btn_class?: "filled_btn_large" | "filled_btn" | "white_btn";
  label?: string;
  btn_Type?: "button" | "submit" | "reset";
  onClick?: (e: React.MouseEvent) => void;
}

const { Text } = Typography;

const ChaiiButton: React.FC<ButtonProps> = ({
  btn_class = "filled_btn",
  label = "Button",
  btn_Type = "button",
  // onClick,
}) => {
  const buttonClass = classNames(styles[btn_class]);
  console.log(buttonClass);

  return (
    <Button
      // onClick={onClick}
      htmlType={btn_Type}
      className={`${buttonClass}`}
    >
      <Text className={`btn_text`}>{label}</Text>
    </Button>
  );
};

export default ChaiiButton;
