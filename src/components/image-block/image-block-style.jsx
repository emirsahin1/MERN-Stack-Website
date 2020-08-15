import styled, { css } from "styled-components"


export const ImageContainer = styled.div`
    float:right;
    width: 40vw;
    height: 40vw;
    /* min-width: 200px; */
    /* min-height: 200px; */
    max-height: 500px;
    max-width: 500px;
    right:0px;
    transform: translateX(500px);
    background-color:red;
    overflow: hidden;
    margin: 50px 6%;
    box-shadow: 30px 20px 50px rgba(0,0,0,0.4);
    transition: transform 0.85s ease, opacity 1.7s ease-out;
    opacity: 0;
    flex-shrink:0;

    ${props => {
        if (props.animateImage) {
            return css`
        transform: translateX(0px);
        opacity: 100;
        `
        }
    }
    }
`


export const BlockImage = styled.img`

    max-width:auto;
    max-height:100%;
    
`
export const Container = styled.div`
    display: flex;
    width: 80%;
    align-items: center;
    flex-direction:${props => props.side === "left" ? "row" : "row-reverse"}; 
    margin-top: 50px; 
    margin-right: auto;
    margin-left: auto;

    @media screen and (max-width: 768px){
    width:100%;
    }

    &:after {
    content: " "; 
    display: block;
    clear: both;
    }`

    


