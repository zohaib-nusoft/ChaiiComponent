import { Content } from "antd/es/layout/layout";
import {
  CategoryScale,
  Chart as ChartJS,
  Legend, // Use CategoryScale instead of TimeScale
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
} from "chart.js";
import React from "react";
import { Line } from "react-chartjs-2";
import { colors } from "../../colors";

// Register the components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

interface props {
  height: string | number;
  width: string | number;
  data: {
    labels: string[];
    datasets: {
      data: { x: string; y: number; countByDomain: any }[];
      fill: number;
      backgroundColor: string;
      borderColor: string;
    }[];
  };
}

const LineChart = ({ data, height, width }: props) => {
  const options: any = {
    scales: {
      x: {
        type: "category", // Use 'category' for month labels
      },
      y: {
        type: "linear",
        ticks: {
          stepSize: 1, // Forces the y-axis to use whole number increments
          callback: function (value: any) {
            return Number.isInteger(value) ? value : null; // Only display integers
          },
        },
        beginAtZero: true,
      },
    },
    elements: {
      line: {
        fill: true,
        tension: 0.4,
      },
      point: {
        hoverBackgroundColor: colors.primary,
        hoverRadius: 15,
      },
    },
    plugins: {
      legend: false,
      tooltip: {
        mode: "index",
        callbacks: {
          title: function (tooltipItems: [{ label: string }]) {
            return `Date: ${tooltipItems[0].label}`;
          },
          label: function (tooltipItem: {
            raw: { y: string; countByDomain: any };
          }) {
            // Custom label
            const { y, countByDomain } = tooltipItem.raw;
            let customDataText = "";

            if (countByDomain) {
              // Iterate over each key in countByDomain
              customDataText = Object.keys(countByDomain)
                .map(
                  (key) =>
                    `${key.charAt(0).toUpperCase() + key.slice(1)}: ${countByDomain[key]}`
                )
                .join("\n ");
            }

            return `Total: ${y} \n (${customDataText})`;
          },
        },
      },
    },
  };

  return (
    <Content className="w-100 h-100">
      <Line height={height} width={width} data={data} options={options} />
    </Content>
  );
};

export default LineChart;
