import React, { Component } from 'react'
import { LogoSvg, LogoText } from './logo-style'

export default class Logo extends Component {
    render() {
        return (
            <div>
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
            </div>
        )
    }
}
