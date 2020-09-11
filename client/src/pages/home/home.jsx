import React from 'react'
import SlideShow from "../../components/slide-show/slide-show"
import ImageBlock from "../../components/image-block/image-block"
import NewsLetterForm from "../../components/newsletter-form/newsletter-form"
import { RoundButton, RectangleButton, SubmitButton } from "../../components/button/button-style"
import { TextContainer, LightTextContainer, DownloadText, EmailText } from "../../components/text-block/text-container-style"
import { Divider, TransparentDivider, FlexBox } from "../../components/utility-styles/utility-styles"
import { TextInput } from "../../components/input/input-style"
import {InfoCard} from "../../components/info-card/info-card"

/**
 * Home page
 */

export default class Home extends React.Component {

    constructor(props) {
        super(props)
        this.emailInput = React.createRef();
    }

    render() {
        return (
            <div>
                <SlideShow />
                <Divider />
                <FlexBox horizontal="space-between">
                <InfoCard></InfoCard>
                <InfoCard></InfoCard>
                <InfoCard></InfoCard>
                <InfoCard></InfoCard>
                <InfoCard></InfoCard>
                </FlexBox>

                <TextContainer mobileFontSize="14px">
                    <p>Lorem Blimpsum Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </TextContainer>

                <FlexBox direction="row" horizontal="center" styles="margin: 40px auto 40px; width:85vw; min-width:240px; max-width:680px;">
                    <RectangleButton to="/Download" styles="margin:0; width: 100%;">
                        <p>Download</p>
                    </RectangleButton>
                    <DownloadText styles="margin:0; height:80px; width: 100%;"><p>Version 0.1</p></DownloadText>
                </FlexBox>

                <NewsLetterForm/>

                <LightTextContainer styles="margin-top:0px;">
                    <p>
                        Lorem Blimpsum Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Lorem Blimpsum Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Lorem Blimpsum Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Lorem Blimpsum Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </LightTextContainer>
                <ImageBlock side="right" image={require("../../images/slideshow-images/slide1.jpg")} />
                <ImageBlock side="left" image={require("../../images/slideshow-images/slide3.jpg")} />
                <ImageBlock side="right" image={require("../../images/slideshow-images/Slide4.jpg")} />
                <TransparentDivider height="50px"></TransparentDivider>
                <LightTextContainer>
                    <p>Lorem Blimpsum Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Lorem Blimpsum Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </LightTextContainer>
                <TransparentDivider height="200px"></TransparentDivider>
            </div>
        );

    }
}

//TODO MAKE EMAIL A COMPONENET, MAKE INPUT VALIDATION, 
//TODO: Move styles to a seperate folder