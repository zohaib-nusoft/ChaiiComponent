import React from "react";
import { Layout, Avatar, Badge } from "antd";
import {
  SearchOutlined,
  QuestionCircleOutlined,
  BellOutlined,
  GlobalOutlined,
} from "@ant-design/icons";
import styles from "./AppHeader.module.scss";
import classNames from "classnames";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../CustomBootstrap.scss";

const { Header } = Layout;

interface Props {
  logo?: React.ReactNode;
  isAuthenticated: boolean;
  userName?: string; // Made optional
  notificationsCount?: number; // Made optional
  avatarImage?: string;
}

const AppHeader: React.FC<Props> = ({
  logo,
  isAuthenticated,
  userName = "", // Default to empty string
  notificationsCount = 0, // Default to 0
  avatarImage,
}) => {
  return (
    <Header
      className={classNames(
        "d-flex align-items-center bg-white justify-content-between",
        styles["header_app"]
      )}
    >
      <div className={styles.logo}>{logo}</div>
      {isAuthenticated ? (
        <div className="d-flex align-items-center gap-3">
          <SearchOutlined className={styles.icon} />
          <QuestionCircleOutlined className={styles.icon} />
          <Badge count={notificationsCount} className={styles.icon}>
            <BellOutlined />
          </Badge>
          <Avatar className={styles.avatar} src={avatarImage}>
            {!avatarImage && userName.charAt(0)}
          </Avatar>
          <span className={styles.userName}>{userName}</span>
          <GlobalOutlined className={styles.icon} />
        </div>
      ) : null}
    </Header>
  );
};

export default AppHeader;
