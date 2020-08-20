import React, { Component } from 'react'
import { TextContainer } from "../../text-block/text-container-style"
import {TransparentDivider} from "../../utility-styles/utility-styles"

export default class InformationPage extends Component {
    render() {
        return (
            <div>
            <TextContainer>
                <p>Information</p>
            </TextContainer>
            <TransparentDivider height="1000px"/>
            </div>
        )
    }
}
