//add empty array list for use effect to stop the infinity loop

import {
  Container,
  Form,
  InputGroup,
  ListGroup,
  ListGroupItem,
  Button,
} from "react-bootstrap";
import { FcSearch, FcTodoList } from "react-icons/fc";
import { IoIosAddCircle } from "react-icons/io";
import { BsCardChecklist } from "react-icons/bs";
import { MdDeleteSweep } from "react-icons/md";
import { useState, useEffect } from "react";

import AddTodo from "./component/AddToDo";
import ListTodo from "./component/ListTodo";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/todos")
      .then((res) => res.json())
      .then((data) => {
        setTodos(data);
      });
  }, []);

  return (
    <Container>
      <div className=" text-dark px-3 py-4 todo-body">
        <h1 className="lead fw-bold">
          <FcTodoList /> ToDo Application
        </h1>
      </div>
      <AddTodo
        todoState={{ todos, setTodos }}
        inputState={{ input, setInput }}
      />

      <hr className="text-dark" />
      <div className="text-dark px-3 py-4 todo-body">
        <h5>Todos</h5>
      </div>

      <ListTodo />

      <Button variant="danger">Danger</Button>
    </Container>
  );
}

export default App;
