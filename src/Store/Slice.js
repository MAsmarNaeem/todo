import { createSlice } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";

const Todo = createSlice({
  name: "Todo",
  initialState: { todo: [] },
  reducers: {
    // first function
    addvalue: (state, action) => {
      let newstate = {
        id: state.todo.length + 1,
        text: action.payload,
      };
      state.todo.push(newstate);
    },
    // second function
    deleteval: (state, action) => {
      const item = action.payload;
      let tytodo = state.todo.filter((todo) => todo.id !== item.id);
      return { ...state, todo: tytodo };
    },
    updatevalue: (state, action) => {
      let updatetodo = {
        text: action.payload.text,
      };
      let updatedtodos = state.todo.map((todos) => {
        if (action.payload.id === todos.id) {
          return { ...todos, ...updatetodo };
        } else {
          return todos;
        }
      });
      return {
        ...state,
        todo: updatedtodos,
      };
    },
  },
});

export const { addvalue, deleteval, updatevalue } = Todo.actions;
export default combineReducers({
  Todo: Todo.reducer,
});
