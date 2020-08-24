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
    width: 400px;
    height: 400px;
    opacity:0.23;

    @media ${device.mobile}{
        width: 300px;
         height: 300px;
        }

    
`

export const LogoText = styled.text`

    fill:url(#text-gradient);
    font-size: 170px;
    transition: all 0.15s ease-in;

    @media ${device.mobile}{
        font-size:120px;
    
}
`