import { createSlice } from "@reduxjs/toolkit";
import HomePage from "../pages/HomePage";

const initialState = { currentPage: <HomePage /> };
//
const slice_pager = createSlice({
  name: "pager",
  initialState,
  reducers: {
    changePage(state, action) {
      state.currentPage = action.payload;
    },
  },
});
//
export const { changePage } = slice_pager.actions;
export default slice_pager.reducer;
