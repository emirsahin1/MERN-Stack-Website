import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
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
            isLinkAnimActive: true,
            isBurgerAnimActive: false,
            l0Hovering: false,
            l1Hovering: false,
            l2Hovering: false
        }
        this.navToggles = this.makeToggleClasses("nav-active", "nav-animation");
        this.glowToggle = this.makeToggleClasses("circle-glow");
        this.burgerToggles = this.makeToggleClasses("toggle");
        this.circleGlow.bind(this);
    }

    render() {

        return (
                <div>
                    <NavLinksContainer isMobileNavActive={this.state.isMobileNavActive} isNavAnimActive={this.state.isNavAnimActive}>
                        <NavLink isLinkAnimActive={this.state.isLinkAnimActive} index="0" onMouseEnter={() => this.circleGlow("l0Hovering", true)}
                            onMouseLeave={() => this.circleGlow("l0Hovering", false)}>
                            <Link to="/">Home</Link>
                        </NavLink>

                        <div><Circle isHovering={this.state.l0Hovering}></Circle></div>
                        <NavLine className="nav-line"></NavLine>
                        <div><Circle isHovering={this.state.l1Hovering}></Circle></div>

                        <NavLink isLinkAnimActive={this.state.isLinkAnimActive} index="1" onMouseEnter={() => this.circleGlow("l1Hovering", true)}
                            onMouseLeave={() => this.circleGlow("l1Hovering", false)}>
                            <Link to="/Download">Download</Link>
                        </NavLink>

                        <div><Circle isHovering={this.state.l1Hovering}></Circle></div>
                        <NavLine className="nav-line"></NavLine>
                        <div><Circle isHovering={this.state.l2Hovering}></Circle></div>

                        <NavLink isLinkAnimActive={this.state.isLinkAnimActive} index="2" onMouseEnter={() => this.circleGlow("l2Hovering", true)}
                            onMouseLeave={() => this.circleGlow("l2Hovering", false)}>
                            <Link to="/Information">Information</Link>
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
            this.setState(prevState => ({ isNavAnimActive: false }),)
        }
        )
    }

    /**  If the paramater toggles are true in the inner function, returns the added strings inside toggleClasses.
     * @param toggleClasses : The strings or classes that need to be toggled.
     * @param toggles : Boolean value resposnsible for the toggling. 
    */
    makeToggleClasses(...toggleClasses) {
        return (...toggles) => {
            return toggleClasses.map((c, i) => toggles[i] ? ` ${c}` : '').join('');
        }
    }

    /**
     * Event handler for the burger click. Toggles the mobile nav animations. 
     */
    burgerClick() {
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

    /**
     * 
     * @param {string} hoverState : The string name of the elements state.
     * @param {boolean} value : Boolean value resposnsible for the toggling.
     */
    circleGlow(hoverState, value) {
        this.setState(prevState => ({ [hoverState]: value }))
    }

}
export default Navlinks;

