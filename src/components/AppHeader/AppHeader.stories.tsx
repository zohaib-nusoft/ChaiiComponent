import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import AppHeader from "./AppHeader";

const meta: Meta<typeof AppHeader> = {
  title: "Components/AppHeader",
  component: AppHeader,
  argTypes: {
    logo: { table: { disable: true } }, // Disable the control in the Storybook UI
    isAuthenticated: { control: "boolean" },
    userName: { control: "text" },
    notificationsCount: { control: "number" },
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
    notificationsCount: 14,
  },
};

export const AuthenticatedWithAvatarImage: Story = {
  ...Template,
  args: {
    isAuthenticated: true,
    userName: "Safwan Khan",
    notificationsCount: 14,
    avatarImage: "/assets/images/avatar.png", // Example avatar image
  },
};

export const NotAuthenticatedNoLogo: Story = {
  ...Template,
  args: {
    isAuthenticated: false,
    userName: "",
    notificationsCount: 0,
  },
};

export default meta;
