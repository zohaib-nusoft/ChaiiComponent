import React from "react";
import { Layout, Avatar, Badge } from "antd";
import {
  SearchOutlined,
  QuestionCircleOutlined,
  BellOutlined,
  GlobalOutlined,
} from "@ant-design/icons";
import styles from "./AppHeader.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";

const { Header } = Layout;

interface Props {
  logo?: React.ReactNode;
  isAuthenticated: boolean;
  userName: string;
  notificationsCount: number;
  avatarImage?: string;
}

const AppHeader: React.FC<Props> = ({
  logo,
  isAuthenticated,
  userName,
  notificationsCount,
  avatarImage,
}) => {
  return (
    <Header
      className={`d-flex align-items-center justify-content-between ${styles.header}`}
    >
      <div className={styles.logo}>{logo}</div>
      {isAuthenticated && (
        <div className="d-flex align-items-center gap-3">
          <SearchOutlined className={styles.icon} />
          <QuestionCircleOutlined className={styles.icon} />
          <Badge count={notificationsCount} className={styles.icon}>
            <BellOutlined />
          </Badge>
          <Avatar
            className={styles.avatar}
            src={avatarImage} // Use avatarImage if provided
          >
            {!avatarImage && userName.charAt(0)}{" "}
            {/* Show initial if no image */}
          </Avatar>
          <span className={styles.userName}>{userName}</span>
          <GlobalOutlined className={styles.icon} />
        </div>
      )}
    </Header>
  );
};

export default AppHeader;