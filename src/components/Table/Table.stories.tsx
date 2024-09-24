import type { Meta, StoryObj } from "@storybook/react";
import { Badge, Checkbox, Space, Typography } from "antd";
import React from "react";
import SimpleTable from "./Table";
import styles from "./Table.module.scss"; // Import the SCSS module

interface DataType {
  key: string;
  name: string;
  userName: string;
  age: string;
  status: string;
}

const meta: Meta<typeof SimpleTable> = {
  title: "Components/Table",
  component: SimpleTable,
};

type Story = StoryObj<typeof SimpleTable>;

export const Default: Story = {
  args: {
    searchBar: true,
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
        key: "2",
        name: "Company B",
        userName: "user2",
        age: "20",
        status: "Vacation",
      },
      {
        key: "2",
        name: "Company B",
        userName: "user2",
        age: "20",
        status: "Vacation",
      },
      {
        key: "2",
        name: "Company B",
        userName: "user2",
        age: "20",
        status: "Vacation",
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
      {
        title: "",
        key: "checkbox",
        render: () => <Checkbox />,
      },
      { title: "Name", key: "name", dataIndex: "name" },
      { title: "User Name", key: "userName", dataIndex: "userName" },
      { title: "Age", key: "age", dataIndex: "age" },
      {
        title: "Status",
        key: "status",
        dataIndex: "status",
        render: (status: string) => {
          let color = "green";
          if (status === "Busy") color = "red";
          else if (status === "Vacation") color = "gray";
          else if (status === "Completed") color = "green";
          else if (status === "Available") color = "blue";

          return (
            <Space size="small">
              <Badge color={color} />
              <Typography.Text>{status}</Typography.Text>
            </Space>
          );
        },
      },
      {
        title: "Action",
        key: "action",
        render: (_: any, record: DataType) => (
          <Space size="middle">
            <a
              className={styles["table-action-buttons"]}
              onClick={() => alert(`Edit ${record.name}`)}
            >
              Edit
            </a>
            <a
              className={styles["table-action-buttons"]}
              onClick={() => alert(`View ${record.name}`)}
            >
              View
            </a>
          </Space>
        ),
      },
    ],
    buttonLabel: "Add Resource",
    buttonClass: "filledBtn",
    onButtonClick: () => alert("Button clicked!"),
  },
};

export default meta;
