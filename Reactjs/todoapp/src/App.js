import { Container } from "react-bootstrap";
import { FcTodoList } from "react-icons/fc";

function App() {
  return (
    <>
      <Container>
        <div className=" text-dark px-3 py-4 todo-body">
          <h1 className="lead fw-bold">
            <FcTodoList /> ToDo Application
          </h1>
          <div id="div1">
            <h1>Div1</h1>
          </div>
          <div id="div2">
            <h1>Div1</h1>
          </div>
          <div id="div3">
            <h1>Div1</h1>
          </div>
        </div>
      </Container>
    </>
  );
}

export default App;
