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
    title: "Resource Augments",
    sortByOptions: ["Date", "Name", "Status"],
    data: [
      { name: "Company A", userName: "user1", age: "15" },
      { name: "Company B", userName: "user2", age: "20" },
      { name: "Company A", userName: "user1", age: "15" },
      { name: "Company B", userName: "user2", age: "20" },
      { name: "Company A", userName: "user1", age: "15" },
      { name: "Company B", userName: "user2", age: "20" },
      { name: "Company A", userName: "user1", age: "15" },
      { name: "Company B", userName: "user2", age: "20" },
      { name: "Company A", userName: "user1", age: "15" },
      { name: "Company B", userName: "user2", age: "20" },
      { name: "Company A", userName: "user1", age: "15" },
      { name: "Company B", userName: "user2", age: "20" },
      { name: "Company A", userName: "user1", age: "15" },
      { name: "Company B", userName: "user2", age: "20" },
      { name: "Company A", userName: "user1", age: "15" },
      { name: "Company B", userName: "user2", age: "20" },
    ],
    columns: [
      { title: "Name", key: "name", dataIndex: "name" },
      { title: "User Name", key: "userName", dataIndex: "userName" },
      { title: "Age", key: "age", dataIndex: "age" },
    ],
    buttonLabel: "Add Resource", // Label for the button
    buttonClass: "filledBtn", // The class for the primary button
    onButtonClick: () => alert("Button clicked!"), // Action when the button is clicked
  },
};

export default meta;
