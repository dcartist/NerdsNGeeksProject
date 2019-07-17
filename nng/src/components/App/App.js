import React, { Component } from 'react';
import './App.css';
import {Route, Link, Switch, Redirect} from "react-router-dom";
import Home from '../Home/Home'
import About from '../About/About'
import Navigation from '../Navigation/Navigation'
import Particle from '../Particle/Particle'
import '../Particle/particle.css'
class App extends Component {
  render() {
    return (
      <div>
         <Navigation></Navigation>
         {/* <Route path="/" exact component={Home}/> */}
         <Route path="/" exact component={Home}/>
         <Route path="/about" exact component={About}/>
         <Particle />
      </div>
    )
  }
}

export default App;
