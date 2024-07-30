import React, { useContext } from "react";
import styles from "./TopOfBook.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
const TopOfBook: React.FC = () => {
  const { recentData, isLoading } = useSelector(
    (state: RootState) => state.orderBook
  );

  const bestBid = recentData.best_bid;
  const bestAsk = recentData.best_ask;
  const bestBidSize = recentData.best_bid_size;
  const bestAskSize = recentData.best_ask_size;

  return (
    <div className={styles.headWrap}>
      <div className={styles.box}>
        <div className={styles.head}>Best Bid: itbit </div>
        <div className={styles.body}>
          <div className={styles.left}>
            <p>{isLoading ? "loading..." : bestBid ? `${bestBid}` : "N/A"}</p>
            <span>Bid Price</span>
          </div>
          <div className={styles.right}>
            <p>
              {isLoading
                ? "loading..."
                : bestBidSize
                ? `${bestBidSize}`
                : "N/A"}
            </p>
            <span>Bid Quantity</span>
          </div>
        </div>
      </div>
      <div className={`${styles.box} ${styles.box2}`}>
        <div className={styles.head}>Best Ask: Kraken</div>
        <div className={styles.body}>
          <div className={styles.left}>
            <p>{isLoading ? "loading..." : bestAsk ? `${bestAsk}` : "N/A"}</p>
            <span>Ask Price</span>
          </div>
          <div className={styles.right}>
            <p>
              {isLoading
                ? "loading..."
                : bestAskSize
                ? `${bestAskSize}`
                : "N/A"}
            </p>
            <span>Ask Quantity</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopOfBook;
