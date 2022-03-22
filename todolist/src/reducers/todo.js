import { ADD_TODO, REMOVE_TODO, EDIT_TODO } from '../actions';

const INITIAL_STATE = {
  todos: [],
  text: ''
};

const todoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_TODO:
    return {
      ...state,
      todos: state.todos.concat(action.payload),
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
