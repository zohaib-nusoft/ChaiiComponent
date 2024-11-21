import { BellOutlined, SearchOutlined } from "@ant-design/icons";
import { Avatar, Badge, Input, Layout } from "antd";
import "bootstrap/dist/css/bootstrap.min.css";
import classNames from "classnames";
import React, { useEffect, useState } from "react";
import "../../CustomBootstrap.scss";
import ChaiiText from "../ChaiiText/ChaiiText";
import styles from "./AppHeader.module.scss";

const { Header } = Layout;

interface Props {
  logo?: React.ReactNode;
  isAuthenticated: boolean;
  userName?: string; // Made optional
  notification?: { notificationsCount?: number }; // Made optional
  avatarImage?: string;
  isAdmin?: boolean;
  search?: { visible: boolean; onSearch: (value: string) => void };
}

const AppHeader: React.FC<Props> = ({
  logo,
  isAuthenticated,
  userName = "", // Default to empty string
  notification, // Default to 0
  avatarImage,
  isAdmin,
  search,
}) => {
  const [searchValue, setSearchValue] = useState("");
  const [initial, setInitial] = useState(true);

  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      if (!initial) {
        if (search) search.onSearch(searchValue);
      } else {
        setInitial(false);
      }
    }, 500);
    return () => {
      clearTimeout(debounceTimeout);
    };
  }, [searchValue]);
  return (
    <Header
      className={classNames(
        "d-flex align-items-center bg-white justify-content-between",
        styles[isAdmin ? "header_app_admin" : "header_app"]
      )}
    >
      <div className={styles.logo}>{logo}</div>
      {isAuthenticated ? (
        <div className="d-flex align-items-center gap-3">
          {search ? (
            <>
              <SearchOutlined className={styles.icon} />
              {search.visible ? <Input /> : <></>}
            </>
          ) : null}
          {notification && (
            <Badge
              count={notification.notificationsCount}
              className={styles.icon}
            >
              <BellOutlined />
            </Badge>
          )}

          <Avatar className={styles.avatar} src={avatarImage}>
            {!avatarImage && userName.charAt(0)}
          </Avatar>
          <ChaiiText className={styles.userName}>{userName}</ChaiiText>
        </div>
      ) : null}
    </Header>
  );
};

export default AppHeader;
