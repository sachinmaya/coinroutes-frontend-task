// src/components/OrderBookProvider.tsx

import React, { ReactNode, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import {
  setRecentData,
  setIsLoading,
  addData,
} from "../redux/slices/orderBookSlice";
import { createPublicWebSocketConnection } from "../utils/websocket";

interface OrderBookProviderProps {
  children: ReactNode;
}

const OrderBookProvider: React.FC<OrderBookProviderProps> = ({ children }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { selectedPair } = useSelector((state: RootState) => state.orderBook);

  useEffect(() => {
    dispatch(setIsLoading(true));
    const ws = createPublicWebSocketConnection(selectedPair);

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);

      dispatch(setRecentData(data));
      dispatch(addData(data));
      dispatch(setIsLoading(false));
    };

    return () => ws.close();
  }, [selectedPair, dispatch]);

  return <>{children}</>;
};

export default OrderBookProvider;
