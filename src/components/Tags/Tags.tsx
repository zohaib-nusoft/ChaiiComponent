import { Badge, Tag, Typography } from "antd";
import styles from "./Tags.module.scss";
import React from "react";
import { STATUS } from "../constants/resource-status.enum";

const { Text } = Typography;

interface StatusTagProps {
  tags: string | string[]; // Adjust type as needed
  className?: string;
}

const StatusTag: React.FC<StatusTagProps> = ({ tags, className }) => {
  return (
    <>
      {tags?.toString() === STATUS.AVAILABLE ? (
        <Tag
          color="processing"
          icon={
            <Badge className={`${{ className }} me-1`} status="processing" />
          }
        >
          <Text className={styles.status_text_processing}>
            {tags?.toString().toUpperCase()}
          </Text>
        </Tag>
      ) : tags?.toString() === STATUS.BUSY ? (
        <Tag
          color="error"
          icon={<Badge className={`${{ className }} me-1`} status="error" />}
        >
          <Text className={styles.status_text_error}>
            {tags?.toString().toUpperCase()}
          </Text>
        </Tag>
      ) : tags?.toString() === STATUS.COMPLETED ? (
        <Tag
          color="success"
          icon={<Badge className={`${{ className }} me-1`} status="success" />}
        >
          <Text className={styles.status_text_success}>
            {tags?.toString().toUpperCase()}
          </Text>
        </Tag>
      ) : tags?.toString() === STATUS.VACATION ? (
        <Tag
          color="warning"
          icon={<Badge className={`${{ className }} me-1`} status="warning" />}
        >
          <Text className={styles.status_text_warning}>
            {tags?.toString().toUpperCase()}
          </Text>
        </Tag>
      ) : (
        <Tag
          color="default"
          icon={<Badge className={`${{ className }} me-1`} status="default" />}
        >
          <Text className={styles.status_text_default}>
            {tags?.toString().toUpperCase()}
          </Text>
        </Tag>
      )}
    </>
  );
};

export default StatusTag;
