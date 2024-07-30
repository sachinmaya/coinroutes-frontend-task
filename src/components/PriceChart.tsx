import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register required components
ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const PriceChart: React.FC = () => {
  const { allData } = useSelector((state: RootState) => state.orderBook);

  const data = {
    labels: "test", // orderBook.bids?.map((bid) => bid[0]),
    datasets: [
      {
        label: "Bids",
        data: allData.map((item: any) => item.best_bid), //orderBook.bids?.map((bid) => bid[1]),
        borderColor: "#009fcf",
        fill: false,
      },
      {
        label: "Asks",
        data: allData.map((item: any) => item.best_ask), //orderBook.asks?.map((ask) => ask[1]),
        borderColor: "#fcb146",
        fill: false,
      },
    ],
  };

  return (
    <div>
      <Line data={data as any} />
    </div>
  );
};

export default PriceChart;
