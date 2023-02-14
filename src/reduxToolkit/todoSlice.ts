import { createSlice } from '@reduxjs/toolkit';

export interface TodoList {
  id: number;
  value: string;
  checked: boolean;
}

const initialState: TodoList[] | [] = [];

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (listState, action) => {
      return [
        ...listState,
        {
          id: listState.length === 0 ? 0 : listState[listState.length - 1].id + 1,
          value: action.payload,
          checked: false,
        },
      ];
    },
    editTodo: (listState, { payload }) => {
      const changedList = {
        id: payload.dataId,
        value: payload.newList,
        checked: payload.listsCheck,
      };
      const newLists = listState.filter((list: { id: number }) => list.id !== payload.dataId);
      const newTodos = [...newLists, changedList].sort((f, s) => f.id - s.id);
      return (listState = newTodos);
    },
    deleteTodo: (listState, { payload }) => {
      const newTodos = listState.filter((el) => el.id.toString() !== payload);
      return (listState = newTodos);
    },
    checkTodo: (listState, { payload }) => {
      const newCheck = listState.map((data) => ({
        ...data,
        checked: data.id.toString() === payload ? !data.checked : data.checked,
      }));
      return (listState = newCheck);
    },
  },
});

export const { addTodo, editTodo, deleteTodo, checkTodo } = todoSlice.actions;
