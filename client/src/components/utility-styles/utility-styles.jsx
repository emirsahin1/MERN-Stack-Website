import styled from "styled-components"
import {device} from "../../device-sizes"

/**Marker used to activate scroll events */
export const ScrollMarker = styled.div`
    width: 10px;
    height: 10px;
    transform: translatey(3vh);
    /* background-color: red; */

    @media ${device.mobile}{
        transform: translatey(-25vh);

    }
`

export const Divider = styled.div`
        background-color:#1d1d1d;
        width: 100%;
        height: ${props => props.height ? props.height : "30px"}; 
`
export const TransparentDivider = styled(Divider)`
    opacity:0;
`

/**FlexBox, takes in optional direction, horizontal, vertical and styles props */
export const FlexBox = styled.div`

    display:flex; 
    flex-direction: ${props => props.direction ? props.direction : "row"};
    justify-content: ${props => props.horizontal ? props.horizontal : "center"}; 
    align-items: ${props => props.vertical ? props.vertical : "center"};

    ${props => {return props.styles}};
`