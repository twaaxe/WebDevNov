import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import React from 'react';

export default function ProjectList() {
    const [state, setState] = useState({
        project1: false,
        project2: false,
        project3: false,
        project4: false,

    })

<<<<<<< HEAD
=======
    const endClick = () => {
        // event.preventDefault()
        const timer = setTimeout(() => {
            setState({ project1: false, project2: false, project3: false, project4: false })
        }, 5000)
    }

    // const mouseLeave = () => {
    //     // event.preventDefault()
    //     const timer = setTimeout(() => {
    //         setState({ project1: false, project2: false, project3: false, project4: false })
    //     }, 10000)
    // }

    const endClick2 = () => {
        // event.preventDefault()
        setState({ project1: false, project2: false, project3: false, project4: false })
    }
>>>>>>> 1fff4805c1bb2af0899891174ff445d379d20238


    return (
        <>
<<<<<<< HEAD
            <ListGroup variant="flush" className='p-0 m-0  '>
                <Link to="/project1" className={`text-decoration-none ${state.project1 ? 'text-light' : 'text-dark'}`}><ListGroup.Item className={state.project1 ? "active lh-lg" : "lh-lg"} onClick={() => setState({ project1: true, project2: false, project3: false, project4: false })}>Project1</ListGroup.Item></Link>
                <Link to="/project2" className={`text-decoration-none ${state.project2 ? 'text-light' : 'text-dark'}`}><ListGroup.Item className={state.project2 ? "active lh-lg" : "lh-lg"} onClick={() => setState({ project1: false, project2: true, project3: false, project4: false })}>Project2</ListGroup.Item></Link>
                <Link to="/project3" className={`text-decoration-none ${state.project3 ? 'text-light' : 'text-dark'}`}><ListGroup.Item className={state.project3 ? "active lh-lg" : "lh-lg"} onClick={() => setState({ project1: false, project2: false, project3: true, project4: false })}>Project3</ListGroup.Item></Link>
                <Link to="/project4" className={`text-decoration-none ${state.project4 ? 'text-light' : 'text-dark'}`}><ListGroup.Item className={state.project4 ? "active lh-lg" : "lh-lg"} onClick={() => setState({ project1: false, project2: false, project3: false, project4: true })}>Project4</ListGroup.Item></Link>

=======
            <ListGroup variant="flush" className='p-0 m-0 '>
                <ListGroup.Item className={state.project1 ? "active lh-lg" : "lh-lg"} onClick={() => setState({ project1: true, project2: false, project3: false, project4: false })}>Project 1</ListGroup.Item>
                <ListGroup.Item className={state.project2 ? "active lh-lg" : "lh-lg"} onClick={() => setState({ project1: false, project2: true, project3: false, project4: false })}>Project 2</ListGroup.Item>
                <ListGroup.Item className={state.project3 ? "active lh-lg" : "lh-lg"} onClick={() => setState({ project1: false, project2: false, project3: true, project4: false })}>Project 3</ListGroup.Item>
                <ListGroup.Item className={state.project4 ? "active lh-lg" : "lh-lg"} onClick={() => setState({ project1: false, project2: false, project3: false, project4: true })}>Project 4</ListGroup.Item>
                {endClick()}
>>>>>>> 1fff4805c1bb2af0899891174ff445d379d20238
            </ListGroup>
            
        </>
    )
}



