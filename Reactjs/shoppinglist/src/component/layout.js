//RE USABLE LAYOUT COMPONENT
import Footer from './footer';
import { Container } from 'react-bootstrap';


// give all the element in this layout as a child.
// it will render des component we gave

export default function Layout({ children }) {
    return (

        <>
            <Container className='my-4 py-3'>
                {children}
            </Container>
            <Footer />
        </>
    )
}


