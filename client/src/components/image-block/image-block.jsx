import React, { Component } from 'react'
import { ImageContainer, BlockImage, Container } from "./image-block-style";
import { ScrollMarker } from "../utility-styles/utility-styles";
import { TextContainer, LightTextContainer, TransparentTextContainer } from "../text-block/text-container-style"
import { createRef } from 'react';


export default class ImageBlock extends Component {

    constructor(props) {
        super(props)

        this.state = {
            //Starts the animations when true.
            beginAnimation: false
        }

        this.observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 1.0
        }

        this.scrollMark = createRef();
        //Scroll marker observer
        this.observerHandler = this.observerHandler.bind(this);
        this.observer = new IntersectionObserver(this.observerHandler, this.observerOptions);
    }

    render() {
        return (
            <Container side={this.props.side}>
                <ImageContainer animateImage={this.state.beginAnimation}>
                    <BlockImage src={this.props.image} alt="image not loaded"></BlockImage>
                </ImageContainer>
                <ScrollMarker ref={this.scrollMark}></ScrollMarker>
                <TransparentTextContainer styles="margin-top:0px; margin-bottom:25px;" animated={true} beginAnimation={this.state.beginAnimation}>
                    <p>
                        {this.props.children}
                    </p>
                </TransparentTextContainer>
            </Container>
        )
    }

    componentDidMount() {
        this.observer.observe(this.scrollMark.current)
    }

    observerHandler(entries) {
        //Checks to see if the container is intersecting the scroll mark. 
        if (entries[0].isIntersecting) {
            this.setState(prevState => ({ beginAnimation: true }), console.log(this.state))
        }
    }


}
