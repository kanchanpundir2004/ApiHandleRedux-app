import { configureStore } from "@reduxjs/toolkit";
import coinReducer from "./Slicer1"; // rename if file is coinSlice.js

const store = configureStore({
  reducer: {
    coin: coinReducer, // state.coin
  },
});

export default store;
