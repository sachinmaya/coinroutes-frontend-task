// export const createWebSocketConnection = (pair: string): WebSocket => {
//   const ws = new WebSocket("wss://ws-feed.pro.coinbase.com");

//   ws.onopen = () => {
//     ws.send(
//       JSON.stringify({
//         type: "subscribe",
//         channels: [{ name: "level2", product_ids: [pair] }],
//       })
//     );
//   };

//   return ws;
// };

// src/utils/websocket.ts
export const createPublicWebSocketConnection = (pair: string): WebSocket => {
  const ws = new WebSocket("wss://ws-feed.pro.coinbase.com");

  ws.onopen = () => {
    const subscribeMessage = JSON.stringify({
      type: "subscribe",
      channels: [
        { name: "ticker", product_ids: [pair] },
        { name: "trade", product_ids: [pair] },
      ],
    });

    ws.send(subscribeMessage); // Subscribe to the channels
  };

  // ws.onmessage = (event) => {
  //   const data = JSON.parse(event.data);
  //   console.log("Message received:", data);
  //   // Handle received data here
  // };

  ws.onerror = (error) => {
    console.error("WebSocket error:", error);
  };

  return ws;
};
