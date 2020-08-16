import styled, { css } from "styled-components"

export const TextContainer = styled.div`

    margin: 50px auto 10px auto;
    width:60%;
    height: auto;
    background-color:#1d1d1d;
    text-align:center;
    border-radius: 30px;

    & p{
        color: #ffffff;
        padding: calc(2% + 5px) 4%;
        font-family: 'Raleway', sans-serif;
        font-size: 25px;
    }

    ${props => {
        console.log(props.side);

        if (props.side === "left") {
            return css`
            margin-right: 3vw;
            `}
        else if (props.side === "right") return css`margin-left: 3vw;`
    }
    }

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

    ${props => {
        if (props.light) {
            return css`
            background-color:#00000082;
            & p{
                color: #ffffff;
                text-shadow: 0 0 20px black;
            }
            `
        }
    }}

    

    @media screen and (max-width: 768px){
        & p{
        font-size:${props => props.mobileFontSize ? `min(max(${props.mobileFontSize}, 5vw), 25px)` : "min(5vw, 20px)"};
        padding: 5%;
        }
    
    border-radius: 20px;
    }
`

export const LightTextContainer = styled(TextContainer)`

    background-color:#00000082;

    & p{
        color: #ffffff;
        text-shadow: 0 0 20px black;
    }`


