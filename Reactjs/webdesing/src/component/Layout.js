import Header from "./Header"
import { Row, Col, Nav, Navbar, Container } from 'react-bootstrap';

export default function Layout({ children }) {
    return (


        <>
            <Header />
            <Container fluid className='p-0'>
            <Row className='m-0'>
                {children}
            </Row>
            </Container>

        </>
    )

}