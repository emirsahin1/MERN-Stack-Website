import React from "react";
import Navlinks from "./nav-links.jsx"
import NavLogo from "./nav-logo.jsx"
import NewNavLogo from "./nav-logo-new"
import {NavContaier, NavPlaceHolder} from "./nav-bar-style"

/**
 * Navigation Bar
 */

export default class Navbar extends React.Component {

    render() {
        return (
            <div>
            <NavContaier>
                <NewNavLogo/>
                <Navlinks />
            </NavContaier>
            {/* The place holder is the same size as the navbar. It is used to take the space of the fixed navbar */}
            <NavPlaceHolder></NavPlaceHolder>
            </div>
        );
    }
}
//TODO CLEAN UP
