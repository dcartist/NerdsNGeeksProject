import React, { Component } from 'react';
import Axios from 'axios';


class BlogDetails extends Component {
    constructor(props){
        super(props)
        this.state={
            _id: null,
            title: null,
            body: null,
            date: null,
            status: '',
        }
    }

    componentDidMount(){
        let blogid = this.props.match.params._id;

        console.log(blogid)
        const url = `http://localhost:8080/api/blog/id/`+blogid;
        Axios
          .get(url)
          .then(response => {
            let blogInfo = response.data[0]
            console.log(blogInfo)
            this.setState(PreviousState => ({
            title: blogInfo.title,
            body: blogInfo.body,
            date: blogInfo.date,
            }))
          })
    }

    goBack = () => {
        this.props.history.push("/admin")
        // not a hard direct
      }

    handleDate(evt){
        evt.preventDefault();
        // let newDate = new Date();
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
    handleDeleteSubmit(evt){
        evt.preventDefault();
        const blogid = this.props.match.params._id;
        let delId = `http://localhost:8080/api/blog/delete/`+blogid
        console.log(delId)
        Axios(
            {
                method: 'delete',
                url: `${delId}`,
                // data: null,
                headers: {'Content-Type': 'application/json'},
                }
        ).then(item=>{
            console.log(item)
        }).catch(err=>{
            console.log(err)
        })

        this.goBack()
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
        // let updateID = `http://localhost:8080/api/blog/update/5d2f680606f1be154ad0a2b1`
        let updateID = `http://localhost:8080/api/blog/update/`+blogid
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
                <p>{this.state.title}</p>
                <p>{this.state.body}</p>
                <p>{this.state.date}</p>
                <div>
                <button onClick={this.goBack}> Go back</button>
                <h3>Update Blog</h3>
                <p>{this.state.status}</p>

                <form onSubmit={(evt) => this.handleSubmit(evt)}>
                <p>
                <label>Title: </label>
                <input name="title" type="text"onChange={(evt) => this.handleTitle(evt)}/>
                </p>
                <p>
                <label>Body: </label>
                <input name="body" type="text" onChange={(evt) => this.handleBody(evt)} />
                </p>
                <p>
                {/* <label>Date: </label> */}
                {/* <input name="date" type="text" onChange={(evt) => this.handleDate(evt)} value={newDate}/> */}
                </p>
                <p> 
                    
                <input name="" type="submit" />
                </p>
                </form>
                <form onSubmit={(evt) => this.handleDeleteSubmit(evt)}>
                <input name="Delete" type="submit" value="delete"/>
                </form>
                </div>
            </div>
        );
    }
}

export default BlogDetails;