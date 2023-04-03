import Container from 'react-bootstrap/Container';
import {Row,Col} from 'react-bootstrap';


function App() {
  return (
    
    <>
      <main>
        <Row className="row" id="webdesignRow">{/*1st row content = web design*/}
          <Col md={3} className=" text-end">
            <h1>Web Design</h1>
          </Col>
        </Row>

        <Container fluid>

        <Row className="justify-content-evenly">{/*2nd row content = main part*/}
          <Col md={3} className="text-end">
            
              <ul>
                <li>Project 1</li>
                <li>Project 2</li>
                <li>Project 3</li>
                <li>Project 4</li>
              </ul>
            </Col>
          <Col md={9} className="text-center" id="mainContent">
            <Container>
              <Row>{/*Project name */}
                <Row>
                  <Col md={4} className="text-start">
                    <h1>Project name</h1>
                    <a>go to website</a>
                  </Col>
                  <Col md={8} className="text-start">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum eaque officia sunt quasi voluptatum facere nobis illo ipsam blanditiis at quos, ducimus tenetur hic fuga adipisci ipsa soluta? Maiores, enim!</p>
                  </Col>
                  <Row>
                    <Col md={12}>
                      <img src="https://picsum.photos/200" alt="uneimagePrincpale" id="imgPrincipal"/>
                    </Col>
                  </Row>
                </Row>
              </Row>


              <Row className=' justify-content-evenly'>{/*More screenshot */}

                <Col md={2} className="text-center">
                  <img src="https://picsum.photos/id/237/200" alt="uneimage"/>
                </Col>
                <Col md={2} className="text-center">
                  <img src="https://picsum.photos/200" alt="uneimage"/> 
                </Col>
                <Col md={2} className="text-center">
                  <img src="https://picsum.photos/200" alt="uneimage"/>
                </Col>
                <Col md={2} className="text-center">
                  <img src="https://picsum.photos/seed/picsum/200" alt="uneimage"/>
                </Col>
                <Col md={2} className="text-center">
                  <img src="https://picsum.photos/200" alt="uneimage"/>
                </Col>

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
