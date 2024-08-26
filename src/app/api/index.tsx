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
    clearList: (state: StateTypes) => {
      state.data = [];
    },
    toggleCompleted: (state: StateTypes, id: any) => {
      state.data.map((el) =>
        el.id === id ? { ...el, completed: !el.completed } : el
      );
    },
  },
});

export default rootReducer.reducer;
export const { addTask, clearList, toggleCompleted } = rootReducer.actions;
