import React from "react";
import {FooterContainer, FooterLink, FooterPlaceHolder} from "./footer-style"


export default class Footer extends React.Component {

    render(){
        return(
            <div>
            <FooterContainer>
                <FooterLink>Museum of Lighting &#174;</FooterLink>
            </FooterContainer>
            <FooterPlaceHolder></FooterPlaceHolder>
            </div>
        );
    }
}