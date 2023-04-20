import './App.css';
import React, { useState } from 'react';
function App() {

  const [state, setState] = useState({ count: 2, name: "Bene" });
  const count = state.count;
  const name = state.name;
  


//spread operator is used to prevent overwriting previous info
  function decrement() {
    setState(prevState => { return { ...prevState, count: prevState.count - 1 } });
  }

  function increment() {
    setState(prevState => { return { ...prevState, count: prevState.count + 1 } });
  }


  const [firstname, setfirstname] = useState('');

  const handleChange = (event) =>{
    setfirstname(event.target.value)

  }
  





  

  return (
      <>
      

      <div className="App">
        <header className="App-header">
          <p>Hello {firstname}</p>
          <button onClick={decrement}>-</button>
          <span>{count}</span>
          <button onClick={increment}>+</button>
          {/* <p>Name: {name}</p> */}
          {/* <input type="text" value = {firstname} onchange={handleChange} /> */}
          <input type="text" id="text-input" value={firstname} onChange={handleChange} />
        </header>
      </div>
    </>
  );
}

export default App;