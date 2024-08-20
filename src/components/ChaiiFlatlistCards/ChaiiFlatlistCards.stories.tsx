import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import ChaiiFlatlistCards from "./ChaiiFlatlistCards";

const meta: Meta<typeof ChaiiFlatlistCards> = {
  title: "Components/ChaiiFlatlistCards",
  component: ChaiiFlatlistCards,
  argTypes: {},
};

type Story = StoryObj<typeof ChaiiFlatlistCards>;

const Template: Story = {
  render: (args) => <ChaiiFlatlistCards {...args} />,
};

export const Default: Story = {
  ...Template,
  args: {
    row: true,
    border: true,
    data: [
      {
        date: `${new Date()}`,
        heading: "test",
        location: "test",
      },
      {
        date: `${new Date()}`,
        heading: "test",
        location: "test",
      },
      {
        date: `${new Date()}`,
        heading: "test",
        location: "test",
      },
      {
        date: `${new Date()}`,
        heading: "test",
        location: "test",
      },
    ],
  },
};

export default meta;
