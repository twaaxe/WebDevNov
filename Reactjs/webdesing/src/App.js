import { Row, Col, Container, ListGroup } from 'react-bootstrap';
import Card from './component/Card'
import MyOwnCard from './component/Card';
import ProjectList from './component/ProjectList';

function App() {
  return (

    <>
      <main>
        <Row className=" bg-secondary m-0 p-0" id="webdesignRow">{/*1st row content = web design*/}
          <Col md={3} className=" text-end ">
            <h1>Web Design</h1>
          </Col>
        </Row>

        <Container fluid className='p-0'>

          <Row className='m-0'>{/*2nd row content = main part*/}
            <Col md={3} className="text-end p-0 m-0" id="thelistGroup">

              <ProjectList />

            </Col>

            <Col md={9} className="text-center p-0 " id="mainContent">

              <Container>
                <Row>{/*Project name */}
                  <Row>
                    <Col md={4} className="text-start my-2 px-4">
                      <h1 >Project name</h1>
                      <a href="google.com" target="_blank">go to website</a>
                    </Col>
                    <Col md={8} className="text-start py-3 my-2 mx-auto">
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum eaque officia sunt quasi voluptatum facere nobis illo ipsam blanditiis at quos, ducimus tenetur hic fuga adipisci ipsa soluta? Maiores, enim!</p>
                    </Col>
                    <Row>
                      <Col md={12} className="my-auto">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9d1pgNo-VKD7PPw2swSqX9R0G7jqB6dA4oQ&usqp=CAU" alt="uneimagePrincpale" id="imgPrincipal" />
                      </Col>
                    </Row>
                  </Row>
                </Row>


                <h2 className='text-start my-2 px-4'>More screenshot of this Project</h2>

                <Row className=' my-4 py-2'>{/*More screenshot */}

                  {/* <Col md={2} className="text-center">
                    <img src="https://picsum.photos/id/237/200" className="img-thumbnail" />
                  </Col> */}
                  <Col md={3} className="text-center">
                    <img src="https://picsum.photos/id/237/200" className="img-thumbnail" />
                  </Col>
                  <Col md={3} className="text-center">
                    <img src="https://picsum.photos/id/237/200" className="img-thumbnail" />
                  </Col>
                  <Col md={3} className="text-center">
                    <img src="https://picsum.photos/id/237/200" className="img-thumbnail" />
                  </Col>
                  <Col md={3} className="text-center">
                    <img src="https://picsum.photos/id/237/200" className="img-thumbnail" />
                  </Col>

                  {/* <Col md={2} className="text-center ">
                  <MyOwnCard link="https://picsum.photos/id/237/200" />
                </Col>
                <Col md={2} className="text-center">
                <MyOwnCard link="https://picsum.photos/id/237/200" /> 
                </Col>
                <Col md={2} className="text-center">
                <MyOwnCard link="https://picsum.photos/id/237/200" />
                </Col>
                <Col md={2} className="text-center">
                <MyOwnCard link="https://picsum.photos/id/237/200" />
                </Col>
                <Col md={2} className="text-center">
                <MyOwnCard link="https://picsum.photos/id/237/200" />
                </Col>  */}

                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
}

export default App;
