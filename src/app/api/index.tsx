import { createSlice } from "@reduxjs/toolkit";
import { StateTypes } from "../../shared/types";

const rootReducer = createSlice({
  name: "data",
  initialState: {
    data: [],
  },
  reducers: {
    addTask: (state: StateTypes, action) => {
      const todo = {
        id: Date.now(),
        text: action.payload.text,
        completed: false,
      };
      state.data.push(todo);
    },
  },
});

export default rootReducer.reducer;
export const { addTask } = rootReducer.actions;
