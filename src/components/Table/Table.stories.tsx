import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import SimpleTable from "./Table";
import styles from "./Table.module.scss"; // Import the SCSS module

interface DataType {
  key: string;
  name: string;
  userName: string;
  age: string;
}

const meta: Meta<typeof SimpleTable> = {
  title: "Components/Table",
  component: SimpleTable,
};

type Story = StoryObj<typeof SimpleTable>;

export const Default: Story = {
  args: {
    title: "Resource Augments",
    sortByOptions: ["Date", "Name", "Status"],
    data: [
      {
        key: "1",
        name: "Company A",
        userName: "user1",
        age: "15",
        status: "Available",
      },
      {
        key: "2",
        name: "Company B",
        userName: "user2",
        age: "20",
        status: "Vacation",
      },
      {
        key: "1",
        name: "Company A",
        userName: "user1",
        age: "15",
        status: "Available",
      },
      {
        key: "2",
        name: "Company B",
        userName: "user2",
        age: "20",
        status: "Vacation",
      },
      {
        key: "1",
        name: "Company A",
        userName: "user1",
        age: "15",
        status: "Available",
      },
      {
        key: "2",
        name: "Company B",
        userName: "user2",
        age: "20",
        status: "Vacation",
      },
      {
        key: "1",
        name: "Company A",
        userName: "user1",
        age: "15",
        status: "Busy",
      },
      {
        key: "2",
        name: "Company B",
        userName: "user2",
        age: "20",
        status: "Vacation",
      },
      {
        key: "1",
        name: "Company A",
        userName: "user1",
        age: "15",
        status: "Available",
      },
      {
        key: "2",
        name: "Company B",
        userName: "user2",
        age: "20",
        status: "Completed",
      },
      {
        key: "1",
        name: "Company A",
        userName: "user1",
        age: "15",
        status: "Available",
      },
      {
        key: "2",
        name: "Company B",
        userName: "user2",
        age: "20",
        status: "Vacation",
      },
      {
        key: "1",
        name: "Company A",
        userName: "user1",
        age: "15",
        status: "Available",
      },
      {
        key: "2",
        name: "Company B",
        userName: "user2",
        age: "20",
        status: "Vacation",
      },
      // ... other data entries
    ],
    columns: [
      { title: "Name", key: "name", dataIndex: "name" },
      { title: "User Name", key: "userName", dataIndex: "userName" },
      { title: "Age", key: "age", dataIndex: "age" },
    ],
    buttonLabel: "Add Resource",
    buttonClass: "filledBtn",
    onButtonClick: () => alert("Button clicked!"),
  },
};

export default meta;
