import axios from "axios";
import { ADD_TODO, DELETE_TODO, GET_TODO, TOGGLE_TODO } from "../types";

export const getTodo = () => (dispatch) => {
  axios.get("http://localhost:5000").then((res) => {
    console.log(res.data);
    dispatch({
      type: GET_TODO,
      payload: res.data.payload,
    });
  });
};
export const deleteTodo = (id) => (dispatch) => {
  axios.delete(`http://localhost:5000/${id}`).then((res) =>
    dispatch({
      type: DELETE_TODO,
      payload: id,
    })
  );
};

export const checkTodo = (todo) => (dispatch) => {
  axios
    .put(`http://localhost:5000/${todo._id}`, {
      isDone: todo.isDone,
      text: todo.text,
    })
    .then((res) =>
      dispatch({
        type: TOGGLE_TODO,
        payload: todo._id,
      })
    );
};

export const addTodo = (text) => (dispatch) => {
  axios
    .post(`http://localhost:5000`, { text: text, isDone: false })
    .then((res) =>
      dispatch({
        type: ADD_TODO,
        payload: res.data.payload,
      })
    );
};
