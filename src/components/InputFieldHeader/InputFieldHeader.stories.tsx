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
    buttonClass: {
      control: { type: "select" },
      options: [
        "filledBtnLarge",
        "filledBtn",
        "whiteBtn",
        "roundBtn",
        "iconBtnCircle",
        "iconBtnSquareBlue",
        "iconBtnSquareGrey",
      ],
    },
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
    buttonClass: "filledBtn", // Default button class
  },
};

export const LargeButton: Story = {
  ...Template,
  args: {
    heading: "Resource Details",
    buttonText: "Next",
    buttonClass: "filledBtnLarge", // Using a large button
  },
};

export const WhiteButton: Story = {
  ...Template,
  args: {
    heading: "Resource Details",
    buttonText: "Next",
    buttonClass: "whiteBtn", // Using a white button
  },
};

export default meta;
