import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const TodoInput = styled.input`
  height: 51px;
  width: 100%;
  outline: none;
  border: none;
  border: 1px solid #4747ff;
  color: white;
  background-color: transparent;
  border-radius: 10px 0 0 10px;
`;
const SubmitBtn = styled.button`
  background: #4747ff;
  color: white;
  height: 55px;
  padding-left: 3rem;
  padding-right: 3rem;
  border-radius: 0 10px 10px 0;
  cursor: pointer;
  border: none;
`;
const FormContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 3rem;
`;
const TodoForm = (props) => {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });

    setInput("");
  };
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <FormContainer>
            <TodoInput
              type="text"
              placeholder="Editar tarea"
              value={input}
              name="text"
              className="todo-input"
              onChange={handleChange}
              ref={inputRef}
            />
            <SubmitBtn>Editar tarea</SubmitBtn>
          </FormContainer>
        </>
      ) : (
        <>
          <FormContainer>
            <TodoInput
              type="text"
              placeholder="Añadir tarea"
              value={input}
              name="text"
              className="todo-input"
              onChange={handleChange}
              ref={inputRef}
            />
            <SubmitBtn>Añadir tarea</SubmitBtn>
          </FormContainer>
        </>
      )}
    </form>
  );
};

export default TodoForm;
