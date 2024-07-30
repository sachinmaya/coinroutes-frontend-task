import React from "react";
import styles from "./CurrencyPairSelector.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../redux/store";
import { setSelectedPair, setAllData } from "../../redux/slices/orderBookSlice";
const CurrencyPairSelector: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const selectedPair = useSelector(
    (state: RootState) => state.orderBook.selectedPair
  );

  const handelChangePair = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setAllData([]));
    dispatch(setSelectedPair(e.target.value));
  };
  return (
    <div className={styles.currencySelector}>
      <select value={selectedPair} onChange={(e) => handelChangePair(e)}>
        <option value="BTC-USD">BTC-USD</option>
        <option value="ETH-USD">ETH-USD</option>
        <option value="LTC-USD">LTC-USD</option>
        <option value="BCH-USD">BCH-USD</option>
      </select>
    </div>
  );
};

export default CurrencyPairSelector;
