import { createSlice } from "@reduxjs/toolkit";
import { StateTypes } from "../../shared/types";

const rootReducer = createSlice({
  name: "data",
  initialState: {
    data: [],
    value: "",
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
    handleInput: (state, action) => {
      state.value = action.payload;
    },
  },
});

export default rootReducer.reducer;
export const { addTask, handleInput } = rootReducer.actions;
