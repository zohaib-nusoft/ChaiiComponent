import React from "react";
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
declare const ChaiInput: React.FC<inputProps>;
export default ChaiInput;
