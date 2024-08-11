import React from "react";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";
import styles from "./Breadcrumb.module.scss";
import "../../sharedStyles.scss"; // Importing Bootstrap

interface BreadcrumbProps {
  rootLabel?: string;
  rootPath?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({
  rootLabel = "Home",
  rootPath = "/",
}) => {
  const location = useLocation();
  const pathSnippets = location.pathname.split("/").filter((i) => i);
  const breadcrumbItems = pathSnippets.map((snippet, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
    const breadcrumbText = decodeURIComponent(snippet.replace(/-/g, " "));

    return (
      <li
        className={classNames("d-inline-flex", styles["breadcrumb-item"])}
        key={url}
      >
        <Link to={url}>{breadcrumbText}</Link>
      </li>
    );
  });

  return (
    <nav
      className={classNames(
        "d-flex",
        "flex-wrap",
        styles["breadcrumb-wrapper"]
      )}
      aria-label="breadcrumb"
    >
      <ol className={classNames("d-flex", "flex-wrap", styles["breadcrumb"])}>
        {rootPath && (
          <li
            className={classNames("d-inline-flex", styles["breadcrumb-item"])}
          >
            <Link to={rootPath}>{rootLabel}</Link>
          </li>
        )}
        {breadcrumbItems}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
