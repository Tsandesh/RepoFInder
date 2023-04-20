import { configureStore } from "@reduxjs/toolkit";
import searchRepo from "./searchSlice";

export const store = configureStore({
  reducer: {
    setRepo: searchRepo,
  },
});
