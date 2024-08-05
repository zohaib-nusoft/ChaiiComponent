import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import ChaiiDivider from "./Divider";

const meta: Meta<typeof ChaiiDivider> = {
  title: "Components/Divider",
  component: ChaiiDivider,
};

type Story = StoryObj<typeof ChaiiDivider>;

const Template: Story = {
  render: () => <ChaiiDivider />,
};

export const Default: Story = { ...Template };

export default meta;
