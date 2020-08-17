import React, { Component } from 'react'
import { ImageContainer, BlockImage, Container } from "./image-block-style";
import { ScrollMarker } from "../utility-styles/utility-styles";
import { TextContainer, LightTextContainer } from "../text-block/text-container-style"
import { createRef } from 'react';


export default class ImageBlock extends Component {

    constructor(props) {
        super(props)

        this.state = {
            beginAnimation: false
        }

        this.observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 1.0
        }

        this.container = createRef();
        this.observerHandler = this.observerHandler.bind(this);
        this.observer = new IntersectionObserver(this.observerHandler, this.observerOptions);
    }

    render() {
        return (
            <Container side={this.props.side}>
                <ImageContainer animateImage={this.state.beginAnimation}>
                    <BlockImage src={this.props.image} alt="image not loaded"></BlockImage>
                </ImageContainer>
                <ScrollMarker ref={this.container}></ScrollMarker>
                <TextContainer mobileFontSize={this.props.mobileFontSize} animated={true} beginAnimation={this.state.beginAnimation}>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Nostrum totam perferendis quas! Minima quis libero voluptatibus quia, dolorum voluptas,
                    adipisci quas cupiditate quae hic voluptates modi, quam suscipit dolore quo?</p>
                </TextContainer>
            </Container>
        )
    }

    componentDidMount() {
        this.observer.observe(this.container.current)
    }

    observerHandler(entries) {
        if (entries[0].isIntersecting) {
            this.setState(prevState => ({ beginAnimation: true }), console.log(this.state))
        }
    }


}
