// createAsyncThunk
import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// {type: "coin/fetch"/pending, payload: undefined}
// {type: "coin/fetch"/fulfilled, payload: data}
// {type: "coin/fetch"/rejected, payload: err.message}

// 1. action creator
FetchData(20);

const FetchData = createAsyncThunk(
  // Action:type:payload
  "coin/fethc",
  async (args, thunkAPI) => {
    try {
      const res = fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${args}`
      );
      const data = await res.json();
      return data;
    } catch (err) {
      return rejectwithValue(err.message);
    }
  }
);

// 2. slice
const coinSlice = createSlice({
  name: "coin",
  initialState: {
    loading: false,
    data: [],
    error: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(FetchData.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(FetchData.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    });
    builder.addCase(FetchData.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.payload;
    });
  },
});

const store = configureStore({
  reducer: {
    coin: coinSlice.reducer,
  },
});
