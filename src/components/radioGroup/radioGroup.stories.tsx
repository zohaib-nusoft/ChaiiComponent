import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import RadioGroup from "./radioGroup";

const meta: Meta<typeof RadioGroup> = {
  title: "Components/RadioGroup",
  component: RadioGroup,
  argTypes: {
    heading: {
      control: "text",
    },
    values: { control: "object" },
  },
};

type Story = StoryObj<typeof RadioGroup>;

const Template: Story = {
  render: (args) => <RadioGroup {...args} />,
};

export const Default: Story = {
  ...Template,
  args: {
    heading: "Resource Details",
    values: ["male", "female"],
  },
};

export default meta;
