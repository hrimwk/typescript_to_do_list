const ADD_TODO = 'ADD_TODO' as const;
const EDIT_TODO = 'EDIT_TODO' as const;
const DELETE_TODO = 'DELETE_TODO' as const;
const CHECK_TODO = 'CHECK_TODO' as const;

function addTodo(todoInput: string) {
  return {
    type: ADD_TODO,
    todoInput,
  };
}

function editTodo(id: number, value: string, check: boolean) {
  return {
    type: EDIT_TODO,
    id,
    value,
    check,
  };
}
function deleteTodo(id: string) {
  return {
    type: DELETE_TODO,
    id,
  };
}
function checkTodo(name: string) {
  return {
    type: CHECK_TODO,
    name,
  };
}

export type TodoAction =
  | ReturnType<typeof addTodo>
  | ReturnType<typeof editTodo>
  | ReturnType<typeof deleteTodo>
  | ReturnType<typeof checkTodo>;

export { addTodo, editTodo, deleteTodo, checkTodo, ADD_TODO, EDIT_TODO, DELETE_TODO, CHECK_TODO };
