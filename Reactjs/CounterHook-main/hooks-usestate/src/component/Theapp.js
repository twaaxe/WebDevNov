import React, { useState } from 'react';

 function Theapp(){
   const [count, setCount] = useState(0)
  // actual veranderaar begin default

  function decrement() {
    // setCount(count - 1) 
    //inscope problem variables overwriting 
    setCount(prevCount => prevCount - 1)
  } 
  
  function increment() {
    setCount(prevCount => prevCount + 1)
  }

    return (
      <header className="App-header">
        <button onClick={decrement}>-</button>
        <span>{count}</span>
        <button onClick={increment}>+</button>
      </header>
    )

    }

    export default Theapp;