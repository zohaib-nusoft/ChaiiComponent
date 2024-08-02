import type { Meta, StoryObj } from "@storybook/react";
import ChaiiButton from "./Button";

const meta: Meta<typeof ChaiiButton> = {
  title: "Components/Button",
  component: ChaiiButton,
  argTypes: {
    btn_class: {
      control: { type: "select" },
      options: ["filled_btn_large", "filled_btn", "white_btn"],
    },
    label: { control: "text" },
    btn_Type: {
      control: { type: "select" },
      options: ["button", "submit", "reset"],
    },
  },
};

type Story = StoryObj<typeof ChaiiButton>;

export const Primary: Story = {
  args: {
    btn_class: "filled_btn",
    label: "Primary 😃",
    btn_Type: "button",
  },
};

export const Large: Story = {
  args: {
    btn_class: "filled_btn_large",
    label: "Large Button",
    btn_Type: "button",
  },
};

export const White: Story = {
  args: {
    btn_class: "white_btn",
    label: "White Button",
    btn_Type: "button",
  },
};

export default meta;
