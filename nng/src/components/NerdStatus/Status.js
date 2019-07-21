import React, { Component } from 'react';
import './style.css'
import { Line, Circle } from 'rc-progress';
import {Route, Link, Switch, Redirect} from "react-router-dom";
import Spin from 'react-reveal/Spin';


// import * from './Questions.js'
class Status extends Component {
    constructor(props){
        super(props)
        this.state = {
            questions: [
                "Which Doctor do you Prefer",
                "Which Galaxy is the best?",
                "Which Stars?",
                "Which Professor do you Prefer",
                "Pick your Game",
                "Best Future SciFi",
                "Pick your Pokemon",
                "Which Adventure Guy do you prefer?",
                "Which Science Guy do you prefer?",
                "Which Dynamic Duo?"
            ],
            nerdScore: 50,
            geekScore: 50,
            nerdPercentage:50,
            rating: 0,
            mainQuestion:'Which Doctor do you Prefer',
            nerdButton:'Dr. Strange',
            geekButton:'Dr. Who',
            counter: 0,
            infoButton: [
                {geek: 'Dr. Strange',  
                nerd: 'Dr. Who',},
                {geek: 'Guardians of the Galaxy',  
                nerd: 'Hitchhiker`s guide to the galaxy',},
                {geek: 'Star Wars',  
                nerd: 'Star Trek',},
                {geek: 'Professor Charles Xavier',  
                nerd: 'Professor Stephen Hawkins',},
                {geek: 'Dungeons and Dragons',  
                nerd: 'Chess',},
                {geek: 'Tron',      
                nerd: 'Matrix',},
                {geek: 'Pikachu',  
                nerd: 'Mew',},
                {geek: 'Indiana Jones',  
                nerd: 'Steve Irwin',},
                {geek: 'Aliens guy',  
                nerd: 'Neil Degrasse Tyson',},
                {geek: 'Rick and Morty',  
                nerd: 'Adam Savage and Jamie Hyneman',},

            ]
        }
    }
    quiz = (x)=> {
        return(
            this.setState({
                mainQuestion: this.state.questions[x],
                geekButton: this.state.infoButton[x].geek,
                nerdButton: this.state.infoButton[x].nerd,
            })
            )  
        }
        theEnd = ()=> {
            console.log('the End Firing')
            if (this.state.counter > 8){

                return(
                 
                    this.props.history.push('/status/results/'+this.state.nerdPercentage)
                )
            } else {
                this.quiz(this.state.counter)
            }
        
        }

    geekIncrease = (evt) => {
        evt.preventDefault();
        this.theEnd()
        this.setState({
            nerdScore: this.state.nerdScore - 1,
            nerdPercentage: this.state.nerdPercentage - 5,
            counter: this.state.counter + 1,
            
          });

        
    }
    nerdIncrease = (evt) => {
        evt.preventDefault();
        this.theEnd()
        this.setState({
            nerdScore: this.state.nerdScore + 1,
            geekScore: this.state.geekScore - 1,
            nerdPercentage: this.state.nerdPercentage + 5,
            counter: this.state.counter + 1,
           

          });
        //   this.quiz(this.state.counter)
    
        
    }

    render(){
        let base = {
            display: 'grid',
            gridTemplateColumns: 'repeat(3,1fr)',
        }
        return (
            <div>
                
        <div style={base}>
                  <section>
                  <Spin spy={this.state.counter}>
                <Circle className="circle" percent={this.state.nerdPercentage} strokeWidth="10" trailWidth = "7" strokeColor="purple" trailColor="green"></Circle>
                </Spin>
                </section>
                <div> {this.state.mainQuestion} </div>
                <div>
                <div><button onClick={this.geekIncrease}>{this.state.geekButton}</button></div>
          <div><button onClick={this.nerdIncrease}>{this.state.nerdButton}</button></div>
                </div>
          

        <div>

                </div>
                {/* <div className="nerdSide"><p>NERDS</p></div>
                <div className="geekSide"><p>GEEKS</p></div> */}
               
                
            </div>
            </div>
        );
    }
}

export default Status;