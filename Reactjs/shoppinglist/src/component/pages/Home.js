import React from 'react'
import { Container, Row, Col, Button, Card, Image } from 'react-bootstrap';
import Photo_cv from "../images/photo_cv.jpg"


export default function Home() {
    return (
        <div>
            <h1>this is the home page</h1>

            <Container className='my-4 py-3'>

                <Row className='mx-auto my-4' id="aboutMe">

                    <Col className='text-center'>
                        <div className='my-2'>
                            <Image src={Photo_cv} rounded />
                        </div>

                        <p className="my-2">
                            Je suis un homme de 26 ans très dynamique et ambitieux, efficace et minutieux dans mon travail. Je suis curieux et j'aime les ambiance où les idées s'échangent facilement ce qui aide à mon développement personnel et au développement professionnel en général. Je crois en l'importance de la bonne communication et organisation sur le lieux de travail.
                        </p>
                    </Col>



                </Row>

                <Row className='  ' id="competences">
                    <Col className='mx-auto my-2 p-4 text-start'>
                        mes skills, les differents langages que je connaise(pas l experience car on en parlera apres)
                        graphique visuel
                    </Col>

                    <Col className='mx-auto my-2 p-4 text-end'>
                        mes skills, les differents langages que je connaise(pas l experience car on en parlera apres)
                        note ecrite
                    </Col>
                </Row>

                <Row className='text-center' id="education">

                    <Col lg={3} sm={6}>

                        <div>
                            <div>
                                <h5>Fevrier 2021</h5>
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

                    <Col lg={3} sm={6}>
                        <div>
                            <div >
                                <h5>Aout 2020</h5>
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

                    <Col lg={3} sm={6}>
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

                    <Col lg={3} sm={6}>
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

                <Row className=' ' id="portfolio">

                </Row>
            </Container>
        </div>
    )
}
