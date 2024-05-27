import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todoSlicer";

const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});

export default store;
