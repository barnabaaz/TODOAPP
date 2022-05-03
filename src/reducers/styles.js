import { OPEN_ADD_TODO } from "./types";

const initialState = {
  open: false,
};

const styleReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_ADD_TODO: {
      console.log(action.payload);
      return {
        ...state,
        open: !action.payload,
      };
    }
    default:
      return state;
  }
};

export default styleReducer;
