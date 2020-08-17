import styled, { css, keyframes } from 'styled-components';
import {device} from "../../device-sizes"

const navLinkFadeForward = keyframes`
    from{
            opacity: 0;
            transform: translateX(50px); }
        to{
            opacity: 1;
            transform: translateX(0px); } 
`

const navLinkFadeBack = keyframes`
    from{
            opacity: 1;
            transform: translateX(0px); }
        to{
            opacity: 0;
            transform: translateX(50px); }
    `
export const NavPlaceHolder = styled.div`

    height:60px;
    width:100%;
`
export const NavBar = styled.nav`
    font-family: 'Raleway', sans-serif;
    --circle-color: #aa519c;
    --hover-color: #aa519c;
    display: flex;
    position:fixed;
    top:0;
    width:100%;
    z-index:12;
    align-items: center;
    justify-content: center;
    min-height: 60px;
    background-color: rgb(29, 29, 29);

    @media ${device.mobile}{
        border-radius: 0;
        justify-content: space-between;
    }
`

export const NavLinksContainer = styled.ul`
    display: flex;
    width: 45vw;
    /*This margin is used to center the nav perfectly*/
    margin-left: 36px;
    justify-content: space-evenly;
    align-items: center;

    & a{
        display: block;
        text-decoration: none;
        color: white;
        padding-top: 20.5px;
        padding-bottom: 20.5px;
    } 

    ${props => {
        if(props.isNavAnimActive){
            return css `transition: transform 0.5s ease-in;`}
        }
    }

    @media ${device.mobile}{
        position: absolute;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        border-bottom-left-radius: 60px;
        right: 0px;
        top: 60px;
        height: 30vh;
        min-height: 240px;
        min-width: 170px;
        transform: translateX(100%);
        background-color: rgb(51, 51, 51);
        z-index: 10;

        & a{
            display: inline;
        }

        ${props => {
        if(props.isMobileNavActive){
            return css `transform: translateX(0%);`}

        if(props.isNavAnimActive){
            return css `transition: transform 0.5s ease-in;`}
            }
        }
    }
    `

export const NavLink = styled.li`
    list-style-type: none;
    padding: 0px 6px;
    margin: 0 10px;
    transition: border-color 0.15s ease-in, background-color 0.15s ease-in;

    &:hover{
        background-color: var(--hover-color);
        border-color: var(--hover-color);
    }

    @media ${device.mobile}{
        border-radius: 60px;
        border-width: 13px;
        border-style: solid;
        padding: 0px 10px;
        margin-top: 15px;
        margin-right: 0px;
        margin-bottom: 10px;
        background-color: rgb(29, 29, 29);
        border-color: rgb(29, 29, 29);
        opacity: 0;

        ${props => {
        if (props.isLinkAnimActive) {            
            return css`animation: ${navLinkFadeBack} 0.5s ease forwards ${-props.index / 7 + 0.3}s; opacity: 1;`}
        else {
            return css`animation: ${navLinkFadeForward} 0.5s ease forwards ${props.index / 7 + 0.3}s;`}
        }} 
    }
`


export const NavLine = styled.div`
    width: 80%;
    border-style: solid;
    border-width: thin;
    border-radius: 100px;
    border-color: var(--circle-color);
`

export const Circle = styled.div`
    position: relative;
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background-color: var(--circle-color);
    transition: all 0.15s ease-in;

    ${props => {if(props.isHovering){
        return css `
        background-color: var(--hover-color);
        transform: scale(1.5);
        `}
        }
    }

    @media ${device.mobile}{
        display: none;
    }`


export const Burger = styled.div`
    display: none;
    cursor: pointer;

    & div{
    height: 3px;
    width: 27px;
    margin-top: 3px;
    background-image: linear-gradient(90deg, rgba(111,114,255,1) 0%, rgba(255,188,231,1) 50%, rgba(0,212,255,1) 100%);
    background-size: 50px;
    transition: all 0.3s ease-in;
    }
    
    @media ${device.mobile}{
        display: block;
        margin-right: 40px;

        ${props => {if(props.isMobileNavActive){        
        return css ` 
        ${Line1}{
            transform: rotate(-35deg) translate(-6px,3px); 
        }
        ${Line2}{
            opacity: 0;
        }
        ${Line3}{
            transform: rotate(35deg) translate(-6px,-3px); 
        }
        `}}}
    }`

export const Line1 = styled.div``
export const Line2 = styled.div``
export const Line3 = styled.div``
