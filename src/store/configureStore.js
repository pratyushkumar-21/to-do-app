import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./tasks";

const rootReducer = {
  tasks: taskReducer,
};

export default function () {
  return configureStore({
    reducer: rootReducer,
  });
}
