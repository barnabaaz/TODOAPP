import { combineReducers } from "@reduxjs/toolkit";
import todoReducer from "./todo";
import styleReducer from "./styles";
export default combineReducers({
  todoReducer,
  styleReducer,
});
