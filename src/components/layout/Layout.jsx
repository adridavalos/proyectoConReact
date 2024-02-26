import { Outlet } from "react-router-dom"
import { NavBarContainer } from "./navBar/NavBarContainer"
import { Footer } from "./Footer"


export const Layout = () => {
    return (
        <>
            <NavBarContainer />
            <Outlet />
            <Footer />
        </>
    )
}
