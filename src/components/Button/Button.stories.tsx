import type { Meta, StoryObj } from "@storybook/react";
import ChaiiButton from "./Button";

const meta: Meta<typeof ChaiiButton> = {
  title: "Components/Button",
  component: ChaiiButton,
  argTypes: {
    btnClass: {
      control: { type: "select" },
      options: [
        "filledBtnLarge",
        "filledBtn",
        "whiteBtn",
        "roundBtn",
        "iconBtnCircle",
        "addRowBtn",
        "actionBtn",
      ],
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

export const Row: Story = {
  args: {
    btnClass: "addRowBtn",
    label: "Row Button",
    btnType: "button",
  },
};

export const CircleIconButton: Story = {
  args: {
    btnClass: "iconBtnCircle",
    label: "", // No label since it's an icon button
    btnType: "button",
  },
};

// New story for the action button
export const ActionEditButton: Story = {
  args: {
    btnClass: "actionBtn",
    label: "Edit",
    btnType: "button",
  },
};

export const ActionViewButton: Story = {
  args: {
    btnClass: "actionBtn",
    label: "View",
    btnType: "button",
  },
};

export default meta;
