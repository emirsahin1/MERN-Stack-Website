import styled from 'styled-components';
import {device} from "../../device-sizes"

export const LogoContainer = styled.div`
    font-family: 'Raleway', sans-serif;
    position: absolute;
    left: 2vw;
    margin-left:max(calc(5vw - 30px), 4px);
    margin-right:50px;
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;

    @media ${device.mobile}{

    position: relative;
    left: 0px;
    margin-left: 20px;
    }
`

export const LogoSvg = styled.svg`

    display: block;
    width: 40px;
    transition: all 0.15s ease-in;
    &:hover{
        transform:scale(1.3);
    }
`

export const LogoText = styled.text`

    fill:url(#text-gradient);
    font-size: 22px;
    transition: all 0.15s ease-in;

    ${LogoContainer}:hover &{
        font-size: 25px;
    }
`

export const LogoTextSVG = styled.svg`

margin-left:max(calc(10vw - 140px), 4px);
pointer-events:none;
`