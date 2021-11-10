import Footer from "./Footer"
import Header from "./Header"

const Layout = ({ children }) => {
    return (
        <div>
            <div>
                <Header/>
                { children }
                <Footer />
            </div>
        </div>
    );
}

export default Layout;