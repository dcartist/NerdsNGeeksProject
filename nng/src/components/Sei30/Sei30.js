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

                    <button>
                    <Link to="/sei30/images">Image Gallery</Link>
                    </button>
                </section>
                </div>
            <div>
            <iframe src="https://player.vimeo.com/video/349363774" width="640" height="564" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
            </div>
                
                {/* <ImageGallery></ImageGallery> */}
                
            </div>
        );
    }
}

export default Sei30;