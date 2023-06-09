import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cv from "./component/pages/Cv";
import Home from "./component/pages/Home";
import Projects from "./component/pages/Projects";
import { Container } from 'react-bootstrap';
import Footer from './component/footer';
import Header from './component/header';



function App() {

    return (
        <>
            <BrowserRouter>
                <Container fluid>
                    <Header />
                    <Routes>
                        <Route path="Cv" element={<Cv />} />
                        <Route path="Projects" element={<Projects />} />
                        <Route path="/" element={<Home />} />
                        

                    </Routes>
                    <Footer />
                </Container>

            </BrowserRouter>
        </>
    )

}

export default App;




