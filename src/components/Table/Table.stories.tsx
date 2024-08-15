import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import SimpleTable from "./Table";

const meta: Meta<typeof SimpleTable> = {
  title: "Components/Table",
  component: SimpleTable,
};

type Story = StoryObj<typeof SimpleTable>;

const Template: Story = {
  render: (args) => <SimpleTable {...args} />,
};

export const Default: Story = {
  ...Template,
  args: {
    data: [{ name: "test", userName: "string", age: "15" }],
    columns: [
      { title: "name", key: "name", dataIndex: "name" },
      { title: "User Name", key: "userName", dataIndex: "userName" },
      { title: "age", key: "age", dataIndex: "age" },
    ],
  },
};

export default meta;
