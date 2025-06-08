import { Outlet } from "react-router-dom/dist"
import ScrollToTop from "../components/ScrollToTop"
import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"
import { Cards } from "./Cards.jsx"


// Base component that maintains the navbar and footer throughout the page and the scroll to top functionality.
export const Layout = () => {
    return (
        <ScrollToTop className="scrollToTop">
            <div className="containerLayout">
                <Navbar />
                {/* <div className="containerCards">
                    <Cards />
                </div> */}
                
                <Outlet />
            </div>
            <Footer />
        </ScrollToTop>
    )

}