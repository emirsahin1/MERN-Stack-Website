import styled, { css } from 'styled-components';

export const LogoContainer = styled.div`
    font-family: 'Raleway', sans-serif;
    position: absolute;
    left: 20px;
    margin-left: 8%;

    @media screen and (max-width: 768px){

    position: relative;
    left: 0px;
    margin-left: 20px;
    }

    /* ${props => {if (props.context === "SlideShow") {
    return css`
    left:calc(50% - 100px);
    margin:0;

    ${LogoSvg}{
    width:200px;
    height:200px;
    }
    ${LogoText}{
    font-size:50px;
    text-shadow: 0px 0px 40px black,
                 2px 2px 50px black,
                 -2px -2px 50px black;
    }`}}} */
`

export const LogoSvg = styled.svg`

    display: block;
    width: 100px;
    height: 50px;
`

export const LogoText = styled.text`

    fill:url(#text-gradient);
    font-size: 22px;
    transition: all 0.15s ease-in;

    ${LogoContainer}:hover &{
        font-size: 25px;
    }

    /* ${props => {if (props.context === "NavBar") {
    return css`
    ${LogoContainer}:hover &{
        font-size: 25px;
    }
    `}}} */
`