import '../style/style.css';
import { Link } from 'react-router-dom';



export default function Header() {
    return (
        <>

            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div className="container">

                    <a className="navbar-brand" href="#"><i className="fas fa-warehouse me-2"></i>Home, how am i</a>


                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                            <li className="nav-item">


                                <a className="nav-link" href="#" aria-current="page">CV, parcour <span
                                    className="visually-hidden">(current)</span></a>


                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo" href="#" aria-current="page">Projects done <span
                                    className="visually-hidden">(current)</span></a>

                            </li>
                        </ul>

                    </div>
                </div>
            </nav >



        </>
    )
}