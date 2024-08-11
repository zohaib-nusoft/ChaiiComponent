import React from "react";
import { Col, Layout, Row, Typography, Form, Input, Button } from "antd";
import { useTranslation } from "react-i18next";
import styles from "./AuthScreenTemplate.module.scss";
import "../../sharedStyles.scss"; // Importing Bootstrap

const { Content } = Layout;
const { Title } = Typography;

interface Props {
  backgroundImagePath: string;
  heading: string;
  buttonText: string;
}

const AuthScreenTemplate: React.FC<Props> = ({
  backgroundImagePath,
  heading,
  buttonText,
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
                <Form className="w-100" layout="vertical">
                  <Form.Item label={t("username")} name="username">
                    <Input placeholder={t("Enter your username")} />
                  </Form.Item>
                  <Form.Item label={t("password")} name="password">
                    <Input.Password placeholder={t("Enter your password")} />
                  </Form.Item>
                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      className={styles.submitButton}
                    >
                      {buttonText}
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            </Col>
          </Row>
        </Content>
      </Layout>
    </div>
  );
};

export default AuthScreenTemplate;
