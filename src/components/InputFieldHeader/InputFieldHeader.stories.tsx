import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import InputFieldHeader from "./InputFieldHeader";

const meta: Meta<typeof InputFieldHeader> = {
  title: "Components/InputFieldHeader",
  component: InputFieldHeader,
  argTypes: {
    heading: { control: "text" },
    buttonText: { control: "text" },
    onButtonClick: { action: "clicked" },
  },
};

type Story = StoryObj<typeof InputFieldHeader>;

const Template: Story = {
  render: (args) => <InputFieldHeader {...args} />,
};

export const Default: Story = {
  ...Template,
  args: {
    heading: "Resource Details",
    buttonText: "Next",
  },
};

export default meta;
