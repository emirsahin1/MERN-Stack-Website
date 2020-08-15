import styled, {css} from "styled-components";

export const ButtonContainer = styled.div`

    background-color:#1D1D1D;
    width: 50vw;
    max-width: 400px;
    min-width: 120px;
    height: 13vh;
    margin: 50px auto;
    display:flex; 
    align-items:center;
    justify-content:center;
    border-color:#3f8b57;
    border-style:solid;
    border-width: 8px;
    border-radius: 90px;
    transition: opacity 0.3s ease-out, background-color 0.2s ease-out, box-shadow 0.2s ease-out, border-color 0.2s ease-out ;
    box-shadow: 0px 20px 30px rgba(0,0,0,0.4), 0px 20px 30px rgba(0,0,0,0.4);
    opacity:0;
    cursor: pointer;

    &:hover{
        border-color:#55c66f;
        background-color: #28405b;
        box-shadow: 0px 20px 60px #9ce7a65e, 0px 20px 60px #9ce7a65e;

    }

    ${props => { if(props.animateButton){

        return css `
        opacity:100;

        `
    }}}

`

export const ButtonText = styled.div`
    font-size: 30px;
    color: #ffffff;

    @media screen and (max-width: 768px){

    font-size: max(20px, 4vw);
    }
`