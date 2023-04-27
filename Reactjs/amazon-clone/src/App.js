import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Checkout from './pages/checkout';
import Headers from './components/Header';


function App() {

  return (

    <BrowserRouter>
      <Headers />
      <Routes>


        <Route path="Login" element={<Login />} />
        <Route path="Checkout" element={<Checkout />} />
        <Route path="/" element={<Home />} />

      </Routes>
    </BrowserRouter>
  );

}

export default App;
