import { ListGroup } from 'react-bootstrap';
export default function ProjectList() {
    return (
        <ListGroup variant="flush" className='p-0 m-0  '>
            <ListGroup.Item className='lh-lg'>Project 1</ListGroup.Item>
            <ListGroup.Item className='lh-lg'>Project 2</ListGroup.Item>
            <ListGroup.Item className='lh-lg'>Project 3</ListGroup.Item>
            <ListGroup.Item className='lh-lg'>Project 4</ListGroup.Item>
        </ListGroup>
    )
}