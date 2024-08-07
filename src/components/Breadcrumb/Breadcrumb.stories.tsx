import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import Breadcrumb from "./Breadcrumb";

const meta: Meta<typeof Breadcrumb> = {
  title: "Components/Breadcrumb",
  component: Breadcrumb,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    rootLabel: { control: "text" },
    rootPath: { control: "text" },
  },
};

type Story = StoryObj<typeof Breadcrumb>;

const Template: Story = {
  render: (args) => (
    <MemoryRouter initialEntries={["/home/section/page"]}>
      <Routes>
        <Route path="*" element={<Breadcrumb {...args} />} />
      </Routes>
    </MemoryRouter>
  ),
};

export const Default: Story = {
  ...Template,
  args: {
    rootLabel: "Home",
    rootPath: "/",
  },
};

export const CustomRoot: Story = {
  ...Template,
  args: {
    rootLabel: "Dashboard",
    rootPath: "/dashboard",
  },
};

export default meta;
