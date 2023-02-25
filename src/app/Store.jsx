import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice, // ! Counter Slice ki jo initial state h uska access yaha pr add hua hai
  },
});
