import React, { Component } from 'react';
import RubberBand from 'react-reveal/RubberBand';
import './style.css'
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

class DefineNG extends Component {
    render() {
        return (
            <div className="mainNG">
                <section className="ngHeader">
                    <h1>Find out your percentage of Nerdy - Geeky ways</h1>
                    <Link to="/status">
                    <button>Nerd vs Geek</button>
                    </Link>
                </section>


                 <section className="gridNG">
                <div className="Nerd">
                    <RubberBand>
          <h1>NERDS</h1>
        </RubberBand>

       
        <Card>
            <Card.Body>
                
        <p>A studious intellectual, although again of a particular topic or field. Nerds are “achievement” oriented, and focus their efforts on acquiring knowledge and skill over trivia and memorabilia.</p>
            </Card.Body>
        </Card>
        <Card>
        <Card.Body>
        <ul className="leftSide">
            <li>intellectual</li>
            <li>Most likely to enjoy educational lectures</li>
            <li>Can be quirky</li>
            <li></li>
        </ul>
            </Card.Body>
        </Card>
        
       

        </div>
                
                <div className="Geek"><RubberBand>
          <h1>GEEKS</h1>
        </RubberBand>
        <Card>
            <Card.Body>
            <p>An enthusiast of a particular topic or field. Geeks are “collection” oriented, gathering facts and mementos related to their subject of interest. They are obsessed with the newest, coolest, trendiest things that their subject has to offer.</p>

            </Card.Body>
        </Card>
        <Card>
        <Card.Body>
        <ul className="leftSide">
            <li>Interest in Pop culture</li>
            <li>Can be quirky</li>
            <li>Most likely have collections of popular items from movies or books</li>
            <li></li>
        </ul>
            </Card.Body>
        </Card>
        
        </div>
            </section>
            <small>
                information based on : https://bigthink.com/laurie-vazquez/are-you-a-geek-or-a-nerd
            </small>
            </div>
           
        );
    }
}

export default DefineNG;