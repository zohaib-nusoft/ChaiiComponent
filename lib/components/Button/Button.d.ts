import React from "react";
interface ButtonProps {
    btnClass?: "filledBtnLarge" | "filledBtn" | "whiteBtn" | "roundBtn";
    label?: string;
    btnType?: "button" | "submit" | "reset";
    onClick?: (e: React.MouseEvent) => void;
}
declare const ChaiiButton: React.FC<ButtonProps>;
export default ChaiiButton;
