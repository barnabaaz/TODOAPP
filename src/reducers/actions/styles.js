import { OPEN_ADD_TODO } from "../types";

export const openAddTodo = (open) => (dispatch) => {
  dispatch({
    type: OPEN_ADD_TODO,
    payload: open,
  });
};
