import React, { Component } from 'react';
import './image.css'
class ImageGallery extends Component {
    constructor(props){
        super(props)
        this.state = {
        photos:[{src: 'http://artscrazy.com/sei30/pic0.jpeg',width: 1, height: 1},{src: 'http://artscrazy.com/sei30/pic1.jpeg',width: 1, height: 1},{src: 'http://artscrazy.com/sei30/pic2.jpeg',width: 1, height: 1},{src: 'http://artscrazy.com/sei30/pic3.jpeg',width: 1, height: 1},{src: 'http://artscrazy.com/sei30/pic4.jpeg',width: 1, height: 1},{src: 'http://artscrazy.com/sei30/pic5.jpeg',width: 1, height: 1},{src: 'http://artscrazy.com/sei30/pic6.jpeg',width: 1, height: 1},{src: 'http://artscrazy.com/sei30/pic7.jpeg',width: 1, height: 1},{src: 'http://artscrazy.com/sei30/pic8.jpeg',width: 1, height: 1},{src: 'http://artscrazy.com/sei30/pic9.jpeg',width: 1, height: 1},{src: 'http://artscrazy.com/sei30/pic10.jpeg',width: 1, height: 1},{src: 'http://artscrazy.com/sei30/pic11.jpeg',width: 1, height: 1},{src: 'http://artscrazy.com/sei30/pic12.jpeg',width: 1, height: 1},{src: 'http://artscrazy.com/sei30/pic13.jpeg',width: 1, height: 1},{src: 'http://artscrazy.com/sei30/pic14.jpeg',width: 1, height: 1},{src: 'http://artscrazy.com/sei30/pic15.jpeg',width: 1, height: 1},{src: 'http://artscrazy.com/sei30/pic16.jpeg',width: 1, height: 1},{src: 'http://artscrazy.com/sei30/pic17.jpeg',width: 1, height: 1},{src: 'http://artscrazy.com/sei30/pic18.jpeg',width: 1, height: 1},{src: 'http://artscrazy.com/sei30/pic19.jpeg',width: 1, height: 1},{src: 'http://artscrazy.com/sei30/pic20.jpeg',width: 1, height: 1},{src: 'http://artscrazy.com/sei30/pic21.jpeg',width: 1, height: 1},{src: 'http://artscrazy.com/sei30/pic22.jpeg',width: 1, height: 1},{src: 'http://artscrazy.com/sei30/pic23.jpeg',width: 1, height: 1},{src: 'http://artscrazy.com/sei30/pic24.jpeg',width: 1, height: 1},{src: 'http://artscrazy.com/sei30/pic25.jpeg',width: 1, height: 1},{src: 'http://artscrazy.com/sei30/pic26.jpeg',width: 1, height: 1},{src: 'http://artscrazy.com/sei30/pic27.jpeg',width: 1, height: 1},{src: 'http://artscrazy.com/sei30/pic28.jpeg',width: 1, height: 1},{src: 'http://artscrazy.com/sei30/pic29.jpeg',width: 1, height: 1},{src: 'http://artscrazy.com/sei30/pic30.jpeg',width: 1, height: 1},{src: 'http://artscrazy.com/sei30/pic31.jpeg',width: 1, height: 1},{src: 'http://artscrazy.com/sei30/pic32.jpeg',width: 1, height: 1},{src: 'http://artscrazy.com/sei30/pic33.jpeg',width: 1, height: 1},{src: 'http://artscrazy.com/sei30/pic34.jpeg',width: 1, height: 1},{src: 'http://artscrazy.com/sei30/pic35.jpeg',width: 1, height: 1},{src: 'http://artscrazy.com/sei30/pic36.jpeg',width: 1, height: 1},{src: 'http://artscrazy.com/sei30/pic37.jpeg',width: 1, height: 1},{src: 'http://artscrazy.com/sei30/pic38.jpeg',width: 1, height: 1},{src: 'http://artscrazy.com/sei30/pic39.jpeg',width: 1, height: 1},{src: 'http://artscrazy.com/sei30/pic40.jpeg',width: 1, height: 1},{src: 'http://artscrazy.com/sei30/pic41.jpeg',width: 1, height: 1},{src: 'http://artscrazy.com/sei30/pic42.jpeg',width: 1, height: 1},{src: 'http://artscrazy.com/sei30/pic43.jpeg',width: 1, height: 1},{src: 'http://artscrazy.com/sei30/pic44.jpeg',width: 1, height: 1},{src: 'http://artscrazy.com/sei30/pic45.jpeg',width: 1, height: 1},{src: 'http://artscrazy.com/sei30/pic46.jpeg',width: 1, height: 1},{src: 'http://artscrazy.com/sei30/pic47.jpeg',width: 1, height: 1},{src: 'http://artscrazy.com/sei30/pic48.jpeg',width: 1, height: 1},{src: 'http://artscrazy.com/sei30/pic49.jpeg',width: 1, height: 1},{src: 'http://artscrazy.com/sei30/pic50.jpeg',width: 1, height: 1},{src: 'http://artscrazy.com/sei30/pic51.jpeg',width: 1, height: 1},{src: 'http://artscrazy.com/sei30/pic52.jpeg',width: 1, height: 1},{src: 'http://artscrazy.com/sei30/pic53.jpeg',width: 1, height: 1},{src: 'http://artscrazy.com/sei30/pic54.jpeg',width: 1, height: 1},{src: 'http://artscrazy.com/sei30/pic55.jpeg',width: 1, height: 1},{src: 'http://artscrazy.com/sei30/pic56.jpeg',width: 1, height: 1}]
        }
    }
    render() {
        return (
            <div className="imageGallery">
                {this.state.photos.map((item, index)=>
                <div key={index}>
                <img src={item.src} alt={item.src}></img>
            </div>
                )}
            </div>
        );
    }
}

export default ImageGallery;