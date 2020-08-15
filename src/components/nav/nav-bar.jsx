import React from "react";
import Navlinks from "./nav-links.jsx"
import Logo from "./logo.jsx"
import {NavBar, NavPlaceHolder} from "./nav-bar-style"
// import "./nav-bar.css"

/**
 * Navigation Bar
 */

class Navbar extends React.Component {

    render() {
        return (
            <div>
            <NavBar>
                <Logo/>
                <Navlinks />
            </NavBar>
            <NavPlaceHolder></NavPlaceHolder>
            </div>
        );
    }
}

export default Navbar;