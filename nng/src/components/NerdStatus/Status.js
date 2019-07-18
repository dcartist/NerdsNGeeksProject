import React, { Component } from 'react';
import './style.css'
class Status extends Component {
    render() {
        return (
            <div>
            <div className="Base">
                <div className="nerdSide"><p>NERDS</p></div>
                <div className="geekSide"><p>GEEKS</p></div>
                
            </div>
            </div>
        );
    }
}

export default Status;