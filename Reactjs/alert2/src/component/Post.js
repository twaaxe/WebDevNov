import { Card } from "react-bootstrap";

export default function Post({children, title, image}){


    return(
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title> {title} </Card.Title>
                <Card.Text>
                
                    {children}
                
                </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
        </Card>
    )
} 


