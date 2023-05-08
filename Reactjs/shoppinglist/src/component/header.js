import '../style/style.css';
import { Link } from 'react-router-dom';
import {Nav} from 'react-bootstrap';



export default function Header() {
    return (
        <>

        <Nav className="Navbar justify-content-end Navbar-expand-md Navbar-dark bg-dark">
            <Nav.Item>
                <Nav.Link href="/home">
                    <Link to={"/"}>
                                <a className="Nav-link" href="#"><span> <h5>Who am I</h5></span></a>
                    </Link>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1">
                <Link to={"/Cv"} >
                                <a className="Nav-link" href="#" aria-current="page"> <span className=""><h5>Parcour</h5></span></a>
                            </Link>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-2">
                <Link to={"/Projects"}>
                                <a className="Nav-link" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo" href="#" aria-current="page"> <span><h5>Projects Done</h5></span></a>
                            </Link>
                </Nav.Link>
            </Nav.Item>
        </Nav >



        </>
    )
}