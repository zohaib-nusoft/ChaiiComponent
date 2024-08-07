import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import ChaiInput from "./Input";

const meta: Meta<typeof ChaiInput> = {
  title: "Components/Input",
  component: ChaiInput,
};

type Story = StoryObj<typeof ChaiInput>;

const Template: Story = {
  render: (args) => <ChaiInput {...args} />,
};

export const Default: Story = {
  ...Template,
  args: {
    name: "example",
    label: "Example Label",
    placeholder: "Enter text...",
    inputType: "normal",
    height: "middle",
  },
};

export const TextArea: Story = {
  ...Template,
  args: {
    name: "exampleTextArea",
    label: "Example TextArea",
    placeholder: "Enter text...",
    inputType: "textArea",
    height: "large",
  },
};

export const Number: Story = {
  ...Template,
  args: {
    name: "exampleNumber",
    label: "Example Number",
    placeholder: "Enter number...",
    inputType: "number",
  },
};

export const Password: Story = {
  ...Template,
  args: {
    name: "examplePassword",
    label: "Example Password",
    placeholder: "Enter password...",
    inputType: "password",
  },
};

export default meta;
