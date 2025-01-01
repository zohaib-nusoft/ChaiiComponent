import { Tag, Typography } from "antd";
import { PresetColorType } from "antd/es/_util/colors";
import { LiteralUnion } from "antd/es/_util/type";
import React from "react";
import {
  ACTION,
  PAYMENT_STATUS,
  RESOURCESTATUS,
  STATUS,
  TIMESHEET_STATUS,
} from "../constants/enums";
import styles from "./Tags.module.scss";

const { Text } = Typography;

interface StatusTagProps {
  tags: string | string[]; // Adjust type as needed
  className?: string | undefined;
  color?:
    | LiteralUnion<
        | "processing"
        | "error"
        | "success"
        | "warning"
        | "default"
        | PresetColorType
      >
    | undefined;
  onClick?: (e: React.MouseEvent) => void;
}

const StatusTag: React.FC<StatusTagProps> = ({
  tags,
  className,
  onClick,
  color,
}) => {
  const tagArr: {
    name: string | null;
    value:
      | LiteralUnion<
          | "processing"
          | "error"
          | "success"
          | "warning"
          | "default"
          | PresetColorType
        >
      | undefined;
  }[] = [
    { name: RESOURCESTATUS.AVAILABLE, value: "processing" },
    { name: RESOURCESTATUS.BUSY, value: "error" },
    { name: RESOURCESTATUS.COMPLETED, value: "success" },
    { name: RESOURCESTATUS.VACATION, value: "warning" },
    { name: ACTION.ALLOW, value: "success" },
    { name: ACTION.RESTRICT, value: "error" },
    { name: ACTION.DELETE, value: "error" },
    { name: TIMESHEET_STATUS.APPROVAL, value: "success" },
    { name: TIMESHEET_STATUS.PENDING, value: "processing" },
    { name: TIMESHEET_STATUS.REVISION, value: "warning" },
    { name: PAYMENT_STATUS.APPROVED, value: "success" },
    { name: PAYMENT_STATUS.PENDING, value: "processing" },
    { name: STATUS.SUCCESS, value: "success" },
    { name: STATUS.ERROR, value: "error" },
    { name: STATUS.PROCESSING, value: "processing" },
    { name: STATUS.WARNING, value: "warning" },
    { name: STATUS.DEFAULT, value: "default" },
    { name: null, value: "default" },
  ];

  return (
    <>
      {tagArr.map(({ value, name }) => {
        return name?.toLowerCase() === tags.toString().toLowerCase() ? (
          <Tag color={color ?? value} onClick={onClick}>
            <Text
              className={`${styles[`status_text_${className ? className : value}`]} ${className}`}
            >
              {typeof tags === "string"
                ? tags?.toString().charAt(0).toUpperCase() +
                  tags?.toString().slice(1, tags?.length).toLocaleLowerCase()
                : ""}
            </Text>
          </Tag>
        ) : (
          <></>
        );
      })}
    </>
  );
};

export default StatusTag;
