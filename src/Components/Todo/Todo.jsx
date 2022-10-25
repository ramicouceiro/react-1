import React, { useState } from "react";
import TodoForm from "../TodoForm/TodoForm";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import styled from "styled-components";

const TodoDiv = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
  background: #4f4fec;
  padding: 1rem;
`;

const Todo = ({ todos, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <TodoDiv key={index}>
      <div key={todo.id}>{todo.text}</div>
      <div>
        <RiCloseCircleLine
          onClick={() => {
            removeTodo(todo.id);
          }}
        />
        <TiEdit
          onClick={() => {
            setEdit({ id: todo.id, value: todo.text });
          }}
        />
      </div>
    </TodoDiv>
  ));
};

export default Todo;
