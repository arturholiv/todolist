import { SAVE_TODO, REMOVE_TODO } from '../actions';

const INITIAL_STATE = {
  list: [],
};

const todoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SAVE_TODO:
    return {
      ...state,
      TODOs: [...state.expenses, action.payload],
    };
  case REMOVE_TODO:
    return {
      ...state,
      expenses: action.payload,
    };
  default:
    return state;
  }
};

export default todoReducer;
