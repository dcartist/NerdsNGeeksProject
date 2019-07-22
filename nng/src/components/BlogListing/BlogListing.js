import React, { Component } from 'react';
import Axios from 'axios';
import RubberBand from 'react-reveal/RubberBand';
import './blogListing.css'
class BlogListing extends Component {
    constructor(props){
        super(props)
        this.state = {
            results: [],
        }
    }

    componentDidMount(){
        // const url = 'http://localhost:8080/api/blog/'
        const url = 'https://desolate-tundra-14936.herokuapp.com/api/blog/'
        Axios.get(url).then(
            res => {
   
                let blogResults = res.data
                this.setState({results: blogResults})
            }
        )
    }
    render() {
        let index = 0
        let blogList = this.state.results.map(item => {
            index++
            return(<div key={index} className="blog">
                <h3>{item.title}</h3>
                <p> {item.body}</p>
                <small>{item.date}</small>
            </div>)
            
        })

        return (
            <div>
                <RubberBand>
            <h1>Message from your ultimate glorious leader</h1>
        </RubberBand>
            <div className="blogMain">

            {blogList}
            </div>
            </div>
        );
    }
}

export default BlogListing;