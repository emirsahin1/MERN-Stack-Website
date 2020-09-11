import React from 'react';
import { LogoContainer, LogoSvg, LogoText, LogoTextSVG } from './nav-logo-style'
import { Link } from 'react-router-dom';
import "./new-nav-logo.css"

/* Contains an SVG logo made of text*/
export default class NewNavLogo extends React.Component {

    render() {
        return (
            <LogoContainer>
                <Link to="/">
                    <LogoSvg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 108.14 99.99">
                        <defs>
                        </defs>
                        <rect className="cls-1" y="91.01" width="43.55" height="8.98" />
                        <polygon className="cls-1"
                            points="0 79.31 0 0 38.87 42.36 52.82 26.66 52.82 56.56 39.37 70.76 20.93 52.08 20.93 79.31 0 79.31" />
                        <polygon className="cls-2" points="57.81 22.92 78.49 0 78.49 79.31 108.14 79.31 108.14 99.98 57.81 99.98 57.81 22.92" />
                        <text className="logo-text" transform="translate(-0.85 90.38)">Museum</text><text class="cls-4"
                            transform="translate(59.15 94.01)">Lighting</text><text class="cls-5"
                                transform="translate(45.24 99.16)">of</text>
                    </LogoSvg>
                </Link>
                <LogoTextSVG width={170} height={215} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 28" >
                        {/* Created with Method Draw - http://github.com/duopixel/Method-Draw/ */}
                        <g>
                            <title>background</title>
                            <rect fill="none" id="canvas_background" height={30} width={100} y={-1} x={-1} />
                            <g display="none" overflow="visible" y={0} x={0} height="100%" width="100%" id="canvasGrid">
                                <rect fill="url(#gridpattern)" strokeWidth={0} y={0} x={0} height="100%" width="100%" />
                            </g>
                        </g>
                        <g>
                            <title>Layer 1</title>
                            <text xmlSpace="preserve" textAnchor="start" font-family="'Raleway',sans-serif;" fontSize={11.8} id="svg_1" y={18} x="1.625" strokeWidth={0} stroke="#000" fill="#ffffff">Museum of Lighting</text>
                        </g>
                </LogoTextSVG>
            </LogoContainer >
        )
    }
}
