import React from "react";
import {FooterContainer, FooterLink} from "./footer-style"


export default class Footer extends React.Component {

    render(){
        return(
            <FooterContainer>
                <FooterLink>Museum of Lighting &#174;</FooterLink>
            </FooterContainer>
        );
    }
}