import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

import styles from "./LadderView.module.scss";
const LadderView: React.FC = () => {
  const { allData, isLoading } = useSelector(
    (state: RootState) => state.orderBook
  );
  const [priceIncrement, setPriceIncrement] = useState<number>(0.01);

  const aggregateOrders = (orders: any[], type: string): [string, number][] => {
    const aggregated: Record<string, number> = {};

    orders.forEach((order: any) => {
      const price = parseFloat(
        type === "bid" ? order.best_bid : order.best_ask
      );
      const quantity = parseFloat(
        type === "bid" ? order.best_bid_size : order.best_ask_size
      );
      const bucket = (
        Math.floor(price / priceIncrement) * priceIncrement
      ).toFixed(2);

      if (!aggregated[bucket]) {
        aggregated[bucket] = 0;
      }
      aggregated[bucket] += quantity;
    });
    // console.log("aggregated", aggregated);
    return Object.entries(aggregated).sort(
      ([a], [b]) => parseFloat(a) - parseFloat(b)
    );
  };
  const [aggregatedBids, setAggregatedBids] = useState<[string, number][]>([]);
  const [aggregatedAsks, setAggregatedAsks] = useState<[string, number][]>([]);
  useEffect(() => {
    const aggregatedBids = aggregateOrders(allData, "bid");
    setAggregatedBids(aggregatedBids);

    const aggregatedAsks = aggregateOrders(allData, "ask");
    setAggregatedAsks(aggregatedAsks);
  }, [priceIncrement, allData]);

  return (
    <div className={`${styles.orderBook} orderBookArea`}>
      <h2>Order Book</h2>

      {isLoading ? (
        "loading..."
      ) : (
        <div className={styles.body}>
          <div className={`${styles.tableBody} ${styles.bid}`}>
            <table>
              <thead>
                <tr>
                  <th>Market Size</th>
                  <th>Price (USD)</th>
                  <th>My Size</th>
                </tr>
              </thead>
              <tbody>
                {aggregatedBids.map(([price, quantity]) => (
                  <tr key={price}>
                    <td>{quantity.toFixed(4)}</td>
                    <td>{price}</td>
                    <td>-</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className={`${styles.tableBody} ${styles.ask}`}>
            <table>
              <thead>
                <tr>
                  <th>USD Spread</th>
                  <th>{priceIncrement}</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {aggregatedAsks.map(([price, quantity]) => (
                  <tr key={price}>
                    <td>{quantity.toFixed(4)}</td>
                    <td>{price}</td>
                    <td>-</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className={styles.aggregation}>
            <span>Aggregation</span>
            <select
              value={priceIncrement}
              onChange={(e) => setPriceIncrement(parseFloat(e.target.value))}
            >
              <option value={0.01}>$0.01</option>
              <option value={0.05}>$0.05</option>
              <option value={0.1}>$0.10</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default LadderView;
