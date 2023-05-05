import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cv from "./component/pages/Cv";
import Home from "./component/pages/Home";
import Projects from "./component/pages/Projects";




function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="Cv" element={<Cv />} />
                    <Route path="Projects" element={<Projects />} />
                    <Route path="/" element={<Home />} />


                </Routes>

            </BrowserRouter>
        </>
    )

}

export default App;




