import styled, { css } from "styled-components"
import {device} from "../../device-sizes"

/**Text container, used with a p tag and h header tag containing text inside. */
export const TextContainer = styled.div`

    margin: 50px auto 10px auto;
    width:60%;
    min-width: 200px;
    height: auto;
    background-color:#1d1d1d;
    text-align:center;
    border-radius: 30px;
    

    & p{
        color: #ffffff;
        padding: calc(2% + 5px) 4%;
        font-family: 'Raleway', sans-serif;
        font-size: 25px;
        line-height:30px;
    }
    
    /* Style for the headers */
    &>*{
        color: #ffffff;
        text-shadow: 0 0 20px black;
        font-weight:normal;
        font-size:34px;
        padding: calc(2% + 5px) 4% 0px;
        @media ${device.mobile}{
        /* padding: 5%; */
        font-size: min(10vw, 26px);
        } 
    }
    & a{
        text-decoration:none;
    }

    & span{
        color: #c0ffb8;
    }
    /**If animated, the initial styles are set. */
    ${props => {
        if (props.animated) {
            return css`
            opacity: 0;`
        }
    }}

    ${props => {
        if (props.beginAnimation) {
            return css`
            transition: opacity 0.7s ease-out;
            opacity: 100;
    ` }
    }}

    @media ${device.mobile}{
        & p{
        font-size:${props => props.mobileFontSize ? `min(max(${props.mobileFontSize}, 5vw), 25px)` : "min(5vw, 20px)"};
        padding: 5%;
        }
        border-radius: 20px;
        width:80%;
        margin-top: 10px;
        margin-bottom: 10px;
    }
`




/**Light version of the textContainer */
export const LightTextContainer = styled(TextContainer)`

    background-color:#00000082;
    & p{
        color: #ffffff;
        text-shadow: 0 0 20px black;
    }

    /* Style for the headers */
    &>*{
        color: #ffffff;
        text-shadow: 0 0 20px black;
        font-weight:normal;
        font-size:34px;
        padding: calc(2% + 5px) 4% 0px;

        @media ${device.mobile}{
        /* padding: 5%; */
        font-size: min(10vw, 26px);
        } 
    }

    & span{
        color: #f2c231;
    }
    `
    


export const DownloadText = styled(LightTextContainer)`

    margin-top:0;
    min-width:120px;
    border-radius: 0px;
    border-style: none;
    margin-bottom: 70px;
    width: 50vw;
    max-width: 340px;
    display:flex;
    align-items:center;
    justify-content:center;

    @media ${device.mobile}{
        border-radius: 0px;
        border-style: none;
        margin-top:0px;
        margin-bottom: 40px;
        width: 50vw;
        
        & p{
            font-size: max(20px,4vw);
        }
        ${props => {return props.styles}};
    }

    ${props => {return props.styles}};


`

