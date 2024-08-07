import type { Meta, StoryObj } from "@storybook/react";
import ChaiiButton from "./Button";

const meta: Meta<typeof ChaiiButton> = {
  title: "Components/Button",
  component: ChaiiButton,
  argTypes: {
    btnClass: {
      control: { type: "select" },
      options: ["filled_btn_large", "filled_btn", "white_btn", "round_btn"],
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
    btnClass: "filled_btn",
    label: "Primary 😃",
    btnType: "button",
  },
};

export const Large: Story = {
  args: {
    btnClass: "filled_btn_large",
    label: "Large Button",
    btnType: "button",
  },
};

export const White: Story = {
  args: {
    btnClass: "white_btn",
    label: "White Button",
    btnType: "button",
  },
};

export const Round: Story = {
  args: {
    btnClass: "round_btn",
    label: "Round Button",
    btnType: "button",
  },
};

export default meta;
