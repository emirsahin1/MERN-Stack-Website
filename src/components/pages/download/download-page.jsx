import React, { Component } from 'react'
import { DownloadText, LightTextContainer, TextContainer } from "../../text-block/text-container-style"
import { TransparentDivider } from "../../utility-styles/utility-styles"
import { DownloadButtonContainer } from "../../button/button-style"
import { DownloadContainer } from "../download/download-container"

export default class DownloadPage extends Component {
    render() {
        return (
            <div>
                {/* <TextContainer>
                <p>Download</p>
            </TextContainer> */}
            <TransparentDivider height="20px" />
                <LightTextContainer>
                    <h3>How to install</h3>
                    <p>To <span>install</span> the app, click the <span>download</span> button below and your download should begin automatically.
                       Once downloaded on your mobile android device, <span>run</span> the downloaded file and allow the phone to install the application.
                       <br/><br/>For Ios (Apple) mobile devices, our app is currently not <span>supported</span>. </p>
                </LightTextContainer>
                <DownloadContainer>
                    <DownloadButtonContainer><p>Download</p></DownloadButtonContainer>
                    <DownloadText><p>Version 0.1</p></DownloadText>
                </DownloadContainer>
                <TextContainer>
                    <h3>Need help?</h3>
                    <p>Contact us as at <a href="/Information"><span>email@live.com</span></a></p>
                </TextContainer>
                <TransparentDivider height="1000px" />
            </div>
        )
    }
}
