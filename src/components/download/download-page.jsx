import React, { Component } from 'react'
import { TextContainer } from "../text-block/text-container-style"
import {TransparentDivider} from "../utility-styles/utility-styles"


export default class DownloadPage extends Component {
    render() {
        return (
            <div>
            <TextContainer>
                <p>How to Download</p>
            </TextContainer>
            <TransparentDivider height="1000px"/>
            </div>
        )
    }
}
