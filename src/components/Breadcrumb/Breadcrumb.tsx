import React from "react";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom"; // Import only the Link component here
import { Location } from "history"; // Import the Location type from the history package
import classNames from "classnames";
import styles from "./Breadcrumb.module.scss";
import "../../sharedStyles.scss"; // Importing Bootstrap

interface BreadcrumbProps {
  rootLabel?: string;
  rootPath?: string;
  location: Location; // Correctly using the Location type here
}

const AppBreadcrumbs: React.FC<BreadcrumbProps> = ({
  rootLabel = "Home",
  rootPath = "/",
  location,
}) => {
  // Using the location prop instead of window.location
  const pathSnippets = location.pathname.split("/").filter((i) => i);

  const breadcrumbItems = pathSnippets.map((snippet, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
    const breadcrumbText = decodeURIComponent(snippet.replace(/-/g, " "));

    return (
      <Breadcrumb.Item key={url} className={styles["breadcrumb-item"]}>
        <Link to={url}>{breadcrumbText}</Link>
      </Breadcrumb.Item>
    );
  });

  return (
    <Breadcrumb className={classNames(styles["breadcrumb-wrapper"])}>
      {rootPath && (
        <Breadcrumb.Item className={styles["breadcrumb-item"]}>
          <Link to={rootPath}>{rootLabel}</Link>
        </Breadcrumb.Item>
      )}
      {breadcrumbItems}
    </Breadcrumb>
  );
};

export default AppBreadcrumbs;
