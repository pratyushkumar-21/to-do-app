import { createSlice } from "@reduxjs/toolkit";
import {
  TASK_TODO_STATUS,
  TASK_IN_PROGRESS_STATUS,
  TASK_DONE_STATUS,
} from "../constant/tasks";

const initialState = {
  1: {
    id: 1,
    name: "Grocery",
    desc: "buy food!",
    status: TASK_TODO_STATUS,
  },
  2: {
    id: 2,
    name: "GYM",
    desc: "need to go gym today",
    status: TASK_IN_PROGRESS_STATUS,
  },
  3: {
    id: 3,
    name: "Study",
    desc: "need to do 2hrs of study!",
    status: TASK_DONE_STATUS,
  },
  4: {
    id: 4,
    name: "Study",
    desc: "need to do 2hrs of study!",
    status: TASK_TODO_STATUS,
  },
};

const slice = createSlice({
  name: "task",
  initialState,
  reducers: {
    changeTaskStatus: (state, action) => {
      const { id, status } = action.payload;
      state[id].status = status;
    },

    deleteTask: (state, action) => {
      delete state[action.payload.id];
    },
  },
});

export const { changeTaskStatus, deleteTask } = slice.actions;

export default slice.reducer;
