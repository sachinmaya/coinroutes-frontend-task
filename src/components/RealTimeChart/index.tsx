import React from "react";
import styles from "./RealTimeChart.module.scss";
import TopOfBook from "../TopOfBook";
import PriceChart from "../PriceChart";
const RealTimeChart = () => {
  return (
    <div className={styles.chartWrap}>
      <div className={styles.boxHead}>
        <h2>Real Time Chart</h2>
      </div>
      <div className={styles.bodyBox}>
        <TopOfBook />
        <PriceChart />
      </div>
    </div>
  );
};

export default RealTimeChart;
