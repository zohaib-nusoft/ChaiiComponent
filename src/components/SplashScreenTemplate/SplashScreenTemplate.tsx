import { Layout, Typography } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import styles from "./SplashScreenTemplate.module.scss";
import "../../sharedStyles.scss";

interface Props {
  children?: React.ReactNode;
  backgroundImagePath: string;
  logoPath?: string;
  copyrightText?: string;
}

const { Content } = Layout;
const { Text } = Typography;

const SplashScreenTemplate: React.FC<Props> = ({
  children,
  backgroundImagePath,
  logoPath,
  copyrightText,
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
      {copyrightText && (
        <div className={styles.copyrightContainer}>
          <Text className={styles.copyrightText}>{copyrightText}</Text>
        </div>
      )}
    </Content>
  );
};

export default SplashScreenTemplate;
