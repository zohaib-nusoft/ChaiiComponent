// import React from "react";
// import type { Meta, StoryObj } from "@storybook/react";
// import { MemoryRouter, Routes, Route } from "react-router-dom";
// import AuthScreenTemplate from "./AuthScreenTemplate";

// const meta: Meta<typeof AuthScreenTemplate> = {
//   title: "Components/AuthScreenTemplate",
//   component: AuthScreenTemplate,
//   parameters: {
//     layout: "fullscreen",
//   },
//   argTypes: {
//     backgroundImagePath: { control: "text" },
//     heading: { control: "text" },
//     buttonText: { control: "text" },
//   },
// };

// type Story = StoryObj<typeof AuthScreenTemplate>;

// const Template: Story = {
//   render: (args) => (
//     <MemoryRouter initialEntries={["/"]}>
//       <Routes>
//         <Route path="*" element={<AuthScreenTemplate {...args} />} />
//       </Routes>
//     </MemoryRouter>
//   ),
// };

// export const Default: Story = {
//   ...Template,
//   args: {
//     backgroundImagePath: "/assets/images/background1.jpg",
//     heading: "Login to Your Account",
//     buttonText: "Login",
//   },
// };

// export const CustomRoot: Story = {
//   ...Template,
//   args: {
//     backgroundImagePath: "/assets/images/background1.jpg",
//     heading: "Sign Up for an Account",
//     buttonText: "Sign Up",
//   },
// };

// export default meta;
import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import AuthScreenTemplate from "./AuthScreenTemplate";
import { Form, Input, Button } from "antd"; // Importing Ant Design components

const meta: Meta<typeof AuthScreenTemplate> = {
  title: "Components/AuthScreenTemplate",
  component: AuthScreenTemplate,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    backgroundImagePath: { control: "text" },
    heading: { control: "text" },
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
    heading: "Login to Your Account",
  },
};

export const CustomRoot: Story = {
  ...Template,
  args: {
    backgroundImagePath: "/assets/images/background1.jpg",
    heading: "Sign Up for an Account",
  },
};

export default meta;