import type { Meta, StoryObj } from "@storybook/react";
import ChaiiToggle from "./Toggle";

const meta: Meta<typeof ChaiiToggle> = {
  title: "Components/Toggle",
  component: ChaiiToggle,
  argTypes: {
    checked: { control: "boolean" },
    label: { control: "text" },
    onChange: {
      control: (i: boolean) => {
        alert(i);
      },
    },
  },
};

type Story = StoryObj<typeof ChaiiToggle>;

export const ActionViewButton: Story = {
  args: {
    checked: true,
    label: "Availability",
  },
};

export default meta;
