import React from 'react'
import { Row, Col, Image, Button, Card } from 'react-bootstrap';
import Photo_cv from "./images/photo_cv.jpg"
import "../style/style.css"



export default function AboutMe() {
    return (
        <>
            {/* <Challenge /> */}

            <Row className='toScrollPad' id="aboutMe">
                <Col className='text-center my-auto'>
                    <div className='my-2'>
                        <Image src={Photo_cv} rounded id="cv_photo" />
                    </div>
                    <Button className='my-3 p-2'>Lets's work together</Button>
                </Col>

                <Col className=' my-auto '>
                    {/* <Card className=" fs-4 fw-normal roundedCorners" id="aboutMeText">
                        Je suis un homme de 26 ans très dynamique et ambitieux, efficace et minutieux dans mon travail. Je suis curieux et j'aime les ambiance où les idées s'échangent facilement ce qui aide à mon développement personnel et au développement professionnel en général. Je crois en l'importance de la bonne communication et organisation sur le lieux de travail.
                    </Card> */}

                    <Card border="primary" style={{ width: '18rem' }}>


                    <Card.Header>Header</Card.Header>
                        <Card.Body>
                        <Card.Title>Primary Card Title</Card.Title>
                        <Card.Text>
                        Je suis un homme de 26 ans très dynamique et ambitieux, efficace et minutieux dans mon travail. Je suis curieux et j'aime les ambiance où les idées s'échangent facilement ce qui aide à mon développement personnel et au développement professionnel en général. Je crois en l'importance de la bonne communication et organisation sur le lieux de travail.
                .
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}
