import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Checkout from '../pages/checkout';
import Login from '../pages/Login';
export default function Router() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="Login" element={<Login />} />
                <Route path="Checkout" element={<Checkout />} />
                <Route path="/" element={<Headers />} />
            </Routes>
        </BrowserRouter>
    )
}