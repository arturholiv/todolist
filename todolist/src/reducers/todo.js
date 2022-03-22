import { ADD_TODO, REMOVE_TODO, EDIT_TODO, ADD_TEXT, DELETE_ALL, SAVE_TODOS } from '../actions';

const INITIAL_STATE = {
  todos: [],
  text: ''
};

const setTodo = (todos) => window.localStorage.setItem('todoList', JSON.stringify(todos));

const todoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SAVE_TODOS:
    const todos = JSON.parse(window.localStorage.getItem('todoList'))
    return {
      ...state,
      todos: todos ? todos: [],
    }
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
      todos: todoList,
    };
  case REMOVE_TODO:
    const todoListFilter = state.todos.filter((todo, i) => i !== action.payload);
    setTodo(todoListFilter);
    return {
      ...state,
      todos: todoListFilter,
    };
  case EDIT_TODO:
    return {
      ...state,
      text: state.todos[action.payload],
    };  
    case DELETE_ALL:
      return {
        ...state,
        todos: [],
      }
  default:
    return state;
  }
};

export default todoReducer;
