import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: {
    loading: false,
    error: false,
    count: 0,
  },
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.counter.count += 1;
    },
    decrement: (state) => {
      state.counter.count -= 1;
    },
    reset: (state) => {
      state.counter.count = 0;
    },
    incrementByValue: (state, action) => {
      state.counter.count += action.payload;
    },
  },
});

export const { increment, decrement, reset, incrementByValue } =
  counterSlice.actions;

export default counterSlice.reducer;

export const countSelector = (state) => state.counter.counter.count;
