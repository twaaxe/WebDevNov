import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import Photo_cv from "./images/photo_cv.jpg"



export default function Education() {
    return (
        <>
            <Container fluid>

                <Row className='text-center justify-content-center toScrollPad ' id="education">
                    <Col lg={3} sm={6} className='my-auto educationBlock'>

                        <div>
                            <div>
                                <h5>Fevrier 2017</h5>
                                <span class="glyphicon glyphicon-education"></span>
                                <h3>Ephec Louvain-La-Neuve</h3>
                                <h4>Etudes de Technologie de l'Informatique</h4>
                                <ul>
                                    <li><p>Conception de sites Web statique</p></li>
                                    <li><p>Dynamisation de sites web</p></li>
                                    <li><p>Infrastructure réseau de base </p></li>
                                    <li><p>Introduction aux base de données et aux système de gestion de base de données</p></li>
                                </ul>
                            </div>
                        </div>
                    </Col>

                    <Col lg={3} sm={6} className='my-auto educationBlock'>
                        <div>
                            <div >
                                <h5>Aout 2022</h5>
                                <span class="glyphicon glyphicon-education"></span>
                                <h3>OpenClassrooms</h3>
                                <h4> Formation HTML5 et CSS3</h4>
                                <ul>
                                    <li><p>Structurer une page web en HTML</p></li>
                                    <li><p>Mettre en forme et organiser les éléments d' une page web en CSS</p></li>
                                    <li><p>Adapter une page pour la rendre responsive</p></li>
                                </ul>
                            </div>
                        </div>

                    </Col>

                    <Col lg={3} sm={6} className='my-auto educationBlock'>
                        <div >
                            <div>
                                <h5>Fevrier 2021</h5>
                                <span class="glyphicon glyphicon-education"></span>
                                <h3>Udemy</h3>
                                <h4>Formation développeur web</h4>
                                <ul>
                                    <li><p>Conception de sites web</p></li>
                                    <li><p>Dynamisation de sites web (JavaScript, Jquery)</p></li>
                                    <li><p>Framework (Bootsrtap, Bootsnipp) </p></li>
                                    <li><p>WordPress</p></li>
                                    <li><p>Mise en relation d'un site web avec une base de données </p></li>
                                </ul>
                            </div>
                        </div>

                    </Col>

                    <Col lg={3} sm={6} className='my-auto educationBlock'>
                        <div >
                            <div >
                                <h5>Novembre 2022 -Aout 2023</h5>
                                <span class="glyphicon glyphicon-education"></span>
                                <h3>Intec</h3>
                                <h4>Formation développeur web</h4>
                                <ul>
                                    <li><p>Conception de sites web</p></li>
                                    <li><p>Dynamisation de sites web (JavaScript, Jquery)</p></li>
                                    <li><p>Framework (Bootsrtap, Bootsnipp) </p></li>
                                    <li><p>WordPress</p></li>
                                    <li><p>Mise en relation d'un site web avec une base de données </p></li>
                                </ul>
                            </div>
                        </div>

                    </Col>
                </Row>
            </Container>
        </>
    )
}
