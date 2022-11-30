import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    desc: "buy food!",
    status: "TODO",
  },
];

const slice = createSlice({
  name: "task",
  initialState,
  reducers: {},
});

export const {} = slice.actions;

export default slice.reducer;
