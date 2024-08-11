import { Layout, Typography } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import styles from "./SplashScreenTemplate.module.scss";
import "../../sharedStyles.scss"; // Importing Bootstrap

interface Props {
  children?: React.ReactNode;
  backgroundImagePath: string;
  logoPath?: string;
}

const { Content } = Layout;
const { Text } = Typography;

const SplashScreenTemplate: React.FC<Props> = ({
  children,
  backgroundImagePath,
  logoPath,
}) => {
  const { t } = useTranslation();

  const containerLinkClass = classNames(styles.containerLink, {
    [styles.hasBackground]: backgroundImagePath,
  });

  const containerStyle = backgroundImagePath
    ? { backgroundImage: `url(${backgroundImagePath})` }
    : {};

  return (
    <Content
      className={classNames(
        containerLinkClass,
        "d-flex justify-content-center align-items-center flex-column"
      )}
      style={containerStyle}
    >
      {logoPath && <img src={logoPath} alt="Logo" className={styles.logo} />}
      {children}
      <div className={styles.copyrightContainer}>
        <Text className={styles.copyrightText}>{t("heading.copyright")}</Text>
      </div>
    </Content>
  );
};

export default SplashScreenTemplate;
