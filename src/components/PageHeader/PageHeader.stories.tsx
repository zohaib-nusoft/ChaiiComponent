import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import PageHeader from "./PageHeader";

const meta: Meta<typeof PageHeader> = {
  title: "Components/PageHeader",
  component: PageHeader,
  argTypes: {
    heading: { control: "text" },
    buttonText: { control: "text" },
    onButtonClick: { action: "clicked" },
  },
};

type Story = StoryObj<typeof PageHeader>;

const Template: Story = {
  render: (args) => <PageHeader {...args} />,
};

export const Default: Story = {
  ...Template,
  args: {
    heading: "Create New Resource",
    buttonText: "Publish",
  },
};

export default meta;
