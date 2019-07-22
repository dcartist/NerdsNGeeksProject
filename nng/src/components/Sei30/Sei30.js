import React, { Component } from 'react';
import ImageGallery from './ImageGallery';
import {Route, Link, Switch, Redirect} from "react-router-dom";
import './image.css'
import Logo from './images/GA.png'

class Sei30 extends Component {
    render() {
        return (
            <div className="redBackground">
                <div className="displayed">
                <section><img src={Logo}></img></section>
                <section>
                    <h2>SEI30</h2>
                    <p>Also known as "The crazy 8's"</p>
                <Link to="/sei30/images">
                    <button className="largeButton">
                    SEI30 Photos
                    </button>
                    </Link>
                </section>
                </div>
            <div className="seiVideos">

            <div>
            <iframe src="https://player.vimeo.com/video/349363774" width="640" height="564" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
            </div>
            <div>

            <iframe src="https://player.vimeo.com/video/349363499" width="640" height="564" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe> 
            </div>
            </div>
                {/* <ImageGallery></ImageGallery> */}
                
            </div>
        );
    }
}

export default Sei30;