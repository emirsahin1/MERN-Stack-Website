import styled from 'styled-components';

export const LogoContainer = styled.div`

    position: absolute;
    left: 50%;
    @media screen and (max-width: 768px){

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