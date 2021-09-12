import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  temp: localStorage.getItem("temp_temp") || 0,
  location: localStorage.getItem("temp_location") || "London",
  fullLoc:
    localStorage.getItem("temp_fullLoc") ||
    "United Kingdom, City of London, Greater London",
};

const slice_temp = createSlice({
  name: "temp",
  initialState,
  reducers: {
    setTemp(state, { payload }) {
      state.temp = payload;
      localStorage.setItem("temp_temp", payload);
    },
    setLocation(state, { payload }) {
      state.location = payload;
      localStorage.setItem("temp_location", payload);
    },
    setFullLoc(state, { payload }) {
      state.fullLoc = payload;
      localStorage.setItem("temp_fullLoc", payload);
    },
  },
});
export const { setTemp, setLocation, setFullLoc } = slice_temp.actions;
export default slice_temp.reducer;
