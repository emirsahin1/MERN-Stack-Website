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
// import ScrollToTop  from "../../components/utility-components/scroll-to-top";
import scrollToTopF from "../../utility/utility_functions";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../home/home.css"


/**
 * Home page
 */

export default class Home extends React.Component {

    constructor(props) {
        super(props)
        this.emailInput = React.createRef();
        this.slideImages = this.importImages(require.context("../../images/slideshow-images", false, /.jpg|.png/));
        this.cardImages = this.importImages(require.context("../../images/cards", false, /.jpg|.png/,));

        //TODO make utility
    }

    render() {
        return (
            <div>
                <SlideShow />
                <Divider height="15px" />
                <FlexBox>
                <hr className="heading__line"></hr>
                <div className="heading">Booths</div>
                <hr className="heading__line"></hr>
                </FlexBox>
                <InforCardContainer>
                    <Link to="/Education">
                        <InfoCard>
                            <h3>Education</h3>
                            <p>learn and experience the marvels of lighting</p>
                            <img src={this.cardImages[1]}></img>
                        </InfoCard>
                    </Link>
                    <Link to="/Design">
                    <InfoCard>
                        <h3>Design</h3>
                        <p>when light meets the eye</p>
                        <img src={this.cardImages[0]}></img>
                    </InfoCard>
                    </Link>
                    <Link to="/Therapy">
                    <InfoCard>
                        <h3>Therapy</h3>
                        <p>light is much more than vision</p>
                        <img src={this.cardImages[4]}></img>
                    </InfoCard>
                    </Link>
                    <Link to="/Art">
                    <InfoCard styles="@media screen and (max-width: 1320px) and (min-width: 1016px){flex-grow:0.68; max-width:500px;}">
                        <h3>Art</h3>
                        <p>to see art is to see light</p>
                        <img src={this.cardImages[2]}></img>
                    </InfoCard>
                    </Link>
                    <Link to="/Technology">
                    <InfoCard styles="@media screen and (max-width: 1320px){flex-grow:0.68; max-width:500px;}">
                        <h3>Technology</h3>
                        <p>the journey of light medium and form</p>
                        <img src={this.cardImages[3]}></img>
                    </InfoCard>
                    </Link>
                </InforCardContainer>

                <LightTextContainer mobileFontSize="14px">
                    <p>The <span>Museum of Lighting</span> is an open access all-in-one platform devoted to Virtual/Augmented/Mixed Reality applications. 
                        We aim to gather lighting enthusiasts, educators, designers, researchers, and 
                        artists in one place to tell their stories via immersive technologies. 
                    </p>
                </LightTextContainer>

                <LightTextContainer styles="margin-top:0px;">
                    <p>
                    Let’s shine together! Be part of the <span>Museum of Lighting</span> by sharing your content in one of our booths for free.
                    </p>
                </LightTextContainer>
                {/* <FlexBox direction="row" horizontal="center" styles="margin: 40px auto 40px; width:85vw; min-width:240px; max-width:680px;">
                    <RectangleButton to="/Download" styles="margin:0; width: 100%;">
                        <p>Download</p>
                    </RectangleButton>
                    <DownloadText styles="margin:0; height:80px; width: 100%;"><p>Version 0.1</p></DownloadText>
                </FlexBox> */}

                <NewsLetterForm />

                <ImageBlock side="right" image={require("../../images/general-images/ames3.jpg")}>
                What you perceive to be true and what is true aren’t always the same. 
                Learn and experience the phenomenon behind the Ames Room with this amazing AR application. 
                </ImageBlock>

                <ImageBlock side="left" image={require("../../images/general-images/goat.jpg")}>
                Fill light, key light, and backlight are well-known components of the three-point lighting method. 
                An interactive AR application to observe the effect of three-point lighting on a very surprising model. 
                </ImageBlock>

                <ImageBlock side="right" image={require("../../images/general-images/approach.jpg")}>
                Transforming ideas into realities has always been challenging. 
                Lighting is a visual medium and proper testing is key to success. 
                This immersive app will bring you into a virtual world where you can see how 
                lighting adds value to the intimate environment through the example of an installed 
                lighting design project of an historic Approach of Troy, NY.
                </ImageBlock>

                {/* <RectangleButton onClick={() => scrollToTopF()}><span>Scroll Up</span></RectangleButton> */}


                {/* <FlexBox styles="margin:0px auto; width:400px;">
                <RectangleButton><span>Education</span></RectangleButton>
                <RectangleButton><span>Design</span></RectangleButton>
                <RectangleButton><span>Therapy</span></RectangleButton>
                <RectangleButton><span>Technology</span></RectangleButton>
                <RectangleButton><span>Art</span></RectangleButton>
                </FlexBox> */}


                {/* <TransparentDivider height="50px"></TransparentDivider>
                <LightTextContainer>
                    <p>Lorem Blimpsum Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Lorem Blimpsum Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </LightTextContainer>
                <TransparentDivider height="200px"></TransparentDivider> */}

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
