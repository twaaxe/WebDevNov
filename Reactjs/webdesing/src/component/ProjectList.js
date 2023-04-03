import { ListGroup } from 'react-bootstrap';
import { link } from 'react-router-dom';
import { useState } from 'react';
import React from 'react';

export default function ProjectList() {
    const [state, setState] = useState({
        project1: false,
        project2: false,
        project3: false,
        project4: false,

    })

    const endClick = () => {
        // event.preventDefault()
        const timer = setTimeout(() => {
            setState({ project1: false, project2: false, project3: false, project4: false })
        }, 5000)
    }

    const endClick2 = () => {
        // event.preventDefault()
        const timer = setTimeout(() => {
            setState({ project1: false, project2: false, project3: false, project4: false })
        }, 10000)
    }

    return (
        <>
            <ListGroup variant="flush" className='p-0 m-0  ' onMouseLeave={() => endClick2()}>
                <ListGroup.Item className={state.project1 ? "active lh-lg" : "lh-lg"} onClick={() => setState({ project1: true, project2: false, project3: false, project4: false })}>Project 1</ListGroup.Item>
                <ListGroup.Item className={state.project2 ? "active lh-lg" : "lh-lg"} onClick={() => setState({ project1: false, project2: true, project3: false, project4: false })}>Project 2</ListGroup.Item>
                <ListGroup.Item className={state.project3 ? "active lh-lg" : "lh-lg"} onClick={() => setState({ project1: false, project2: false, project3: true, project4: false })}>Project 3</ListGroup.Item>
                <ListGroup.Item className={state.project4 ? "active lh-lg" : "lh-lg"} onClick={() => setState({ project1: false, project2: false, project3: false, project4: true })}>Project 4</ListGroup.Item>
                {endClick()}
            </ListGroup>
        </>
    )
}



