import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Modal from "./Modal";

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
  argTypes: {
    heading: {
      control: "text",
    },
    onClose: {
      action: "clicked",
    },
    onOpen: {
      action: "clicked",
    },
  },
};

type Story = StoryObj<typeof Modal>;

const Template: Story = {
  render: (args) => <Modal {...args} />,
};

export const Default: Story = {
  ...Template,
  args: {
    heading: "Resource Details",
  },
};

export default meta;
