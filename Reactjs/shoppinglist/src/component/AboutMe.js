import React from 'react'
import { Row, Col, Image } from 'react-bootstrap';
import Photo_cv from "./images/photo_cv.jpg"
import "../style/style.css"



export default function AboutMe() {
    return (
        <>

            <Row className='mx-3 my-1 ' id="competences">
                <Col className='text-center'>
                    <div className='my-2'>
                        <Image src={Photo_cv} rounded />
                    </div>
                    <h5>Lets's work together</h5>
                </Col>

                <Col className=' my-auto '>
                    <p className=" ">
                        Je suis un homme de 26 ans très dynamique et ambitieux, efficace et minutieux dans mon travail. Je suis curieux et j'aime les ambiance où les idées s'échangent facilement ce qui aide à mon développement personnel et au développement professionnel en général. Je crois en l'importance de la bonne communication et organisation sur le lieux de travail.
                    </p>
                </Col>
            </Row>
        </>
    )
}
