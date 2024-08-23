import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import ChaiiMultiSelect from "./ChaiiMultiSelect";

const meta: Meta<typeof ChaiiMultiSelect> = {
  title: "Components/ChaiiMultiSelect",
  component: ChaiiMultiSelect,
};

type Story = StoryObj<typeof ChaiiMultiSelect>;

const Template: Story = {
  render: (args) => <ChaiiMultiSelect {...args} />,
};

export const Default: Story = {
  ...Template,
  args: {
    name: "example",
    label: "Select Options",
    placeholder: "Select options",
    options: [
      { label: "Option 1", value: "option1" },
      { label: "Option 2", value: "option2" },
      { label: "Option 3", value: "option3" },
    ],
    defaultValue: ["option1"],
    size: "middle",
  },
};

export default meta;
