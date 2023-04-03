
import Card from 'react-bootstrap/Card';

export default function MyOwnCard({link}){

    return(

        <Card border="secondary" style={{ width: 'auto' }}>
        <Card.Header>Header</Card.Header>
        <Card.Body>
          <Card.Title>Secondary Card Title</Card.Title>
          <Card.Text>
            <img src={link} />
          </Card.Text>
        </Card.Body>
      </Card>

    )
}