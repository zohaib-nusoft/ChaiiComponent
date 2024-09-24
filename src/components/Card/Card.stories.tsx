import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Card from "./Card";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  argTypes: {},
};

type Story = StoryObj<typeof Card>;

const Template: Story = {
  render: (args) => <Card {...args} />,
};

export const Default: Story = {
  ...Template,
  args: {
    heading: "Heading",
    desc: "Sub-Text",
  },
};

export default meta;
