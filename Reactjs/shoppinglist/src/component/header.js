import '../style/style.css';
import { Link } from 'react-router-dom';



export default function Header() {
    return (
        <>

            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div className="container  my-auto">

                    <ul className="navbar-nav me-auto mt-2 mt-lg-0">

                        <li className='nav-item'>
                            <Link to={"/"}>
                                <a className="nav-link" href="#"><span> <h5>How am I</h5></span></a>
                            </Link>
                        </li>

                        <li className="nav-item">

                            <Link to={"/Cv"} >
                                <a className="nav-link" href="#" aria-current="page"> <span className=""><h5>Parcour</h5></span></a>
                            </Link>

                        </li>
                        <li className="nav-item">
                            <Link to={"/Projects"}>
                                <a className="nav-link" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo" href="#" aria-current="page"> <span><h5>Projects Done</h5></span></a>
                            </Link>

                        </li>
                    </ul>
                </div>
            </nav >



        </>
    )
}