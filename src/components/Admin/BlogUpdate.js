import React, { Component } from 'react';
import Axios from 'axios';

class BlogUpdate extends Component {
    constructor(props){
        super(props)
        this.state={
            title: null,
            body: null,
            date: null,
            status: '',
        }
    }

    handleDate(evt){
        evt.preventDefault();
        let newDate = new Date();
    this.setState({
        // date: 'Some Date in the time space continuum'
        date: newDate
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
            status: "This blog has been updated."
        })
        console.log(this.state.title)
        console.log(this.state.body)
        console.log(this.state.date)
        const blogid = this.props.match.params._id;
        // let updateID = `http://localhost:8080/api/blog/update/`+blogid
        let updateID = `http://desolate-tundra-14936.herokuapp.com/api/blog/update/`+blogid
        // const input = {tweet: {body:  this.state.value}};
        Axios.put(updateID,
        {
            title: this.state.title,
            body: this.state.body,
            date: this.state.date,
        })}


    render() {
        let newDate = new Date();
        return (
            <div>

<h3>Update Page</h3>

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
<p>
<label>Date: </label>
<input name="date" type="text" onChange={(evt) => this.handleDate(evt)} value={newDate} />
</p>
<p> 
    
<input name="" type="submit" />
</p>

<p>{this.state.status}</p>


</form>


                
            </div>
        );
    }
}

export default BlogUpdate;