import React, { Component } from 'react';
import './App.css';
import {Route, Link, Switch, Redirect} from "react-router-dom";
import Home from '../Home/Home'
import About from '../About/About'
import Blog from '../BlogListing/BlogListing'
import Status from '../NerdStatus/Status'
import Navigation from '../Navigation/Navigation'
import Update from '../Admin/BlogUpdate'
import Particle from '../Particle/Particle'
import Bloginfo from '../Admin/BlogDetails'
import Statusinfo from '../NerdStatus/StatusUpdate'
import Admin from '../Admin/Admin'

import '../Particle/particle.css'
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      _id: null,
    }
  }

  setBlogInfo = (_id) => {
    this.setState({_id: _id});
  }
  setStatusInfo = (nerdPercentage) => {
    this.setState({nerdPercentage:   nerdPercentage});
  }

  render() {
    return (
      <div>
         <Navigation></Navigation>
         {/* <Route path="/" exact component={Home}/> */}
         <Route path="/" exact component={Home}/>
         <Route path="/about" exact component={About}/>
         <Route path="/status" exact component={Status}/>
         <Route path="/blog" exact component={Blog}/>
         <Route path="/admin" exact component={Admin}/>
         <Route path="/admin" exact component={Admin}/>
         <Route path="/blog/info" exact component={Bloginfo}/>
         <Route path="/blog/info/:_id" render={(props)=> <Bloginfo setBlogInfo={this._id} {...props} {...this.state} />} />
         <Route path="/status/results/" render={(props)=> <Statusinfo setStatusInfo={this.nerdPercentage} {...props} {...this.state} />} />
          {/* <Particle className="boxedIn"></Particle> */}
      </div>
    )
  }
}

export default App;
