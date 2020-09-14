import styled, { css } from "styled-components"
import { device } from "../../device-sizes"

export const PageTextBlock = styled.div`

    display:flex;
    justify-content:center;
    align-items:center;
    width:85%; 
    margin:50px auto; 
    height:auto; 
    align-items:stretch;

    @media ${device.mobile}{
        flex-direction:column;
    }
`

/**Large version of the LighttextContainer, used with a p tag and optional h header tag containing text inside. Takes in text align "side" prop.  */
export const LightPageTextContainer = styled.div`

    width:100%;
    background-color:#1d1d1d;
    height:auto;
    text-align:center;
    min-width: 100px;

    & p{
        font-size:14px;
        line-height:1.7em;
        color: #ffffff;
        padding: 5% 7%;
        font-family: 'Raleway', sans-serif;
        text-align: left;
    }

    &>*{
        color: #ffffff;
        text-shadow: 0 0 20px black;
        font-weight:normal;
        font-size:34px;
        padding: calc(4% + 5px) 4% 0px;
        }

    @media ${device.mobile}{
        width:100%;

        & p{
        font-size: max(2vw, 10px);
        }
    }
    ${props => { return props.styles }};
`

export const TextBackground = styled.div`

    background-color:#2e2e2e;
    width:100%;
    overflow:hidden;
    text-align: center;

    & span{
        position:absolute;
        color:#262626;
        font-size:190px;
    }

    & p{
        font-size:14px;
        line-height:1.7em;
        padding: 5% 7%;
        color: #ffffff;
        margin:auto;
    }

    @media ${device.mobile}{
        width:100%;

        & p{
        font-size: max(2vw, 10px);
        }
    }
`

