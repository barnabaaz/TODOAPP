import React from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import { PlusButton, StyledButton, TextContainerRow } from "../style";
import { MdDelete } from "react-icons/md";
import { FaPlus, FaCheck } from "react-icons/fa";
import { getTodo, deleteTodo, checkTodo } from "../reducers/actions/todo";
import { openAddTodo } from "../reducers/actions/styles";
import { TextContainer, TextContainerBefore, CheckedBox } from "../style";
const Todo = (props) => {
  React.useState(() => {
    props.getTodo();
  }, []);
  const handleCheck = (id) => {
    props.checkTodo(id);
  };
  const handleDelete = (id) => {
    props.deleteTodo(id);
  };
  const handleOpen = (open) => {
    props.openAddTodo(open);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "280px",
        padding: "10px 0",
        overflowY: "auto",
      }}
    >
      {props.todo.map((item) => (
        <TextContainer key={item._id}>
          <TextContainerBefore>
            <TextContainerRow
              className="text__container__hover"
              style={{
                display: "flex",
                padding: "0 30px",
                alignItems: "center",
                marginRight: "8px",
              }}
              onClick={() => {
                handleCheck(item);
              }}
            >
              {" "}
              <CheckedBox>{item.isDone && <FaCheck />}</CheckedBox>
              <p>{item.text}</p>
            </TextContainerRow>
            <div>
              {" "}
              <StyledButton>
                <MdDelete
                  style={{ fontSize: "24px" }}
                  onClick={() => handleDelete(item._id)}
                />
              </StyledButton>
            </div>
          </TextContainerBefore>
        </TextContainer>
      ))}
      <PlusButton onClick={() => handleOpen(props.open)}>
        <FaPlus style={{ fontSize: "24px", color: "#d7ff8c" }} />
      </PlusButton>
    </div>
  );
};

const mapStateToProps = (state) => ({
  todo: state.todoReducer.todo,
  open: state.styleReducer.open,
});
propTypes.Todo = {
  todo: propTypes.array.isRequired,
  getTodo: propTypes.func.isRequired,
  deleteTodo: propTypes.func.isRequired,
  checkTodo: propTypes.func.isRequired,
  openADddTodo: propTypes.func.isRequired,
};

export default connect(mapStateToProps, {
  getTodo,
  deleteTodo,
  checkTodo,
  openAddTodo,
})(Todo);
