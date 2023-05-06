import React from 'react'
import { Container, Row, Col, Button, Card, Image } from 'react-bootstrap';

export default function Competences() {
    return (
        <>
            <Row className=' m-0 ' id="competences" >
                <Col className='mx-auto my-2 text-start' id="competencesGraph">
                    mes skills, les differents langages que je connaise(pas l experience car on en parlera apres)
                    graphique visuel
                </Col>
                <Col xs lg="2" className='vertCont '></Col>

                <Col className='mx-0 my-2 text-end' id="competencesText">
                    mes skills, les differents langages que je connaise(pas l experience car on en parlera apres)
                    note ecrite
                </Col>
            </Row>
        </>
    )
}
