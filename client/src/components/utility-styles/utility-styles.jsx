import styled, {css}  from "styled-components"
import {device} from "../../device-sizes"

/**Marker used to activate scroll events */
export const ScrollMarker = styled.div`
    width: 10px;
    height: 10px;
    transform: translatey(3vh);
    /* background-color: red; */

    @media ${device.mobile}{
        transform: translatey(-25vh);

    }
`

export const Divider = styled.div`
        background-color:#1d1d1d;
        width: 100%;
        height: ${props => props.height ? props.height : "30px"}; 
`
export const TransparentDivider = styled(Divider)`
    opacity:0;
`

/**FlexBox, takes in optional direction, horizontal, vertical and styles props */
export const FlexBox = styled.div`

    display:flex; 
    flex-direction: ${props => props.direction ? props.direction : "row"};
    justify-content: ${props => props.horizontal ? props.horizontal : "center"}; 
    align-items: ${props => props.vertical ? props.vertical : "center"};

    ${props => {return props.styles}};
`


export const AlertMessage = styled.div`
    position:absolute;
    width:85vw;
    min-width: 240px;
    max-width: 680px;
    max-height:47px;
    background-color:#b3000085;
    color:#ffffff;
    padding:10px;
    text-align:center;
    pointer-events: none;
    transform:${props => props.display ==="true" ? "translatey(68px)" : "translatey(40px)"};
    margin:0px;
    opacity:${props => props.display ==="true" ? 1 : 0};
    transition: opacity 0.5s ease-in, transform 0.3s ease-in, background-color 0.2s ease-in;

    ${props => {if(props.emailValid){return css`background-color:#8af47ca6`
    }}}
`

export const ErrorContainer = styled.div`

    margin-right:auto;
    margin-top:0px;
    width:100%;

`