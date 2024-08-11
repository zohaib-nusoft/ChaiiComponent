import React from "react";
import { Layout, Avatar, Badge } from "antd";
import {
  SearchOutlined,
  QuestionCircleOutlined,
  BellOutlined,
  GlobalOutlined,
} from "@ant-design/icons";
import styles from "./AppHeader.module.scss";
import "bootstrap/dist/css/bootstrap.min.css"; // Importing Bootstrap

const { Header } = Layout;

interface Props {
  logo?: React.ReactNode;
  isAuthenticated: boolean;
  userName: string;
  notificationsCount: number;
}

const AppHeader: React.FC<Props> = ({
  logo,
  isAuthenticated,
  userName,
  notificationsCount,
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
          <Avatar className={styles.avatar}>{userName.charAt(0)}</Avatar>
          <span className={styles.userName}>{userName}</span>
          <GlobalOutlined className={styles.icon} />
        </div>
      )}
    </Header>
  );
};

export default AppHeader;
