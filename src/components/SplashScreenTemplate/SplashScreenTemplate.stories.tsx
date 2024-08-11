import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import SplashScreenTemplate from "./SplashScreenTemplate";

const meta: Meta<typeof SplashScreenTemplate> = {
  title: "Components/SplashScreenTemplate",
  component: SplashScreenTemplate,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    backgroundImagePath: { control: "text" },
    logoPath: { control: "text" },
  },
};

type Story = StoryObj<typeof SplashScreenTemplate>;

const Template: Story = {
  render: (args) => (
    <MemoryRouter initialEntries={["/"]}>
      <Routes>
        <Route path="*" element={<SplashScreenTemplate {...args} />} />
      </Routes>
    </MemoryRouter>
  ),
};

export const Default: Story = {
  ...Template,
  args: {
    children: "Welcome to the Splash Screen",
    backgroundImagePath: "/assets/images/background1.jpg",
  },
};

export const CustomRoot: Story = {
  ...Template,
  args: {
    children: "Custom Splash Screen Content",
    backgroundImagePath: "/assets/images/background1.jpg",
    logoPath: "/assets/svg/LogoBlack.svg",
  },
};

export default meta;
