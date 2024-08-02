// import type { Meta, StoryObj } from "@storybook/react";
// import Button from "./Button";

// const meta: Meta<typeof Button> = {
//   title: "Components/Button",
//   component: Button,
//   argTypes: {
//     textColor: { control: "color" },
//   },
// };

// type Story = StoryObj<typeof Button>;

// export const Primary: Story = {
//   args: {
//     label: "Primary 😃",
//   },
// };

// export default meta;

import type { Meta, StoryObj } from "@storybook/react";
import ChaiiButton from "./Button";

const meta: Meta<typeof ChaiiButton> = {
  title: "Components/Button",
  component: ChaiiButton,
  argTypes: {
    // classname: CSS,
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
