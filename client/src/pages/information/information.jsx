import React, { Component } from 'react'
import { LightPageTextContainer, TextBackground } from "../../components/page-styles/page-styles"
import {TransparentDivider} from "../../components/utility-styles/utility-styles"

export default class InformationPage extends Component {
    render() {
        return (
            <div>
            <LightPageTextContainer side="left">
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
            </LightPageTextContainer>
            <TransparentDivider height="1000px"/>
            </div>
        )
    }
}
