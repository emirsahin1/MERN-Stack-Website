import React, { Component } from 'react'
import scrollToTopF from "../../utility/utility_functions";
import "./scroll-to-top.css"
import {SlideArrow} from "../slide-show/slide-show-style"


export default class scrollToTop extends Component {
    render() {
        return (
            <div>
                <svg className="scroll-to-top" width="30" height="30" viewBox="0 0 78 78"  fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle className="scroll-to-top__circle" onClick={() => scrollToTopF()} cx="39" cy="39" r="39" fill="#0000006e" />
                    <path d="M31.6782 7L27 11.6316L54.6437 39L27 66.3684L31.6782 71L32.5287 70.1579L64 39L31.6782 7Z" fill="url(#paint0_linear)" />
                    <defs>
                        <linearGradient id="paint0_linear" x1="45.5" y1="7" x2="45.5" y2="71" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#7A9FFF" />
                            <stop offset="0.484375" stopColor="#FFADF7" />
                            <stop offset="1" stopColor="#7A9FFF" />
                        </linearGradient>
                    </defs>
                </svg>
                <h4 onClick={() => scrollToTopF()} className="scroll-to-top__text">Scroll Up</h4>
            </div>
        )
    }


}
