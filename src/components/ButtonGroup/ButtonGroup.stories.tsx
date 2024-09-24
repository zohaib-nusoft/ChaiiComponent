import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import ButtonGroup from "./ButtonGroup";

const meta: Meta<typeof ButtonGroup> = {
  title: "Components/ButtonGroup",
  component: ButtonGroup,
  args: {
    value: "test",
    options: [
      { label: "test", value: "test" },
      { label: "test1", value: "test1" },
      { label: "test2", value: "test2" },
    ],
  },
};

type Story = StoryObj<typeof ButtonGroup>;

const Template: Story = {
  render: (args) => <ButtonGroup {...args} />,
};

export const Default: Story = {
  ...Template,
};

export default meta;
