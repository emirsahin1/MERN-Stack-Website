import React from 'react'
import SlideShow from "../../components/slide-show/slide-show"
import ImageBlock from "../../components/image-block/image-block"
import NewsLetterForm from "../../components/newsletter-form/newsletter-form"
import { RoundButton, RectangleButton, SubmitButton } from "../../components/button/button-style"
import { TextContainer, LightTextContainer, DownloadText, EmailText } from "../../components/text-block/text-container-style"
import { Divider, TransparentDivider, FlexBox } from "../../components/utility-styles/utility-styles"
import { TextInput } from "../../components/input/input-style"
import { InfoCard, InforCardContainer, CardHeader } from "../../components/info-card/info-card"
import { Link } from "react-router-dom"

/**
 * Home page
 */

export default class Home extends React.Component {

    constructor(props) {
        super(props)
        this.emailInput = React.createRef();
        this.images = this.importImages(require.context("../../images/slideshow-images", false, /.jpg/));
        //TODO make utility
    }

    render() {
        return (
            <div>
                <SlideShow />
                <Divider />
                <InforCardContainer>
                    <Link to="/Education">
                        <InfoCard>
                            <h3>Education</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                            <img src={this.images[0]}></img>
                        </InfoCard>
                    </Link>
                    <Link to="/Design">
                    <InfoCard>
                        <h3>Design</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        <img src={this.images[2]}></img>
                    </InfoCard>
                    </Link>
                    <Link to="/Therapy">
                    <InfoCard>
                        <h3>Therapy</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        <img src={this.images[1]}></img>
                    </InfoCard>
                    </Link>
                    <Link to="/Art">
                    <InfoCard styles="@media screen and (max-width: 1320px) and (min-width: 1016px){flex-grow:0.68; max-width:500px;}">
                        <h3>Art</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        <img src={this.images[0]}></img>
                    </InfoCard>
                    </Link>
                    <Link to="/Technology">
                    <InfoCard styles="@media screen and (max-width: 1320px){flex-grow:0.68; max-width:500px;}">
                        <h3>Technology</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        <img src={this.images[2]}></img>
                    </InfoCard>
                    </Link>
                </InforCardContainer>

                <LightTextContainer mobileFontSize="14px">
                    <p>Lorem Blimpsum Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </LightTextContainer>

                {/* <FlexBox direction="row" horizontal="center" styles="margin: 40px auto 40px; width:85vw; min-width:240px; max-width:680px;">
                    <RectangleButton to="/Download" styles="margin:0; width: 100%;">
                        <p>Download</p>
                    </RectangleButton>
                    <DownloadText styles="margin:0; height:80px; width: 100%;"><p>Version 0.1</p></DownloadText>
                </FlexBox> */}

                <NewsLetterForm />

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

    /**
     * Imports images from a folder and returns an array containing the images. 
     * @param {array} images : Object containing images.
     */
    importImages(images) {
        let imageArray = [];
        images.keys().forEach((element, i) => {
            imageArray[i] = images(element);
        });
        return imageArray;
    }
}

//TODO: Move styles to a seperate folder