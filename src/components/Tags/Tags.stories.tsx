import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { RESOURCESTATUS, TIMESHEET_STATUS } from "../constants/enums";
import StatusTag from "./Tags";

const meta: Meta<typeof StatusTag> = {
  title: "Components/StatusTag",
  component: StatusTag,
  argTypes: {
    className: { control: "text" },
    tags: { control: "select", options: Object.values(RESOURCESTATUS) }, // Assuming STATUS is an enum
  },
};

type Story = StoryObj<typeof StatusTag>;

const Template: Story = {
  render: (args) => <StatusTag {...args} />,
};

export const Available: Story = {
  ...Template,
  args: {
    tags: RESOURCESTATUS.AVAILABLE,
  },
};

export const Busy: Story = {
  ...Template,
  args: {
    tags: RESOURCESTATUS.BUSY,
  },
};

export const Completed: Story = {
  ...Template,
  args: {
    tags: RESOURCESTATUS.COMPLETED,
  },
};

export const Vacation: Story = {
  ...Template,
  args: {
    tags: RESOURCESTATUS.VACATION,
  },
};
export const RequestRevision: Story = {
  ...Template,
  args: {
    tags: TIMESHEET_STATUS.REVISION,
  },
};

export const Pending: Story = {
  ...Template,
  args: {
    tags: "Pending",
  },
};

export default meta;
