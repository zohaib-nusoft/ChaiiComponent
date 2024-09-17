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

const LineChart = ({ data }: props) => {
  // Use months as labels
  const monthLabels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  // const data = {
  //   labels: monthLabels,
  //   datasets: [
  //     {
  //       data: [
  //         { x: "January", y: 33, customData: { python: 3, js: 30 } },
  //         { x: "February", y: 53, customData: { python: 10, js: 40 } },
  //         { x: "March", y: 85, customData: { python: 15, js: 70 } },
  //         { x: "April", y: 41, customData: { python: 20, js: 21 } },
  //         { x: "May", y: 44, customData: { python: 25, js: 19 } },
  //         { x: "June", y: 65, customData: { python: 30, js: 35 } },
  //       ],
  //       fill: 1,
  //       backgroundColor: "rgba(75,192,192,0.2)",
  //       borderColor: "rgba(75,192,192,1)",
  //     },
  //   ],
  // };

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
                .join(", ");
            }

            return `Value: ${y} (${customDataText})`;
          },
        },
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default LineChart;