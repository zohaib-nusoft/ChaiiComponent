import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import AppHeader from "./AppHeader";

const meta: Meta<typeof AppHeader> = {
  title: "Components/AppHeader",
  component: AppHeader,
  argTypes: {
    logo: { table: { disable: true } }, // Disable the control in the Storybook UI
    isAuthenticated: { control: "boolean" },
    userName: { control: "text" },
    avatarImage: { control: "text" }, // New control for the avatar image
  },
};

type Story = StoryObj<typeof AppHeader>;

const Template: Story = {
  render: (args) => <AppHeader {...args} />,
};

export const AuthenticatedNoLogo: Story = {
  ...Template,
  args: {
    isAuthenticated: true,
    userName: "Safwan Khan",
  },
};

export const AuthenticatedWithAvatarImage: Story = {
  ...Template,
  args: {
    isAuthenticated: true,
    userName: "Safwan Khan",
    avatarImage: "/assets/images/avatar.png", // Example avatar image
    isAdmin: true,
  },
};

export const NotAuthenticatedNoLogo: Story = {
  ...Template,
  args: {
    isAuthenticated: false,
  },
};

export default meta;
