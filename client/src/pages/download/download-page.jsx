import React, { Component } from 'react'
import { DownloadText, LightTextContainer, TextContainer } from "../../components/text-block/text-container-style"
import { TransparentDivider, FlexBox } from "../../components/utility-styles/utility-styles"
import { RectangleButton } from "../../components/button/button-style"

export default class DownloadPage extends Component {

    render() {
        return (
            <div>
            <TransparentDivider height="20px" />
                <LightTextContainer>
                    <h3>How to install</h3>
                    <p>To <span>install</span> the app, click the <span>download</span> button below and your download should begin automatically.
                       Once downloaded on your mobile android device, <span>run</span> the downloaded file and allow the phone to install the application.
                       <br/><br/>For Ios (Apple) mobile devices, our app is currently not <span>supported</span>. </p>
                </LightTextContainer>
                <FlexBox direction="column;">
                    <RectangleButton type="submit" onClick={this.downloadApp}><p>Download</p></RectangleButton>
                    <DownloadText><p>Version 0.1</p></DownloadText>
                </FlexBox>
                <TextContainer>
                    <h3>Need help?</h3>
                    <p>Contact us as at <a href="/Information"><span>email@live.com</span></a></p>
                </TextContainer>
                <TransparentDivider height="200px" />
            </div>
        )
    }

    downloadApp(){
        window.location.href = "/api/download-app";
    }
}
