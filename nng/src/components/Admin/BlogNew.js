import React, { Component } from 'react';
import Axios from 'axios';

class BlogNew extends Component {
    let
    constructor(props){
        super(props)
        this.state={
            title: null,
            body: null,
            date: new Date().toLocaleString(),
            status: '',
        }
    }

    handleDate(evt){
        evt.preventDefault();
        let newDate = new Date();
    this.setState({
        // date: 'Some Date in the time space continuum'
        date: evt.target.value
    })
    }

    handleBody(evt){
        evt.preventDefault();
    this.setState({
        body: evt.target.value
    })
    }

    handleTitle(evt){
        evt.preventDefault();
    this.setState({
        title: evt.target.value
    })
    }

    handleSubmit(evt){
        // const url = `https://whispering-bayou-30290.herokuapp.com/api/contractor/new`;
        evt.preventDefault();
        this.setState({
            status: "This blog has been created."
        })
        console.log(this.state.title)
        console.log(this.state.body)
        console.log(this.state.date)
    
        // let updateID = `http://localhost:8080/api/blog/update/5d2f680606f1be154ad0a2b1`
        let url = `http://localhost:8080/api/blog/new/`
        // const input = {tweet: {body:  this.state.value}};
        Axios.post(url,
        {
            title: this.state.title,
            body: this.state.body,
            date: this.state.date,
        })}

    render() {
        let newDate = new Date();
        return (
            <div>

                <h3>Create New Blog</h3>

                <form onSubmit={(evt) => this.handleSubmit(evt)}>
                {/* <p><label>Contractor ID: </label>
                <input type="text" name = "ID" onChange={(evt) => this.handleID(evt)}></input></p> */}

                <p>
                <label>Title: </label>
                <input name="title" type="text"onChange={(evt) => this.handleTitle(evt)}/>
                </p>
                <p>
                <label>Body: </label>
                <input name="body" type="text" onChange={(evt) => this.handleBody(evt)} />
                </p>
                {/* <p>
                <label>Date: </label>
                <input name="date" type="text" onChange={(evt) => this.handleDate(evt)} value={newDate}/>
        
                </p> */}
                <p> 
                    
                <input name="" type="submit" />
                </p>

                <p>{this.state.status}</p>


                </form>
                
            </div>
        );
    }
}

export default BlogNew;