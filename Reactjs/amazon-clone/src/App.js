import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Checkout from './pages/checkout';
import { useStateValue } from './StateProvider';
import { useEffect } from 'react';


function App() {
  const [{ basket }, dispatch] = useStateValue();
  //piece of code run based on given conditinon

  useEffect(() => {

  }, [])


  return (

    <BrowserRouter>

      <Routes>


        <Route path="Login" element={<Login />} />
        <Route path="Checkout" element={<Checkout />} />
        <Route path="/" element={<Home />} />

      </Routes>
    </BrowserRouter>
  );

}

export default App;
