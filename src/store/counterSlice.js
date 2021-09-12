import { createSlice } from "@reduxjs/toolkit";

const initialState = { counter: 0 };

const slice_counter = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
  },
});
export const { increment, decrement } = slice_counter.actions;
export default slice_counter.reducer;
