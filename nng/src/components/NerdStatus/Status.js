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
            nerdButton:'Dr. Who',
            geekButton:'Dr. Strange',
            geekImage:'http://www.artscrazy.com/sei30/nng/strange.jpg',
            nerdImage:'http://www.artscrazy.com/sei30/nng/who.jpg',
            counter: 1,
            infoButton: [
                {geek: 'Dr. Strange',  
                nerd: 'Dr. Who',
                geeksrc: 'http://www.artscrazy.com/sei30/nng/strange.jpg',
                nerdsrc: 'http://www.artscrazy.com/sei30/nng/who.jpg',},
                {geek: 'Guardians of the Galaxy',  
                nerd: 'Hitchhiker`s guide to the galaxy',
                geeksrc:'http://www.artscrazy.com/sei30/nng/guardians.jpg', 
                nerdsrc:'http://www.artscrazy.com/sei30/nng/hitchhiker.jpg',},
                {geek: 'Star Wars',  
                nerd: 'Star Trek',
                geeksrc: 'http://www.artscrazy.com/sei30/nng/starwarsmovie.jpg',
                nerdsrc: 'http://www.artscrazy.com/sei30/nng/startrekmovie.jpg',},
                {geek: 'Professor Charles Xavier',  
                nerd: 'Professor Stephen Hawkins',
                geeksrc: 'http://www.artscrazy.com/sei30/nng/xavier.jpg',
                nerdsrc:'http://www.artscrazy.com/sei30/nng/hawkings.jpg',},
                {geek: 'Dungeons and Dragons',  
                nerd: 'Chess',
                geeksrc: 'http://www.artscrazy.com/sei30/nng/dndgame.jpg',
                nerdsrc:'http://www.artscrazy.com/sei30/nng/chess.jpg',},
                {geek: 'Tron',      
                nerd: 'Matrix',
                geeksrc: 'http://www.artscrazy.com/sei30/nng/tronmovie.jpg',
                nerdsrc:'http://www.artscrazy.com/sei30/nng/matrixmovie.jpg',},
                {geek: 'Pikachu',  
                nerd: 'Mewtwo',
                geeksrc:'http://www.artscrazy.com/sei30/nng/pikachuu.jpg', 
                nerdsrc: 'http://www.artscrazy.com/sei30/nng/mewto.jpg',},
                {geek: 'Indiana Jones',  
                nerd: 'Steve Irwin',
                geeksrc: 'http://www.artscrazy.com/sei30/nng/jones.jpg',
                nerdsrc: 'http://www.artscrazy.com/sei30/nng/irwin.jpg',},
                {geek: 'Aliens guy',  
                nerd: 'Neil Degrasse Tyson',
                geeksrc: 'http://www.artscrazy.com/sei30/nng/aliens.jpg',
                nerdsrc: 'http://www.artscrazy.com/sei30/nng/neild.jpg',},
                {geek: 'Rick and Morty',  
                nerd: 'Adam Savage and Jamie Hyneman',
                geeksrc: 'http://www.artscrazy.com/sei30/nng/rick.jpg', 
                nerdsrc: 'http://www.artscrazy.com/sei30/nng/adam.jpg',},

            ]
        }
    }
    quiz = (x)=> {
        return(
            this.setState({
                mainQuestion: this.state.questions[x],
                geekButton: this.state.infoButton[x].geek,
                nerdButton: this.state.infoButton[x].nerd,
                geekImage: this.state.infoButton[x].geeksrc,
                nerdImage: this.state.infoButton[x].nerdsrc,
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
        
        return (
            <div>
                
                <div> <h1>{this.state.mainQuestion}</h1> </div>
        <div className="base">
                  <section>
                  <Spin spy={this.state.counter}>
                <Circle className="circle" percent={this.state.nerdPercentage} strokeWidth="10" trailWidth = "7" strokeColor="purple" trailColor="green"></Circle>
                </Spin>
                </section>
                <div className="quizChoices">
                    <img src={this.state.geekImage}></img><br></br>
                    <button className="Nerd" onClick={this.geekIncrease}>{this.state.geekButton}</button></div>


          <div className="quizChoices">
          <img src={this.state.nerdImage}></img><br></br>
              <button className="Geek" onClick={this.nerdIncrease}>{this.state.nerdButton}</button>
            
                </div>
                
               
                
            </div>
            </div>
        );
    }
}

export default Status;