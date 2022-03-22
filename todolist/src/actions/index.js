export const LOGIN_EMAIL = 'LOGIN_EMAIL';
export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const ADD_TEXT = 'ADD_TEXT';

export default function loginEmail(email) {
  return {
    type: LOGIN_EMAIL,
    email,
  };
}

export function addText(payload) {
  return {
    type: ADD_TEXT,
    payload,
  }
}

export function addTodo(todo) {
  return {
    type: ADD_TODO,
    payload: todo,
  };
}

export function removeTodo(payload) {
  return {
    type: REMOVE_TODO,
    payload,
  };
}

export function editTodo(payload) {
  return {
    type: EDIT_TODO,
    payload,
  }
}
