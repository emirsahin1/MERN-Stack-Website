import React, { Component } from 'react'
import { TextContainer, LightTextContainer, LargeLightTextContainer } from "../../text-block/text-container-style"
import {TransparentDivider} from "../../utility-styles/utility-styles"

export default class InformationPage extends Component {
    render() {
        return (
            <div>
            <LargeLightTextContainer side="left">
                <h3><span>Information</span></h3>
                <p>Helo Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Amet ipsum molestias ipsa possimus voluptate? Enim quasi iste, 
                    alias rem architecto maxime! Animi doloremque mollitia, 
                    veniam totam accusantium vitae. Officia, distinctio.
                    Helo Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Amet ipsum molestias ipsa possimus voluptate? Enim quasi iste, 
                    alias rem architecto maxime! Animi doloremque mollitia, 
                    veniam totam accusantium vitae. Officia, distinctio.</p>

                <h4><span>Loim</span></h4>
                <p>Helo Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Amet ipsum molestias ipsa possimus voluptate? Enim quasi iste, 
                    alias rem architecto maxime! Animi doloremque mollitia, 
                    veniam totam accusantium vitae. Officia, distinctio.
                    Helo Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Amet ipsum molestias ipsa possimus voluptate? Enim quasi iste, 
                    alias rem architecto maxime! Animi doloremque mollitia, 
                    veniam totam accusantium vitae. Officia, distinctio.</p>
            </LargeLightTextContainer>
            <TransparentDivider height="1000px"/>
            </div>
        )
    }
}
