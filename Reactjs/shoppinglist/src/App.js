import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cv from "./component/pages/Cv";
import Home from "./component/pages/Home";
import Projects from "./component/pages/Projects";
import { Container, Row, Col, Button, Card, Image } from 'react-bootstrap';
import Footer from './component/Footer';
import Header from './component/Header';
import Challenge from './component/pages/project/Challenge';



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
                        <Route path="/component/pages/project/Challenge" element={<Challenge />} />


                    </Routes>
                    <Footer />
                </Container>

            </BrowserRouter>
        </>
    )

}

export default App;




