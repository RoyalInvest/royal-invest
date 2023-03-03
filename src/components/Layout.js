import Nav from './Nav/Nav.jsx';
import Footer from './Footer/Footer.jsx';

const Layout = ({ children }) => (
    <>  
        <Nav />
        {children}
        <Footer />
    </>
)

export default Layout;