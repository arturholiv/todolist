export const LOGIN_EMAIL = 'LOGIN_EMAIL';
export const SAVE_TODO = 'SAVE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

export default function loginEmail(email) {
  return {
    type: LOGIN_EMAIL,
    email,
  };
}

export function saveTodo(payload) {
  return {
    type: SAVE_TODO,
    payload,
  };
}

export function removeTodo(payload) {
  return {
    type: REMOVE_TODO,
    payload,
  };
}
