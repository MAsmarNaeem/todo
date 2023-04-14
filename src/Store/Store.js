import { configureStore } from "@reduxjs/toolkit";
import mytodo from "./Slice";

const store = configureStore({
  reducer: {
    mytodo,
  },
});

export default store;
