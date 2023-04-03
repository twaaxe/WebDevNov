import { Row, Col, Nav, Navbar, Container } from 'react-bootstrap';

export default function Header() {

    return (
        //     <Row className="my-3 p-2">
        //         <Col md={3} className=" justify-content-start  text-center headerButton">
        //             <div id="abouKero">About Kero</div>
        //         </Col>
        //         <Col md={9} className=" justify-content-around headerButton" >
        //             <button>user inteface</button>
        //             <div>web design</div>
        //             <div>programming</div>
        //         </Col>
        //     </Row>

        <Navbar bg="dark" variant="dark">



            <Navbar.Brand href="#home">About Kero</Navbar.Brand>


            <Nav className=" mx-auto d-flex justify-content-evenly">
                <Nav.Link href="#home">User Inerface</Nav.Link>
                <Nav.Link href="#features">Web Design</Nav.Link>
                <Nav.Link href="#pricing">Programming</Nav.Link>
            </Nav>



        </Navbar>
    )
}