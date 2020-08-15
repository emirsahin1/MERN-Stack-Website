import React from 'react';
import { LogoContainer, LogoSvg, LogoText } from './logo-style'

/* Contains an SVG logo made of text*/
class Logo extends React.Component {

    render() {
        return (
            <LogoContainer>
                <a href="ww">
                    <LogoSvg xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient spreadMethod="pad" id="text-gradient" x1="100%" y1="0%" x2="0%" y2="0%">
                                <stop offset="0%" stopColor="rgb(57, 210, 255)" stopOpacity="1" />
                                <stop offset="56%" stopColor="rgb(255, 217, 253)" stopOpacity="1" />
                                <stop offset="100%" stopColor="rgb(255, 170, 209)" stopOpacity="1" />
                            </linearGradient>
                        </defs>
                        <LogoText textAnchor="middle" x="50%" y="64%">MSL</LogoText>
                    </LogoSvg>
                </a>
            </LogoContainer>
        )
    }
}

export default Logo;