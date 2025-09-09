import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// 1. async thunk
export const FetchData = createAsyncThunk(
  "coin/fetch",
  async (page, thunkAPI) => {
    try {
      const res = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${page}`
      );
      const data = await res.json();
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
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
    builder.addCase(FetchData.pending, (state) => {
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

export default coinSlice.reducer;
