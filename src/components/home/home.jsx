import React, { createRef } from 'react'
import SlideShow from "../slide-show/slide-show"
import ImageBlock from "../image-block/image-block"
import {ButtonContainer, ButtonText} from "../button/button-style"
import {TextContainer} from "../text-block/text-block-style"
import {ScrollMarker, Divider} from "../utility-styles/utility-styles"

class Home extends React.Component {
    
    constructor(props) {
        super(props)

        this.state = {
            beginButtonAnimation: false
        }

        this.observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 1.0
        }

        this.marker = createRef();
        this.observerHandler = this.observerHandler.bind(this);
        this.observer = new IntersectionObserver(this.observerHandler, this.observerOptions);
    }


    render() {
        return (
            <div>
                <SlideShow />
                <Divider />
                <TextContainer mobileFontSize="14px" animationProps={this.animationProps}>
                    <p>Blob king is the best king. We hate duckmans. Blop blop blop blop.</p>
                </TextContainer>
                <ButtonContainer animateButton={this.state.beginButtonAnimation} >
                    <ScrollMarker ref={this.marker}/>
                    <ButtonText>Download Blop</ButtonText>
                </ButtonContainer> 
                <ImageBlock side="right" image={require("../../images/slideshow-images/slide1.jpg")}/>
                <ImageBlock side="left" image={require("../../images/slideshow-images/slide3.jpg")}/>
                <ImageBlock side="right" image={require("../../images/slideshow-images/Slide4.jpg")}/>
            </div>
        );

    }

    componentDidMount() {
        this.observer.observe(this.marker.current)
    }

    observerHandler(entries) {
        if (entries[0].isIntersecting) {
            this.setState(prevState => ({ beginButtonAnimation: true }), console.log(this.state))
        }
    }


}

export default Home;