import React from "react";
import styles from "./App.module.scss";
import { Provider } from "react-redux";
import OrderBookProvider from "./context/OrderBookContext";
import CurrencyPairSelector from "./components/CurrencyPairSelector";
import LadderView from "./components/LadderView";
import RealTimeChart from "./components/RealTimeChart";
import store from "./redux/store";

const App: React.FC = () => (
  <Provider store={store}>
    <OrderBookProvider>
      <div className={styles.customContainer}>
        <h1>CoinRoutes Frontend Code Test</h1>
        <CurrencyPairSelector />
        <RealTimeChart />
        <LadderView />
      </div>
    </OrderBookProvider>
  </Provider>
);

export default App;
