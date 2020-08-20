import React, { Component } from 'react'
import { TextContainer, LightTextContainer } from "../../text-block/text-container-style"
import {TransparentDivider} from "../../utility-styles/utility-styles"
import {DownloadButtonContainer} from "../../button/button-style"
import {DownloadContainer} from "../download/download-container"

export default class DownloadPage extends Component {
    render() {
        return (
            <div>
            {/* <TextContainer>
                <p>Download</p>
            </TextContainer> */}
            <DownloadContainer>
            <DownloadButtonContainer><p>Download</p></DownloadButtonContainer>
            <LightTextContainer><p>Version 0.1</p></LightTextContainer>
            </DownloadContainer>
            <TransparentDivider height="1000px"/>
            </div>
        )
    }
}
