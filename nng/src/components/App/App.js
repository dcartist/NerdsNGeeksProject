import React, { Component } from 'react';
import './App.css';
import {Route, Link, Switch, Redirect} from "react-router-dom";
import Home from '../Home/Home'
import Navigation from '../Navigation/Navigation'

class App extends Component {
  render() {
    return (
      <div>
         <Navigation></Navigation>
         TEST
         <Route path="/" exact component={Home}/>
      </div>
    )
  }
}

export default App;
