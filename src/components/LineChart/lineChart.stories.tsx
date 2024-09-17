import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import LineChart from "./LineChart";

const meta: Meta<typeof LineChart> = {
  title: "Components/LineChart",
  component: LineChart,
  argTypes: {
    data: {
      control: "object",
    },
  },
};

type Story = StoryObj<typeof LineChart>;

const Template: Story = {
  render: (args) => <LineChart {...args} />,
};

export const Default: Story = {
  ...Template,
  args: {
    data: {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          data: [
            { x: "January", y: 33, customData: { python: 3, js: 30 } },
            { x: "February", y: 53, customData: { python: 10, js: 40 } },
            { x: "March", y: 85, customData: { python: 15, js: 70 } },
            { x: "April", y: 41, customData: { python: 20, js: 21 } },
            { x: "May", y: 44, customData: { python: 25, js: 19 } },
            { x: "June", y: 65, customData: { python: 30, js: 35 } },
          ],
          fill: 1,
          backgroundColor: "rgba(75,192,192,0.2)",
          borderColor: "rgba(75,192,192,1)",
        },
      ],
    },
  },
};

export default meta;
