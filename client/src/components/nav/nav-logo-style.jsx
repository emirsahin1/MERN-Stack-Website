import styled from 'styled-components';
import {device} from "../../device-sizes"

export const LogoContainer = styled.div`
    font-family: 'Raleway', sans-serif;
    position: absolute;
    left: 20px;
    margin-left: 8%;

    @media ${device.mobile}{

    position: relative;
    left: 0px;
    margin-left: 20px;
    }
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
`