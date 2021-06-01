import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todosList: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    saveTodo: (state, action) => {
      state.todosList.push(action.payload);
    },
    setCheck: (state, action) => {
      // eslint-disable-next-line array-callback-return
      state.todosList.map((item) => {
        if (action.payload === item.id) {
          if (item.done === true) {
            item.done = false;
          } else {
            item.done = true;
          }
        }
      });
    },
  },
});

export const { saveTodo, setCheck } = todoSlice.actions;
export const selectTodoList = (state) => state.todos.todosList;
export default todoSlice.reducer;
