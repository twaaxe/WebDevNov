import React from 'react'
import { Container, Row, Col, Button, Card } from 'react-bootstrap';


export default function Projects() {
    return (
        <>
            <Container className=' text-center  '>
                <Row className='justify-content-around mx-auto my-2 py-2 align-item-center '>
                    <Col sm={12} md={4}>
                        <Card style={{ width: '100%'}}>
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

                    <Col sm={12} md={4}><Card style={{ width: '100%' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Amazon Clone</Card.Title>
                            <Card.Text className=' my-4  '>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            
                        </Card.Body>
                    </Card>
                    </Col>

                    <Col sm={12} md={4}><Card style={{ width: '100%' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>WebDev Challenge</Card.Title>
                            <Card.Text className=' my-4  '>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            
                        </Card.Body>
                    </Card>
                    </Col>

                    <Col sm={12} md={4}>Project1</Col>
                    <Col sm={12} md={4}>Project1</Col>
                    <Col sm={12} md={4}>Project1</Col>
                </Row>
            </Container>
        </>


    )
}
