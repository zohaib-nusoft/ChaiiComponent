import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { BrowserRouter as Router } from "react-router-dom";
import Breadcrumb from "./Breadcrumb";

const meta: Meta<typeof Breadcrumb> = {
  title: "Components/Breadcrumb",
  component: Breadcrumb,
};

type Story = StoryObj<typeof Breadcrumb>;

const Template: Story = {
  render: () => (
    <Router>
      <Breadcrumb />
    </Router>
  ),
};

export const Default: Story = { ...Template };

export default meta;
