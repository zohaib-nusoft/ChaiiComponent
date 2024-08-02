import React from "react";
interface ButtonProps {
    label: string;
    textColor?: string;
}
declare const Button: ({ label, textColor }: ButtonProps) => React.JSX.Element;
export default Button;
