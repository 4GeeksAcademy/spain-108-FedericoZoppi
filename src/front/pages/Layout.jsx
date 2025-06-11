// layout

import { Outlet } from "react-router-dom/dist"
import ScrollToTop from "../components/ScrollToTop"
import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"
import { Cards } from "./Cards.jsx"
import useGlobalReducer from "../hooks/useGlobalReducer.jsx"
import { useEffect } from "react"
import { getContacts } from "../services/contact.js"


// Base component that maintains the navbar and footer throughout the page and the scroll to top functionality.
export const Layout = () => {
    const {dispatch}= useGlobalReducer()

    
      useEffect(() => {
        const get = async () => {
    
          const contacts = await getContacts()
          dispatch({
            type: "getContacts",
            payload: contacts
          })
    
        }
    
        get()
    
    
      }, [])
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