import styled from "styled-components";
import { device } from "../../device-sizes"


export const InforCardContainer = styled.div`

    display:flex;
    justify-content:space-evenly;
    margin:0px 20px;
    min-width:250px;
    @media ${device.tablet}{
        flex-wrap:wrap;
    }

    @media ${device.mobile}{
        margin: 0px 0px 50px;
    }

`

export const InfoCard = styled.div`

    width:30vw;
    height:40vw;
    max-height:400px;
    max-width:300px;
    margin:30px 10px 0px;
    overflow:hidden;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius: 3vw;
    background-color:#00000082;
    -webkit-box-shadow: 0px 10px 10px 0px #00000057;;
    -moz-box-shadow:    0px 10px 10px 0px #00000057;;
    box-shadow:         0px 10px 10px 0px #00000057;
    transition: box-shadow 0.2s ease-out;
    position:relative;
    text-align:center;
    cursor: pointer;

    &:hover{
        box-shadow: 0px 0px 40px 0px #ffffff4f;
    }

    & img:hover{
        opacity:.70;
    }

    & img{
        min-height:100%;
        height:120%;
        width:auto;
        opacity:0.47;
        transition: opacity 0.2s ease-out;
    }

    & h3{
        position:absolute;
        top:30%;
        color:white;
        font-weight:200;
        font-size:min(6vw, 40px);
        z-index:5;
        text-shadow: 0px 0px 30px #000000;
        pointer-events:none;
    }

    & p{
        width:80%;
        position:absolute;
        top:50%;
        color:white;
        font-weight:200;
        font-size:min(4.5vw, 24px);
        z-index:5;
        text-shadow: 0px 0px 30px #000000;
        pointer-events:none;
    }

    @media ${device.mobile}{
        width:40vw;
        height:50vw;
    }

    ${props => { return props.styles }}
`

export const CardHeader = styled.div`
    
    
    
`