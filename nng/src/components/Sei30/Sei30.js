import React, { Component } from 'react';
import ImageGallery from './ImageGallery';
import {Route, Link, Switch, Redirect} from "react-router-dom";
import './image.css'

class Sei30 extends Component {
    render() {
        return (
            <div>
                {/* <ImageGallery></ImageGallery> */}
                <Link to="/sei30/images">Image Gallery</Link>
            </div>
        );
    }
}

export default Sei30;