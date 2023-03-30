import Layout from './component/Layout';
import { Container, Row, Col } from 'react-bootstrap';
import Post from './component/Post'

function App() {

  



  return (

    <Container>

      
      <Row className='rowMain'>
        <Col md={6} className=" text-danger text-center">
          <h1>Left one</h1>

          <Post title="post title" image="https://picsum.photos/200">
            Hello World This is an example post
          </Post>

        </Col>

        

        <Col md={6} className=" text-danger text-center">
          <h1>right one</h1>


          
        </Col>
      </Row>
      


    </Container>
    
  )
}

export default App;
