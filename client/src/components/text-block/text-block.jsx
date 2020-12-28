import React, { Component } from 'react'
import {TextContainer} from './text-block-style'

export default class TextBlock extends Component {


    constructor(props) {
        super(props)
        this.animationProps = null;
    }
    
    render() {
        this.animationProps = {animated: this.props.animated, beginAnimation: this.props.beginAnimation};
        return (
            <TextContainer  side={this.props.side} mobileFontSize={this.props.mobileFontSize} animationProps={this.animationProps}>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
               Nostrum totam perferendis quas! Minima quis libero voluptatibus quia, dolorum voluptas, 
               adipisci quas cupiditate quae hic voluptates modi, quam suscipit dolore quo?</p>
            </TextContainer>
        )
    }
}


