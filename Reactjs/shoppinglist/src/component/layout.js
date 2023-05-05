//RE USABLE LAYOUT COMPONENT
import Footer from './footer';
import Header from './Header';

// give all the element in this layout as a child.
// it will render des component we gave

export default function Layout({children}) {
    return (
        
        <>
            <Header/>
            {children}
            <Footer/>
        </>
    )
}


