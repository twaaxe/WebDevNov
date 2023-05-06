import React from 'react'
import { Row, Col, Image, Button } from 'react-bootstrap';
import Photo_cv from "./images/photo_cv.jpg"
import "../style/style.css"



export default function AboutMe() {
    return (
        <>

            <Row className='toScrollPad ' id="aboutMe">
                <Col className='text-center my-auto'>
                    <div className='my-2'>
                        <Image src={Photo_cv} rounded />
                    </div>
                    <Button className='my-3 p-2'>Lets's work together</Button>
                </Col>

                <Col className=' my-auto '>
                    <p className=" fs-4 fw-normal">
                        Je suis un homme de 26 ans très dynamique et ambitieux, efficace et minutieux dans mon travail. Je suis curieux et j'aime les ambiance où les idées s'échangent facilement ce qui aide à mon développement personnel et au développement professionnel en général. Je crois en l'importance de la bonne communication et organisation sur le lieux de travail.
                    </p>
                </Col>
            </Row>
        </>
    )
}
