import {
  GET_TODO,
  DELETE_TODO,
  ADD_TODO,
  UPDATE_TODO,
  TOGGLE_TODO,
} from "./types";

const initialState = {
  todo: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      return {
        ...state,
        todo: [...state.todo, action.payload],
      };
    }
    case TOGGLE_TODO:
      let filter = state.todo.map((item) => {
        if (item._id === action.payload) {
          return { ...item, isDone: !item.isDone };
        }
        return item;
      });
      return {
        ...state,
        todo: filter,
      };

    case UPDATE_TODO: {
      return {
        ...state,
        todo: action.payload,
      };
    }
    case GET_TODO: {
      return {
        ...state,
        todo: action.payload,
      };
    }
    case DELETE_TODO:
      return {
        ...state,
        todo: state.todo.filter((todo) => todo._id !== action.payload),
      };
    default:
      return state;
  }
};
export default todoReducer;
