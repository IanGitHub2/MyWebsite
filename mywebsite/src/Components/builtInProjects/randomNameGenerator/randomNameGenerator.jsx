import React from 'react';
import FirstNames from './firstNames.json';
import LastNames from './lastNames.json';
import './randomNG.css'

function capFirst(string) {
    return string?.charAt(0).toUpperCase() + string?.slice(1);
}

function getRandomInt(min, max) {
  	return Math.floor(Math.random() * (max - min)) + min;
}

function generateName(){
	var first_name = FirstNames;

	var last_name = LastNames;

	var name = capFirst(first_name[getRandomInt(0, first_name.length )]) + ' ' + capFirst(last_name[getRandomInt(0, last_name.length )]);
    document.getElementById("random_name").innerHTML = name;
}

export default class randomNameGenerator extends React.Component {

render() {
    return(
        <div>
            <div id="name_background">
                <h2 id="random_name">Name</h2>
            </div>
            <div>
                <input id="generator_button" type="button" value="Generate Random Name" onClick={generateName}></input>
            </div>
        </div>
        )
    }
}