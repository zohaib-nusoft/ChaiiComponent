import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import ChaiiDatePicker from "./DataPickerInput";

const meta: Meta<typeof ChaiiDatePicker> = {
  title: "Components/DatePickerInput",
  component: ChaiiDatePicker,
};

type Story = StoryObj<typeof ChaiiDatePicker>;

const Template: Story = {
  render: (args) => <ChaiiDatePicker {...args} />,
};

export const Default: Story = {
  ...Template,
  args: {
    name: "exampleDatePicker",
    label: "Example Date Picker",
  },
};

export default meta;
