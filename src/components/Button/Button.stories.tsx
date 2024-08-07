import type { Meta, StoryObj } from "@storybook/react";
import ChaiiButton from "./Button";

const meta: Meta<typeof ChaiiButton> = {
  title: "Components/Button",
  component: ChaiiButton,
  argTypes: {
    btnClass: {
      control: { type: "select" },
      options: ["filledBtnLarge", "filledBtn", "whiteBtn", "roundBtn"],
    },
    label: { control: "text" },
    btnType: {
      control: { type: "select" },
      options: ["button", "submit", "reset"],
    },
  },
};

type Story = StoryObj<typeof ChaiiButton>;

export const Primary: Story = {
  args: {
    btnClass: "filledBtn",
    label: "Primary",
    btnType: "button",
  },
};

export const Large: Story = {
  args: {
    btnClass: "filledBtnLarge",
    label: "Large Button",
    btnType: "button",
  },
};

export const White: Story = {
  args: {
    btnClass: "whiteBtn",
    label: "White Button",
    btnType: "button",
  },
};

export const Round: Story = {
  args: {
    btnClass: "roundBtn",
    label: "Round Button",
    btnType: "button",
  },
};

export default meta;
