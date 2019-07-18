import React, { Component } from 'react';
import './style.css'
import { Line, Circle } from 'rc-progress';
// import * from './Questions.js'
class Status extends Component {
    constructor(props){
        super(props)
        this.state = {
            questions: [],
            questionsOutside: [
                "1","2","4","6","7"
            ],
            score: 0,
            NerdPercentage:0,
        }
    }

    handleScore(evt){
        evt.preventDefault();
        this.setState({
            score: this.state.score + evt.target.value
        })
    }
    render(){
        let base = {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
        }

        let quiz = this.state.questionsOutside.map(item=>{
            return (
                <p>{item}</p>
            )
        }) 


        console.log(this.state.questionsOutside)
        return (
            <div>
                
            <div style={base}>
            <section>
                <Circle percent="10" strokeWidth="4" trailWidth = "5" strokeColor="#D3D3D3" trailColor="red">info</Circle>
                </section>
                <div>
{quiz}
{this.state.score}
 <form>
                    <label><input type="radio" name="rating" value="1"/>1</label>
                    <label><input type="radio" name="rating" value="2"></input>2</label>
                    <label><input type="radio" name="rating" value="3"></input>3</label>
                    <label><input type="radio" name="rating" value="4"></input>4</label>
                    <label><input type="radio" name="rating" value="5"></input>5</label>
                    <label><input type="radio" name="rating" value="6"></input>6</label>
                    <label><input type="radio" name="rating" value="7"></input>7</label>
                    <label><input type="radio" name="rating" value="8"></input>8</label>
                    <label><input type="radio" name="rating" value="9"></input>9</label>
                    <label><input type="radio" name="rating" value="10"></input>10</label>
                    <input type="submit" name="submit" value="Choose"></input>

                </form>
                </div>
                {/* <div className="nerdSide"><p>NERDS</p></div>
                <div className="geekSide"><p>GEEKS</p></div> */}
               
                
            </div>
            </div>
        );
    }
}

export default Status;