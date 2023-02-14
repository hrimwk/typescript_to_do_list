import { TodoAction } from './actions';

// export interface TodoList {
//   id: number;
//   value: string;
//   checked: boolean;
// }
// const initialState: TodoList[] | [] = [];

// function todoApp(listState = initialState, action: TodoAction) {
//   switch (action.type) {
//     case 'ADD_TODO': {
//       return [
//         ...listState,
//         {
//           id: listState.length === 0 ? 0 : listState[listState.length - 1].id + 1,
//           value: action.todoInput,
//           checked: false,
//         },
//       ];
//     }
//     case 'EDIT_TODO': {
//       const changedList = { id: action.id, value: action.value, checked: action.check };
//       const newLists = listState.filter((list: { id: number }) => list.id !== action.id);
//       return [...newLists, changedList].sort((f, s) => f.id - s.id);
//     }
//     case 'DELETE_TODO': {
//       const newTodos = listState.filter((el) => el.id.toString() !== action.id);
//       return (listState = newTodos);
//     }
//     case 'CHECK_TODO': {
//       const newCheck = listState.map((data) => ({
//         ...data,
//         checked: data.id.toString() === action.name ? !data.checked : data.checked,
//       }));
//       return (listState = newCheck);
//     }
//     default:
//       return listState;
//   }
// }

// export { todoApp };
