import styled, { css } from "styled-components"
import {device} from "../../device-sizes"

/**Text container, used with a p tag and optional h header tag containing text inside. */
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
        padding: calc(2% + 3px);
        font-family: 'Raleway', sans-serif;
        font-size: 22px;
        line-height:50px;
        text-align: ${props => props.side ? props.side : "center"}
    }
    
    /* Style for the headers in text */
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

    /*Highlighted text*/
    & span{
        color: #c0ffb8;
    }

    @media ${device.mobile}{
        width:80%;
     
        & p{
            font-size:${props => props.mobileFontSize ? `min(max(${props.mobileFontSize}, 5vw), 25px)` : "min(5vw, 20px)"};
            padding: 5%;
            line-height:40px;
        }
        ${props => {return props.styles}}; 
    }
    @media ${device.tablet}{
        & p{
            font-size:${props => props.tabletFontSize ? `min(max(${props.tabletFontSize}, 5vw), 25px)` : "min(5vw, 18px)"};
            padding: 5%;
            line-height:40px;
        }
        ${props => {return props.styles}}; 
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

    ${props => {return props.styles}};
`

/**Light version of the textContainer, used with a p tag and optional h header tag containing text inside.  */
export const LightTextContainer = styled(TextContainer)`

    background-color:#00000024;
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
            font-size: min(10vw, 26px);
        } 
    }
    /* Style for the hightlighted text */
    & span{
        color: #f2c231;
    }
    `

/**Transparent version of the textContainer, used with a p tag and optional h header tag containing text inside.  */
export const TransparentTextContainer = styled(TextContainer)`

    background-color:#00000030;
    border-radius: 0;

    & p{
        color: #ffffff;
        text-shadow: 0px 0px 15px black;
        box-shadow: 0px 0px 90px 5px #ffffff3b;
    }

`

//Specific Text Implementations
//////////////////////////////////////////////////////////////////////////////////////////////////
/** Text for the download, used with a p tag and optional h header tag containing text inside. */
export const DownloadText = styled(LightTextContainer)`

    margin-top:0;
    min-width:120px;
    border-radius: 0px;
    border-style: none;
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
        width:50vw;
        & p{
            font-size: max(20px,4vw);
        }
        ${props => {return props.styles}};
    }
    ${props => {return props.styles}};
`

export const EmailText = styled(LightTextContainer)`
    margin:0;
    width:100%;
    @media ${device.mobile}{
        width:100%;
        & p{
            font-size: max(20px,4vw);
        }
    }
`