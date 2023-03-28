//RE USABLE LAYOUT COMPONENT


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




