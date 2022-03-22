import { ADD_TODO, REMOVE_TODO, EDIT_TODO, ADD_TEXT } from '../actions';

const INITIAL_STATE = {
  todos: [],
  text: ''
};

const todoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_TEXT:
    return {
      ...state,
      text: action.payload,
    }
  case ADD_TODO:
    const todoList = state.todos.concat(action.payload);
    window.localStorage.setItem('todoList', JSON.stringify(todoList)); // Saves in the local localStorage
    return {
      ...state,
      todos: todoList, text: '',
    };
  case REMOVE_TODO:
    return {
      ...state,
      todos: state.todos.filter((todo, i) => i !== action.payload),
    };
  case EDIT_TODO:
    return {
      ...state,
      text: state.todos[action.payload],
    };  
  default:
    return state;
  }
};

export default todoReducer;
