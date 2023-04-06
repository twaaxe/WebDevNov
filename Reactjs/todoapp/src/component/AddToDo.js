import { Button, Form, InputGroup } from "react-bootstrap";
import { IoIosAddCircle } from "react-icons/io";

import { useState, useEffect } from "react";

function AddTodo({ inputState, todoState }) {
  const handleInput = (e) => {
    // console.log(e.target.value);

    inputState.setInput(e.target.value);
  };

  const handleClick = () => {
    todoState.setTodos([
      ...todoState.todos,
      {
        todo: inputState.input,
      },
    ]);
  };

  fetch("http://localhost:3001/todos", {
    methods: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      todo: inputState.input,
    }),
  });



  return (
    <InputGroup className="mb-3">
      <Form.Control placeholder="Add a Todo" onChange={handleInput} />
      <Button variant="primary" onClick={handleClick}>
        <IoIosAddCircle className="display-6" />
      </Button>
    </InputGroup>
  );
}

export default AddTodo;
