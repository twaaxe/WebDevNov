import { Row, Col, Nav, Navbar, Container } from 'react-bootstrap';


import { Link } from 'react-router-dom'


export default function Header() {

    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">About Kero</Navbar.Brand>

            <Nav className=" mx-auto d-flex justify-content-evenly">
                {/* <Nav.Link href="#home">User Inerface</Nav.Link>
                <Nav.Link href="#features">Web Design</Nav.Link>
                <Nav.Link href="#pricing">Programming</Nav.Link> */}
                <Link to={"/"} className="text-light nav-link">User interface</Link>
                <Link to={"/web-design"} className="text-light nav-link">Web design</Link>
                <Link to={"/programming"} className="text-light nav-link">Programming</Link>
            </Nav>

        </Navbar>
    )
}