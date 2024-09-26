import { Tag, Typography } from "antd";
import styles from "./Tags.module.scss";
import React from "react";
import { ACTION, PROJECTSTATUS, RESOURCESTATUS } from "../constants/enums";

const { Text } = Typography;

interface StatusTagProps {
  tags: string | string[]; // Adjust type as needed
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
}

const StatusTag: React.FC<StatusTagProps> = ({ tags, className, onClick }) => {
  return (
    <>
      {tags?.toString() === RESOURCESTATUS.AVAILABLE ? (
        <Tag color="processing" onClick={onClick}>
          <Text className={styles.status_text_processing}>
            {tags?.toString().toUpperCase()}
          </Text>
        </Tag>
      ) : tags?.toString() === RESOURCESTATUS.BUSY ? (
        <Tag color="error" onClick={onClick}>
          <Text className={styles.status_text_error}>
            {tags?.toString().toUpperCase()}
          </Text>
        </Tag>
      ) : tags?.toString() === RESOURCESTATUS.COMPLETED ? (
        <Tag color="success" onClick={onClick}>
          <Text className={styles.status_text_success}>
            {tags?.toString().toUpperCase()}
          </Text>
        </Tag>
      ) : tags?.toString() === RESOURCESTATUS.VACATION ? (
        <Tag color="warning" onClick={onClick}>
          <Text className={styles.status_text_warning}>
            {tags?.toString().toUpperCase()}
          </Text>
        </Tag>
      ) : tags?.toString() === ACTION.ALLOW ? (
        <Tag color="success" onClick={onClick}>
          <Text className={styles.status_text_success}>
            {tags?.toString().toUpperCase()}
          </Text>
        </Tag>
      ) : tags?.toString() === ACTION.RESTRICT ? (
        <Tag color="error" onClick={onClick}>
          <Text className={styles.status_text_error}>
            {tags?.toString().toUpperCase()}
          </Text>
        </Tag>
      ) : tags?.toString() === PROJECTSTATUS.ACTIVE ? (
        <Tag color="success" onClick={onClick}>
          <Text className={styles.status_text_success}>
            {tags?.toString().toUpperCase()}
          </Text>
        </Tag>
      ) : tags?.toString() === PROJECTSTATUS.CLOSED ? (
        <Tag color="error" onClick={onClick}>
          <Text className={styles.status_text_error}>
            {tags?.toString().toUpperCase()}
          </Text>
        </Tag>
      ) : (
        <Tag color="default" onClick={onClick}>
          <Text className={styles.status_text_default}>
            {tags?.toString().toUpperCase()}
          </Text>
        </Tag>
      )}
    </>
  );
};

export default StatusTag;
