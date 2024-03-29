import styled from "styled-components";
import {device} from "../../device-sizes"
import { Link } from "react-router-dom";

/**Container for Link buttons. To be used with an inner element containing the button's text.*/
export const RoundButton = styled(Link)`

    cursor: pointer;
    text-decoration:none;
    background-color:#1D1D1D;
    border-color:#96548a;
    border-style:solid;
    border-width: 8px;
    border-radius: 90px;
    display:flex; 
    justify-content:center;
    align-items:center;
    width: 50vw;
    height: 80px;
    max-width: 340px;
    min-width: 120px;
    margin: 50px auto 65px;

    /* Transition for the glow animations.*/
    transition: box-shadow 0.25s ease-out, border-color 0.25s ease-out, background-color 0.25s ease-out;
    box-shadow: 0px 20px 30px rgba(0,0,0,0.4), 0px 20px 30px rgba(0,0,0,0.4);

    &:hover{
        border-color:#d1a9c9;
        background-color: #28405b;
        box-shadow: 10px 10px 30px #9ce7a65e;
    }

    @media ${device.mobile}{
        margin-top: 30px;
        margin-bottom: 50px;
    }
    
    /**Styling for the inner text */
    &>*{
    font-size: 30px;
    color: #ffffff;
    text-decoration:none;


        @media ${device.mobile}{
            font-size: max(20px, 4vw);
            }
    }`

/**Rectangle Button. To be used with an inner element containing the button's text. */
export const RectangleButton = styled(RoundButton)`
    border-radius: 0px;
    border-style: none;
    box-shadow: none;
    margin-bottom:10px;
    margin-top: 50px;
    background-color:#000000b8;
    
    /**Styling for the inner text */
    &>*{
    color: #c0ffb8;
    text-decoration:none;
    }

    &:hover{
        background-color: #c0ab8c;       
    }

    @media ${device.mobile}{
        margin-bottom:10px;
        margin-top: 40px;
        ${props => {return props.styles}}
    }

    ${props => {return props.styles}}
`

export const SubmitButton = styled(RectangleButton)`

    min-width:120px;
    width:100%;
    height:50px;
    max-width:100%;
    margin:0px;
    font-size:24px;
    color: #c0ffb8;

    @media ${device.mobile}{
        margin:0px;
    }
`

