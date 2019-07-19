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
<div className="aboveLink">Congrats
<p>You got {this.state.results}</p>
<button onClick={this.goBack}> GO home</button>
<a href="/"> Go HOME</a>
</div> 
          
            </div>
        );
    }
}

export default StatusUpdate;