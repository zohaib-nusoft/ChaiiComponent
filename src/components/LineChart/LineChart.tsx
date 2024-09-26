import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale, // Use CategoryScale instead of TimeScale
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { colors } from "../../colors";
import { Content } from "antd/es/layout/layout";

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
      data: { x: string; y: number; customData: any }[];
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
            raw: { y: string; customData: any };
          }) {
            // Custom label
            const { y, customData } = tooltipItem.raw;
            let customDataText = "";

            if (customData) {
              // Iterate over each key in customData
              customDataText = Object.keys(customData)
                .map(
                  (key) =>
                    `${key.charAt(0).toUpperCase() + key.slice(1)}: ${customData[key]}`
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
