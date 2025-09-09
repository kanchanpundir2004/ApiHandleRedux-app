import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./Store";
import Counting from "./Counting";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Counting></Counting>
      </Provider>
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
