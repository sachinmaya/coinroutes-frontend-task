import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// export interface Order {
//   [key: string]: [string, string][];
// }
export interface IOrderBook {
  type?: string;
  sequence?: number;
  product_id?: string;
  price?: string;
  open_24h?: string;
  volume_24h?: string;
  low_24h?: string;
  high_24h?: string;
  volume_30d?: string;
  best_bid?: string;
  best_bid_size?: string;
  best_ask?: string;
  best_ask_size?: string;
  side?: string;
  time?: string;
  trade_id?: number;
  last_size?: string;
}

export interface OrderBookState {
  recentData: IOrderBook;
  allData: IOrderBook[];
  selectedPair: string;
  isLoading: boolean;
}

const initialState: OrderBookState = {
  recentData: {},
  allData: [],
  selectedPair: "BTC-USD",
  isLoading: false,
};

const orderBookSlice = createSlice({
  name: "orderBook",
  initialState,
  reducers: {
    setRecentData(state, action: PayloadAction<IOrderBook>) {
      state.recentData = action.payload;
    },
    setSelectedPair(state, action: PayloadAction<string>) {
      state.selectedPair = action.payload;
    },
    setAllData(state, action: PayloadAction<any[]>) {
      state.allData = action.payload;
    },
    setIsLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    addData(state, action: PayloadAction<any>) {
      state.allData.push(action.payload);
    },
  },
});

export const {
  setRecentData,
  setSelectedPair,
  setAllData,
  setIsLoading,
  addData,
} = orderBookSlice.actions;

export default orderBookSlice.reducer;
