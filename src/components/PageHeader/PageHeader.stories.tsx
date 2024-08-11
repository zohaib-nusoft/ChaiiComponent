import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import PageHeader from "./PageHeader";
import { MemoryRouter } from "react-router-dom";

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
  render: (args) => (
    <MemoryRouter initialEntries={["/resources/new"]}>
      <PageHeader {...args} />
    </MemoryRouter>
  ),
};

export const Default: Story = {
  ...Template,
  args: {
    heading: "Create New Resource",
    buttonText: "Publish",
  },
};

export default meta;
