import React from 'react';
import {Image} from './slide-show-style'

/**
 * Emir Sahin
 * 7/21/2020
 */
class SlideImage extends React.Component{

    render(){

        return(
            <Image className="slide-image" src={this.props.source} style={this.props.style} alt="a slideshow"/>
        )
    }
}

export default SlideImage;