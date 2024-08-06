// import React from "react";
// import { Link, useLocation } from "react-router-dom";
// import classNames from "classnames";
// import styles from "./Breadcrumb.module.scss";

// const Breadcrumb: React.FC = () => {
//   const location = useLocation();
//   const pathSnippets = location.pathname.split("/").filter((i) => i);
//   const buttonClass = classNames(styles["breadcrumb-wrapper"]);
//   const breadcrumbItems = pathSnippets.map((snippet, index) => {
//     const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
//     const breadcrumbText = decodeURIComponent(snippet.replace(/-/g, " "));

//     return (
//       <li className={`${classNames(styles["breadcrumb-item"])}`} key={url}>
//         <Link to={url}>{breadcrumbText}</Link>
//       </li>
//     );
//   });

//   return (
//     <nav
//       className={`${classNames(styles["breadcrumb-wrapper"])}`}
//       aria-label="breadcrumb"
//     >
//       <ol className={`${classNames(styles["breadcrumb"])}`}>
//         <li className={`${classNames(styles["breadcrumb-item"])}`}>
//           <Link to="/">Home</Link>
//         </li>
//         {breadcrumbItems}
//       </ol>
//     </nav>
//   );
// };

// export default Breadcrumb;
import React from "react";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";
import styles from "./Breadcrumb.module.scss";

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
      <li className={classNames(styles["breadcrumb-item"])} key={url}>
        <Link to={url}>{breadcrumbText}</Link>
      </li>
    );
  });

  return (
    <nav
      className={classNames(styles["breadcrumb-wrapper"])}
      aria-label="breadcrumb"
    >
      <ol className={classNames(styles["breadcrumb"])}>
        {rootPath && (
          <li className={classNames(styles["breadcrumb-item"])}>
            <Link to={rootPath}>{rootLabel}</Link>
          </li>
        )}
        {breadcrumbItems}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
