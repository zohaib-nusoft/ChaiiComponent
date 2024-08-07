import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import ChaiiDateRange from "./DateRangeInput";

const meta: Meta<typeof ChaiiDateRange> = {
  title: "Components/DateRangeInput",
  component: ChaiiDateRange,
};

type Story = StoryObj<typeof ChaiiDateRange>;

const Template: Story = {
  render: (args) => <ChaiiDateRange {...args} />,
};

export const Default: Story = {
  ...Template,
  args: {
    name: "exampleDateRange",
    label: "Example Date Range",
  },
};

export default meta;
