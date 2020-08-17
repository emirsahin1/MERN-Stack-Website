import styled, {css} from "styled-components";
import {device} from "../../device-sizes"
import { Link } from "react-router-dom";

export const ButtonContainer = styled(Link)`

    background-color:#1D1D1D;
    width: 50vw;
    text-decoration:none;
    max-width: 340px;
    min-width: 120px;
    height: 80px;
    margin: 50px auto 65px;
    display:flex; 
    align-items:center;
    justify-content:center;
    border-color:#3f8b57;
    border-style:solid;
    border-width: 8px;
    border-radius: 90px;
    transition: opacity 0.3s ease-out, background-color 0.2s ease-out, box-shadow 0.2s ease-out, border-color 0.2s ease-out ;
    box-shadow: 0px 20px 30px rgba(0,0,0,0.4), 0px 20px 30px rgba(0,0,0,0.4);
    cursor: pointer;

    &:hover{
        border-color:#55c66f;
        background-color: #28405b;
        box-shadow: 0px 20px 60px #9ce7a65e, 0px 20px 60px #9ce7a65e;
    }

    @media ${device.mobile}{
        margin-top: 30px;
        margin-bottom: 50px;
    }
    
    &>*{
    font-size: 30px;
    color: #ffffff;
    text-decoration:none;


    @media ${device.mobile}{

    font-size: max(20px, 4vw);
    }
    }
`