import { Tag, Typography } from "antd";
import { PresetColorType } from "antd/es/_util/colors";
import { LiteralUnion } from "antd/es/_util/type";
import React from "react";
import {
  ACTION,
  INVOICES_STATUS,
  PAYMENT_STATUS,
  PROJECTSTATUS,
  RESOURCESTATUS,
  STATUS,
  TIMESHEET_STATUS,
} from "../constants/enums";

const { Text } = Typography;

interface StatusTagProps {
  tags: string | string[]; // Adjust type as needed
  className?: string | undefined;
  CustomName?: boolean;
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
  CustomName,
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
    { name: TIMESHEET_STATUS.PENDING, value: "processing" },
    { name: TIMESHEET_STATUS.REVISION, value: "warning" },
    { name: PAYMENT_STATUS.APPROVED, value: "success" },
    { name: PAYMENT_STATUS.PENDING, value: "processing" },
    { name: PAYMENT_STATUS.CONFIRMATION_PENDING, value: "processing" },
    { name: STATUS.SUCCESS, value: "success" },
    { name: STATUS.ERROR, value: "error" },
    { name: STATUS.PROCESSING, value: "processing" },
    { name: STATUS.WARNING, value: "warning" },
    { name: PROJECTSTATUS.ACTIVE, value: "success" },
    { name: PROJECTSTATUS.CLOSED, value: "error" },
    { name: STATUS.DEFAULT, value: "default" },
    { name: INVOICES_STATUS.INTRANSIT, value: "processing" },
    { name: INVOICES_STATUS.PENDING, value: "processing" },
    { name: INVOICES_STATUS.Paid, value: "success" },
    { name: TIMESHEET_STATUS.DRAFT, value: "default" },
    { name: null, value: "default" },
  ];

  return (
    <>
      {tagArr.map(({ value, name }) => {
        return name?.toLowerCase() === tags.toString().toLowerCase() ? (
          <Tag className={className} color={color ?? value} onClick={onClick}>
            {typeof tags === "string"
              ? tags?.toString().charAt(0).toUpperCase() +
                tags?.toString().slice(1, tags?.length).toLocaleLowerCase()
              : ""}
          </Tag>
        ) : name === null && CustomName ? (
          <>
            <Tag className={className} color={color ?? value} onClick={onClick}>
              {typeof tags === "string"
                ? tags?.toString().charAt(0).toUpperCase() +
                  tags?.toString().slice(1, tags?.length).toLocaleLowerCase()
                : ""}
            </Tag>
          </>
        ) : (
          <></>
        );
      })}
    </>
  );
};

export default StatusTag;
