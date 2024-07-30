// src/store.ts

import { configureStore } from "@reduxjs/toolkit";
import orderBookReducer, { OrderBookState } from "./slices/orderBookSlice";

const store = configureStore({
  reducer: {
    orderBook: orderBookReducer,
  },
});

export default store;

export type RootState = {
  orderBook: OrderBookState;
};
export type AppDispatch = typeof store.dispatch;
