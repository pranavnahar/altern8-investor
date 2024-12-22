import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
  ChartOptions,
  ChartData,
} from "chart.js";

// Register the required components
ChartJS.register(ArcElement, Tooltip, Legend, Title);

const PieChart: React.FC = () => {
  // Define the data type
  const data: ChartData<"doughnut"> = {
    labels: ["Freelancers", "YouTube", "Gaming", "OTT", "E-Sports", "Ed-Tech"],
    datasets: [
      {
        data: [83.3, 160, 166, 336.98, 11.34, 580],
        backgroundColor: [
          "#6A6A6A", // Grey for Freelancers
          "#FF0000", // Red for YouTube
          "#0000FF", // Blue for Gaming
          "#FFD700", // Yellow for OTT
          "#00FF00", // Green for E-Sports
          "#00FFFF", // Cyan for Ed-Tech
        ],
        hoverOffset: 4,
      },
    ],
  };

  // Define the options type
  const options: ChartOptions<"doughnut"> = {
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          font: {
            size: 14,
          },
        },
      },
      title: {
        display: true,
        text: "1% of MSMEs(Cr)",
        font: {
          size: 18,
        },
      },
    },
  };

  return <Doughnut data={data} options={options} />;
};

export default PieChart;
