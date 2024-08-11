import React from 'react';

interface ButtonProps {
    btnClass?: "filledBtnLarge" | "filledBtn" | "whiteBtn" | "roundBtn";
    label?: string;
    btnType?: "button" | "submit" | "reset";
    onClick?: (e: React.MouseEvent) => void;
}
declare const ChaiiButton: React.FC<ButtonProps>;

interface BreadcrumbProps {
    rootLabel?: string;
    rootPath?: string;
}
declare const Breadcrumb: React.FC<BreadcrumbProps>;

interface DividerProps {
    orientation?: "horizontal" | "vertical";
}
declare const ChaiiDivider: React.FC<DividerProps>;

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

interface Props {
    label?: string;
    name: string;
}
declare const ChaiiDateRange: React.FC<Props>;

export { Breadcrumb, ChaiiButton as Button, ChaiiDateRange as DateRangeInput, ChaiiDivider as Divider, ChaiInput as Input };
