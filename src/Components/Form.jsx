import React, { useRef } from "react";
import { addTodo } from "../reducers/actions/todo";
import { openAddTodo } from "../reducers/actions/styles";
import { FaTimes } from "react-icons/fa";
import {
  ModalContainer,
  StyledButtonAdd,
  ExitBox,
  ExitContainer,
  ButtonContainer,
  FormContainer,
  StyledInput,
} from "../style";
import propTypes from "prop-types";
import { connect } from "react-redux";

const Form = (props) => {
  const [inputText, setInputText] = React.useState({
    text: "",
    helperText: "",
  });
  const handleChange = (event) => {
    setInputText({
      ...inputText,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputText.text !== " " || "") {
      props.addTodo(inputText.text);
      props.openAddTodo(props.open);
      setInputText({
        ...inputText,
        text: "",
        helperText: "",
      });
      console.log("i was called");
    } else {
      setInputText({
        ...inputText,
        helperText: "Please enter a valid text",
      });
    }
  };
  console.log(inputText.text);
  const handleClose = (open) => {
    props.openAddTodo(open);
  };
  const focus = useRef(null);
  React.useEffect(() => {
    focus.current.focus();
  });
  return (
    <ModalContainer open={props.open}>
      <FormContainer>
        <ExitContainer>
          <ExitBox
            style={{ marginBottom: "10px" }}
            onClick={() => handleClose(props.open)}
          >
            <FaTimes />
          </ExitBox>
        </ExitContainer>
        <form
          style={{ display: "flex", flexDirection: "column" }}
          onSubmit={handleSubmit}
        >
          <StyledInput
            className="input"
            name="text"
            type="text"
            ref={focus}
            onChange={handleChange}
            value={inputText.text}
            placeholder="enter Todo..."
          />
          <p>{inputText.helperText}</p>
          <ButtonContainer>
            <StyledButtonAdd style={{ color: "#d7ff8c", fontWeight: 600 }}>
              <span>ADD</span>
            </StyledButtonAdd>
          </ButtonContainer>
        </form>
      </FormContainer>
    </ModalContainer>
  );
};
const mapStateToProps = (state) => ({
  todo: state.todoReducer.todo,
  open: state.styleReducer.open,
});
Form.propTypes = {
  addTodo: propTypes.func.isRequired,
  open: propTypes.bool.isRequired,
};

export default connect(mapStateToProps, { addTodo, openAddTodo })(Form);
