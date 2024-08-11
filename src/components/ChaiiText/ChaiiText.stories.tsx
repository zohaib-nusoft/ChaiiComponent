import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import ChaiiText from "./ChaiiText";

const meta: Meta<typeof ChaiiText> = {
  title: "Components/ChaiiText",
  component: ChaiiText,
  argTypes: {
    className: { control: "text" },
    children: { control: "text" },
  },
};

type Story = StoryObj<typeof ChaiiText>;

const Template: Story = {
  render: (args) => <ChaiiText {...args} />,
};

export const Default: Story = {
  ...Template,
  args: {
    children: "This is some default text",
    className: "",
  },
};

export const CustomClass: Story = {
  ...Template,
  args: {
    children: "This is text with a custom class",
    className: "custom-class",
  },
};

export default meta;
