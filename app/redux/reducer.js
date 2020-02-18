import { FETCH_SUCCESS, POST_SUCCESS } from './actions';

const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, { type, data }) => {
  switch (type) {
    case FETCH_SUCCESS:
      return {
        ...state,
        todos: data,
      };
    case POST_SUCCESS:
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default todoReducer;
