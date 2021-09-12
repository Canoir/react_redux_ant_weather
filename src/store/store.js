import { configureStore } from "@reduxjs/toolkit";
import counter from "./counterSlice";
import pager from "./pagerSlice";
import temp from "./tempSlice";
// const counterReducer = (
//   state = { counter: 0, currentPage: <CounterPage /> },
//   action
// ) => {
//   if (action.type === "increment") {
//     return {
//       counter: state.counter + 1,
//       currentPage: state.currentPage,
//     };
//   } else if (action.type === "decrement") {
//     return {
//       counter: state.counter - 1,
//       currentPage: state.currentPage,
//     };
//   } else if (action.type === "changePage") {
//     return {
//       counter: state.counter,
//       currentPage: action.page,
//     };
//   }
//   return state;
// };
//
const store = configureStore({
  reducer: { counter, pager, temp },
  middleware: (_) =>
    _({
      serializableCheck: false,
    }),
});
export default store;
