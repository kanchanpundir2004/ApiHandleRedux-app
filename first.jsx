import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store";
import CoinCreate from "./CoinCreate";

const App = () => {
  return (
    <Provider store={store}>
      <CoinCreate />
    </Provider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
