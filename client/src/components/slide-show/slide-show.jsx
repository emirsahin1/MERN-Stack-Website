import React from "react";
import {SlideshowContainer, CircleContainer, Circle, SlideArrow, SlideImage, SlideOverlay} from "./slide-show-style"
import Logo from "../logo/logo.jsx"
import countdown from "./countdown.css"
/**
 * Emir Sahin
 * 7/21/2020
 */
class SlideShow extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            imageIndex: 0
        }
        this.images = this.importImages(require.context("../../images/slideshow-images", false, /.jpg|.png/));
        this.numOfImages = this.images.length;
        this.switchDelay = 5000;
        this.switchImage.bind(this);
        this.days = 0;
        this.hours = 0;
        this.minutes = 0;
        this.seconds = 0;
    }

    render() {
        return (
            <SlideshowContainer>
                {/* <div id="clock">
                    <p class="date">2021-07-01</p>
                    <p class="time">Time</p>
                    <p class="text">DIGITAL CLOCK with Vue.js</p>
                </div> */}

                <div id="clock-container">
                    <div className="App-title">Countdown to Launch</div>
                    <div className="clock">
                        {this.leadingZero(this.state.days)} {this.state.days == 1 ? 'day' : 'days'} &nbsp;
                    </div>
                    <div className="clock">
                        {this.leadingZero(this.state.hours)} {this.state.hours == 1 ? 'hour' : 'hours'}&nbsp;
                    </div>
                    <div className="clock">
                        {this.leadingZero(this.state.minutes)} {this.state.minutes == 1 ? 'minute' : 'minutes'}&nbsp;
                    </div>
                    <div className="clock">
                        {this.leadingZero(this.state.seconds)} {this.state.seconds == 1 ? 'second' : 'seconds'}&nbsp;
                    </div>
                </div>

                {this.images.map((slide, index) =>
                    <SlideImage slideactive={index === this.state.imageIndex ? true : false} src={slide}/>)}
                {/* <SlideOverlay><span>Museum of Lighting</span></SlideOverlay> */}
                <CircleContainer>
                {Array(this.numOfImages).fill().map( (element, index) => 
                <Circle onClick={() => this.switchImage(null, index)} style={this.setActiveCircle(index)} key={index}></Circle>)}
                </CircleContainer>

                <SlideArrow  left width="78" height="78" viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle onClick={() => this.switchImage(0)}  cx="39" cy="39" r="39" fill="black" />
                    <path d="M31.6782 7L27 11.6316L54.6437 39L27 66.3684L31.6782 71L32.5287 70.1579L64 39L31.6782 7Z" fill="url(#paint0_linear)" />
                    <defs>
                        <linearGradient id="paint0_linear" x1="45.5" y1="7" x2="45.5" y2="71" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#7A9FFF" />
                            <stop offset="0.484375" stopColor="#FFADF7" />
                            <stop offset="1" stopColor="#7A9FFF" />
                        </linearGradient>
                    </defs>
                </SlideArrow>
                <SlideArrow width="78" height="78" viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg">

                    <circle onClick={() => this.switchImage(1)} cx="39" cy="39" r="39" fill="black" />
                    <path d="M31.6782 7L27 11.6316L54.6437 39L27 66.3684L31.6782 71L32.5287 70.1579L64 39L31.6782 7Z" fill="url(#paint0_linear)" />
                    <defs>
                        <linearGradient id="paint0_linear" x1="45.5" y1="7" x2="45.5" y2="71" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#7A9FFF" />
                            <stop offset="0.484375" stopColor="#FFADF7" />
                            <stop offset="1" stopColor="#7A9FFF" />
                        </linearGradient>
                    </defs>
                </SlideArrow>
            
            </SlideshowContainer>
        )
    }

    componentDidMount(){
        //The interval for timing image switch. 
        this.switchInterval = setInterval(function(){this.switchImage(1)}.bind(this), this.switchDelay);
        this.getTimeDifference(this.props.eventDate);
        setInterval(() => this.getTimeDifference('July 1, 2021'), 1000);
    }

    componentWillUnmount(){
        clearInterval(this.switchInterval);
    }

    leadingZero(num) {
        return (num < 10 && num > 0) ? "0" + num : num;
      }

      getTimeDifference(eventDate) {
        const time = Date.parse(eventDate) - Date.parse(new Date());
        const days = Math.floor(time / (1000 * 60 * 60 * 24));
        const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((time / 1000 / 60) % 60);
        const seconds = Math.floor((time / 1000) % 60);
        this.setState({ days, hours, minutes, seconds });
      }  




    /**
     * Sets the circle active that is corresponding to current image. 
     * @param {int} index : index of circle with respect to slide order.
     */
    setActiveCircle(index){
        if(index === this.state.imageIndex){ return {opacity: "1"};}   
    }

    /**
     * Stops the time interval then switches image based on direction. 
     * If an index is passed, it directly switches to that index. 
     * @param {int} direction : 1 for forward or 0 backward
     * @param {int} index : Optional direct index value. Pass in undefined when not used. 
     */
    //TODO Change undefined to null
    switchImage(direction, index){
        clearInterval(this.switchInterval);
        let newImageIndex;
        if(typeof index !== "undefined"){
            newImageIndex = index;
        }
        
        else if(direction === 1) {            
            newImageIndex = this.state.imageIndex + 1;
            if(newImageIndex > this.numOfImages -1){
                newImageIndex = 0;
            }
        }
        else{
            newImageIndex = this.state.imageIndex - 1;
            if(newImageIndex < 0){
                newImageIndex += this.numOfImages;
            }
        }
        this.setState({imageIndex: newImageIndex});

        this.switchInterval = setInterval(function(){this.switchImage(1, undefined)}.bind(this), this.switchDelay);  
    }

    /**
     * Imports images from a folder and returns an array containing the images. 
     * @param {array} images : Object containing images.
     */
    importImages(images) {
        let imageArray = [];
        images.keys().forEach((element, i) => {
            imageArray[i] = images(element);
            });
        return imageArray;
    }
}
export default SlideShow; 

//TODO Safari bug still not fixed