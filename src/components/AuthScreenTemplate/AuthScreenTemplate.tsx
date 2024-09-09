import { Col, Layout, Row, Typography } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";
import "../../sharedStyles.scss"; // Importing Bootstrap
import styles from "./AuthScreenTemplate.module.scss";

const { Content } = Layout;

interface Props {
  backgroundImagePath: string;
  children: React.ReactNode;
  logoPath?: React.ReactNode; // Updated to accept ReactNode for SVG components
  sloganText?: string;
  copyrightText?: string;
}

const AuthScreenTemplate: React.FC<Props> = ({
  backgroundImagePath,
  children,
  logoPath,
  sloganText,
  copyrightText,
}) => {
  const { t } = useTranslation();

  const mainStyle = backgroundImagePath
    ? { backgroundImage: `url(${backgroundImagePath})` }
    : {};

  return (
    <Layout className="h-100 w-100">
      <Content className="d-flex h-100 w-100">
        <Row className="h-100 w-100">
          <Col
            className={`p-0 h-100  d-flex align-items-center justify-content-start ${styles.leftCol}`}
            style={mainStyle}
            span={12}
          >
            <div className={styles.leftContent}>
              {logoPath && <div className={styles.logo}>{logoPath}</div>}
              {sloganText && (
                <Typography.Paragraph className={styles.slogan}>
                  {sloganText}
                </Typography.Paragraph>
              )}
            </div>
          </Col>
          <Col
            className={`d-flex justify-content-center align-items-center h-100 ${styles.rightCol}`}
            span={12}
          >
            <div className={styles.formContainer}>
              {children} {/* Render the passed form or any children here */}
            </div>
          </Col>
        </Row>
      </Content>
      {copyrightText && (
        <Typography.Paragraph className={styles.copyright}>
          {copyrightText}
        </Typography.Paragraph>
      )}
    </Layout>
  );
};

export default AuthScreenTemplate;
