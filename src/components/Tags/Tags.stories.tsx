import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import StatusTag from "./Tags";
import { STATUS } from "../constants/resource-status.enum";

const meta: Meta<typeof StatusTag> = {
  title: "Components/StatusTag",
  component: StatusTag,
  argTypes: {
    className: { control: "text" },
    tags: { control: "select", options: Object.values(STATUS) }, // Assuming STATUS is an enum
  },
};

type Story = StoryObj<typeof StatusTag>;

const Template: Story = {
  render: (args) => <StatusTag {...args} />,
};

export const Available: Story = {
  ...Template,
  args: {
    tags: STATUS.AVAILABLE,
    className: "",
  },
};

export const Busy: Story = {
  ...Template,
  args: {
    tags: STATUS.BUSY,
    className: "",
  },
};

export const Completed: Story = {
  ...Template,
  args: {
    tags: STATUS.COMPLETED,
    className: "",
  },
};

export const Vacation: Story = {
  ...Template,
  args: {
    tags: STATUS.VACATION,
    className: "",
  },
};

export const Pending: Story = {
  ...Template,
  args: {
    tags: "Pending",
    className: "",
  },
};

export default meta;
