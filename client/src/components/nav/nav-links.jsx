import React from "react";
import {Link} from "react-router-dom";
import { NavLinksContainer, NavLink, NavLine, Circle, Burger, Line1, Line2, Line3 } from './nav-bar-style'

/**
 * Emir Sahin
 * 7/21/2020
 */
class Navlinks extends React.Component {

    constructor() {
        super();
        this.state = {
            isMobileNavActive: false,
            isNavAnimActive: false,
            isLinkAnimActive: false,
            isBurgerAnimActive: false,
            l0Hovering: false,
            l1Hovering: false,
            l2Hovering: false
        }
    }

    render() {

        return (
                <div>
                    <NavLinksContainer isMobileNavActive={this.state.isMobileNavActive} isNavAnimActive={this.state.isNavAnimActive}>

                        {/* <NavLink isLinkAnimActive={this.state.isLinkAnimActive} index="1">
                            <Link to="/Download" onClick={this.burgerClick.bind(this)}>Education</Link>
                        </NavLink> */}
                        <NavLink to="/Download" onClick={this.burgerClick.bind(this)}>
                        <li isLinkAnimActive={this.state.isLinkAnimActive} index="1">Education</li>
                        </NavLink>

                        <NavLine className="nav-line"></NavLine>
                        <div><Circle isHovering={this.state.l0Hovering}></Circle></div>

                        <NavLink to="/Download" onClick={this.burgerClick.bind(this)}>
                        <li isLinkAnimActive={this.state.isLinkAnimActive} index="1">Design</li>
                        </NavLink>

                        <NavLine className="nav-line"></NavLine>
                        <div><Circle isHovering={this.state.l0Hovering}></Circle></div>

                        <NavLink to="/Download" onClick={this.burgerClick.bind(this)}>
                        <li isLinkAnimActive={this.state.isLinkAnimActive} index="1">Therapy</li>
                        </NavLink>

                        <NavLine className="nav-line"></NavLine>
                        <div><Circle isHovering={this.state.l0Hovering}></Circle></div>


                        <NavLink to="/Download" onClick={this.burgerClick.bind(this)} styles="padding-right:10px; padding-left:10px;">
                        <li isLinkAnimActive={this.state.isLinkAnimActive} index="1">Art</li>
                        </NavLink>

                        <NavLine className="nav-line"></NavLine>
                        <div><Circle isHovering={this.state.l0Hovering}></Circle></div>


                        <NavLink to="/Download" onClick={this.burgerClick.bind(this)}>
                        <li isLinkAnimActive={this.state.isLinkAnimActive} index="1">Technology</li>
                        </NavLink>

                    </NavLinksContainer>

                    <Burger isMobileNavActive={this.state.isMobileNavActive} onClick={this.burgerClick.bind(this)}>
                        <Line1></Line1>
                        <Line2></Line2>
                        <Line3></Line3>
                    </Burger>
                </div>
        );
    }

    componentDidMount() {
        window.addEventListener('resize', () => {
            this.setState(prevState => ({ isNavAnimActive: false, isMobileNavActive: false, isLinkAnimActive: false,
                isBurgerAnimActive: !prevState.isBurgerAnimActive  }),)
        }
        )
    }

    /**
     * Event handler for the burger click. Toggles the mobile nav animations. 
     */
    burgerClick(isNavAnimActive) {
        this.setState(prevState => ({
            isMobileNavActive: !prevState.isMobileNavActive,
            isNavAnimActive: true,
            isLinkAnimActive: !prevState.isLinkAnimActive,
            isBurgerAnimActive: !prevState.isBurgerAnimActive
        })
        )
    }

    /**
     * Returns an animation style for the list items. 
     * @param index: index of the list item, used for delay calculation. 
     */
    animateList(index) {

        if (this.state.isLinkAnimActive) {
            return { animation: `navLinkFadeBack 0.5s ease forwards ${(-index / 7) + 0.3}s`, opacity: "1" };
        }
        else {
            return { animation: `navLinkFadeForward 0.5s ease forwards ${index / 7 + 0.3}s` };
        }
    }
}
export default Navlinks;

