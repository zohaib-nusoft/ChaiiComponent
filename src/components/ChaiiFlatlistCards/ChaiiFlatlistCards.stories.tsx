import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import ChaiiFlatlistCards from ".";

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
    data: [
      {
        date: `${new Date()}`,
        heading: "test",
        location: "test",
        subText: "test",
      },
    ],
  },
};

export default meta;
