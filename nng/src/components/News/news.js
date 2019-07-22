import React, { Component } from 'react';
import Axios from 'axios';
import './style.css'
class News extends Component {
    constructor(props){
        super(props)
        this.state = {
            articles: [],
        }
    }

    componentDidMount(){
        const url = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=ace1e9231b0048f3848884da9cd3b383'
        Axios.get(url).then(element => {
            console.log(element.data)
            this.setState({
                articles: element.data.articles
            })

        }
        )
    }
    
    render() {
        // console.log(this.articlesListing)
        return (
            <div className="newsGrid">
                {this.state.articles.map((item, index) => 
                 <div key={index} className="card">
                <img src={item.urlToImage}></img>
                 <p> <b>{item.title}</b></p>
             <p>{item.description}</p>
             <a href={item.url} target="blank"><button>Click for more information</button></a>
             </div>
                    
                )}
            </div>
        );
    }
}

export default News;