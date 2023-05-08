import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cv from "./component/pages/Cv";
import Home from "./component/pages/Home";
import Projects from "./component/pages/Projects";
import { Container } from 'react-bootstrap';
import Footer from './component/footer';
import Header from './component/header';
import Challenge from './component/pages/project/Challenge';
import AmazonClone from './component/pages/project/AmazonClone';
import MusicApp from './component/pages/project/MusicApp';



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
                        <Route path="/component/pages/project/AmazonClone" element={<AmazonClone />} />
                        <Route path="/component/pages/project/MusicApp" element={<MusicApp />} />


                    </Routes>
                    <Footer />
                </Container>

            </BrowserRouter>
        </>
    )

}

export default App;




