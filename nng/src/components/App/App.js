import React, { Component } from 'react';
import './App.css';
import {Route, Link, Switch, Redirect} from "react-router-dom";
import Home from '../Home/Home'
import About from '../About/About'
import ImageGallery from '../Sei30/ImageGallery'
import SEI30 from '../Sei30/Sei30'
import Blog from '../BlogListing/BlogListing'
import Status from '../NerdStatus/Status'
import Navigation from '../Navigation/Navigation'
import Update from '../Admin/BlogUpdate'
import Particle from '../Particle/Particle'
import News from '../News/News'
import Bloginfo from '../Admin/BlogDetails'
import Definitions from '../NerdStatus/DefineNG'
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
         <Route path="/sei30" exact component={SEI30}/>
         <Route path="/sei30/images" exact component={ImageGallery}/>
         <Route path="/status" exact component={Status}/>
         <Route path="/nerdsgeeks" exact component={Definitions}/>
         <Route path="/blog" exact component={Blog}/>
         <Route path="/news" exact component={News}/>
         <Route path="/admin" exact component={Admin}/>
         <Route path="/admin" exact component={Admin}/>
         <Route path="/blog/info" exact component={Bloginfo}/>
         <Route path="/blog/info/:_id" render={(props)=> <Bloginfo setBlogInfo={this._id} {...props} {...this.state} />} />
         <Route path="/status/results/:nerdPercentage" render={(props)=> <Statusinfo setStatusInfo={this.nerdPercentage} {...props} {...this.state} />} />
          {/* <Particle className="boxedIn"></Particle> */}
      </div>
    )
  }
}

export default App;
