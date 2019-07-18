// Admin blog
import React, { Component } from 'react';
import Axios from 'axios';
import {Route, Link, Switch, Redirect} from "react-router-dom";

class BlogListing extends Component {
    constructor(props){
        super(props)
        this.state = {
            results: [],
        }
    }

    componentDidMount(){
        const url = 'http://localhost:8080/api/blog/'
        Axios.get(url).then(
            res => {
                console.log(res.data[0])
                let blogResults = res.data
                this.setState({results: blogResults})
                console.log(this.state.results)
            }
        )
    }
    render() {
        let index = 0
        let blogList = this.state.results.map(item => {
            index++
                console.log(item)
            return(<div key={index}>

                <p>{item.title}</p>
                {/* <Link to={"/blog/info/" + jobItems._id}>{jobItems._id}</Link> */}
                <Link to={"/blog/info/" + item._id}>{item._id}</Link>
                <p> {item.body}</p>

            </div>)
            
        })

        return (
            <div>
            <h1>Message from your ultimate glorious leader</h1>

            {blogList}
            </div>
        );
    }
}

export default BlogListing;