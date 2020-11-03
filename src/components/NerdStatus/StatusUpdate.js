  import './style.css'
import React, { Component } from 'react'
import ConfettiCanvas from 'react-confetti-canvas';

class StatusUpdate extends Component {
constructor(props){
    super(props)
    this.state = {
        results: '',
    }
}

    componentDidMount(){
        let results =  this.props.match.params.nerdPercentage;
        this.setState({
            results: results
        })
        console.log(results)

        
    }
    goBack = () => {
        this.props.history.push("/admin")
        // not a hard direct
      }


    render() {
        return (
            <div className="fullBody">
                <ConfettiCanvas />
<div className="aboveLink">
<h1>Congrats</h1>
<p>You are {this.state.results}% NERD and {100-this.state.results}% GEEK</p> 
<a href="/"><button>Go HOME</button></a>
</div> 
          
            </div>
        );
    }
}

export default StatusUpdate;