import React from "react";
import { Col, Layout, Row, Typography } from "antd";
import { useTranslation } from "react-i18next";
import styles from "./AuthScreenTemplate.module.scss";
import "../../sharedStyles.scss"; // Importing Bootstrap

const { Content } = Layout;
const { Title } = Typography;

interface Props {
  backgroundImagePath: string;
  heading: string;
  buttonText: string;
  children: React.ReactNode; // New prop to accept children
}

const AuthScreenTemplate: React.FC<Props> = ({
  backgroundImagePath,
  heading,
  children, // Destructure children prop
}) => {
  const { t } = useTranslation();

  const mainStyle = backgroundImagePath
    ? { backgroundImage: `url(${backgroundImagePath})` }
    : {};

  return (
    <div className={`d-flex flex-column ${styles.container}`}>
      <Layout className="h-100">
        <Content className="d-flex h-100">
          <Row className="flex-grow-1 h-100">
            <Col
              className={`p-0 h-100 ${styles.leftCol}`}
              style={mainStyle}
              xs={24}
              md={12}
            />
            <Col
              className={`d-flex justify-content-center align-items-center ${styles.rightCol}`}
              xs={24}
              md={12}
            >
              <div className={styles.formContainer}>
                <Title level={2} className={styles.heading}>
                  {heading}
                </Title>
                {children} {/* Render the passed form or any children here */}
              </div>
            </Col>
          </Row>
        </Content>
      </Layout>
    </div>
  );
};

export default AuthScreenTemplate;
