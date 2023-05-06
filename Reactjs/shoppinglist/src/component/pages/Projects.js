import React from 'react'
import { Container, Row, Col, Card, Image } from 'react-bootstrap';


export default function Projects() {
    return (
        <>

            <Container className=' text-center  '>
                <Row className=' mx-auto  ProjectRow'>
                    <Col xs={6} md={4} className="my-auto">
                        {/* <Image src="holder.js/171x180" rounded /> */}
                        <Card style={{/* width: '100%'*/ }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title className='  '>Music App</Card.Title>
                                <Card.Text className=' my-4  '>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>

                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xs={6} md={4} className="my-auto">
                        {/* <Image src="holder.js/171x180" rounded /> */}
                        <Card style={{/* width: '100%'*/ }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title className='  '>Amazon Clone</Card.Title>
                                <Card.Text className=' my-4  '>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>

                            </Card.Body>
                        </Card>
                    </Col>


                    <Col xs={6} md={4} className="my-auto">
                        {/* <Image src="holder.js/171x180" rounded /> */}
                        <Card style={{/* width: '100%'*/ }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title className='  '>Web Dev Challenge</Card.Title>
                                <Card.Text className=' my-4  '>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>

                            </Card.Body>
                        </Card>
                    </Col>

                    {/* <Col xs={6} md={4} className="my-auto">
                        <Image src="holder.js/171x180" rounded />
                    </Col> */}

                </Row>
            </Container >
        </>


    )
}
