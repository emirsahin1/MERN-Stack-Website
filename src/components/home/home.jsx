import React from 'react'
import SlideShow from "../slide-show/slide-show"
import ImageBlock from "../image-block/image-block"
import {ButtonContainer, ButtonText} from "../button/button-style"
import {TextContainer, LightTextContainer} from "../text-block/text-container-style"
import {Divider} from "../utility-styles/utility-styles"

class Home extends React.Component {
    
    render() {
        return (
            <div>
                <SlideShow />
                <Divider />
                <TextContainer mobileFontSize="14px" animationProps={this.animationProps}>
                    <p>Lorem Blimpsum Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </TextContainer>
                <ButtonContainer>
                    <ButtonText>Download</ButtonText>
                </ButtonContainer> 
                <LightTextContainer>
                    <p>Lorem Blimpsum Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Lorem Blimpsum Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Lorem Blimpsum Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Lorem Blimpsum Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </LightTextContainer>
                <ImageBlock side="right" image={require("../../images/slideshow-images/slide1.jpg")}/>
                <ImageBlock side="left" image={require("../../images/slideshow-images/slide3.jpg")}/>
                <ImageBlock side="right" image={require("../../images/slideshow-images/Slide4.jpg")}/>
            </div>
        );

    }
}

export default Home;