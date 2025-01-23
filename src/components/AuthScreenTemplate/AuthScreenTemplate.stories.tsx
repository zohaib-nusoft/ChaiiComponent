import type { Meta, StoryObj } from "@storybook/react";
import { Button, Form, Input } from "antd"; // Importing Ant Design components
import React from "react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import AuthScreenTemplate from "./AuthScreenTemplate";

const meta: Meta<typeof AuthScreenTemplate> = {
  title: "Components/AuthScreenTemplate",
  component: AuthScreenTemplate,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    backgroundImagePath: { control: "text" },
    sloganText: { control: "text" }, // New control for slogan
    copyrightText: { control: "text" }, // Control for the optional copyright text
  },
};

type Story = StoryObj<typeof AuthScreenTemplate>;

const DummyForm = () => (
  <Form className="w-100" layout="vertical">
    <Form.Item label="Username" name="username">
      <Input placeholder="Enter your username" />
    </Form.Item>
    <Form.Item label="Password" name="password">
      <Input.Password placeholder="Enter your password" />
    </Form.Item>
    <Form.Item>
      <Button type="primary" htmlType="submit" className="w-100">
        Login
      </Button>
    </Form.Item>
  </Form>
);

const Template: Story = {
  render: (args) => (
    <MemoryRouter initialEntries={["/"]}>
      <Routes>
        <Route
          path="*"
          element={
            <AuthScreenTemplate {...args}>
              <DummyForm /> {/* Pass the form as children directly */}
            </AuthScreenTemplate>
          }
        />
      </Routes>
    </MemoryRouter>
  ),
};

export const Default: Story = {
  ...Template,
  args: {
    backgroundImagePath: "/assets/images/background1.jpg",
    sloganText: "Welcome to Our Service", // Example slogan text
    copyrightText: "© 2025 Company Name", // Optional copyright text
  },
};

export const CustomRoot: Story = {
  ...Template,
  args: {
    backgroundImagePath: "/assets/images/background1.jpg",
    sloganText: "Join Us Today", // Example slogan text
    copyrightText: "© 2025 Company Name", // Optional copyright text
  },
};

export default meta;
