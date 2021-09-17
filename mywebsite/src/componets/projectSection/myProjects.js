import React from 'react';
import './myProjects.css';
import Connect4 from '../../images/connectgame.png';
import Homemovies from '../../images/homemovies.png';
import Cps from '../../images/cps.png';
import Rush from '../../images/rush.png';
import Clock from '../builtInProjects/clock/clock';
import Calculator from '../builtInProjects/calculator/calculator';
import SortingVisualizer from '../builtInProjects/SortingVisualizer/sortingVisualizer'

export default class myProjects extends React.Component {
    render(){
        return(
            <div>
                <div id='projecthousing'>
                    <div id='projectsheader'>My Projects</div>
                    <div id='projectsContainer'>

                        <div id='eachproject'>
                            <div className='projecttitle'>Links for built in projects</div>
                            <div className='linknavbar'>
                                <a href='https://github.com/IanGitHub2/MyWebsite/tree/main/mywebsite/src/componets/builtInProjects/clock' target="_blank" rel='noopener noreferrer'><div className='linktext'>Link to Clock Code</div></a>
                                <a href='https://github.com/IanGitHub2/MyWebsite/tree/main/mywebsite/src/componets/builtInProjects/calculator' target="_blank" rel='noopener noreferrer'><div className='linktext'>Link to Calculator Code</div></a>
                                <a href='https://github.com/IanGitHub2/MyWebsite/tree/main/mywebsite/src/componets/builtInProjects/bubbleSort' target="_blank" rel='noopener noreferrer'><div className='linktext'>Link to Sorting Code</div></a>
                            </div>
                        </div>

                        <div id='eachproject'>
                            <div className='projecttitle'>Built in Sorting 'Alg'</div>
                            <SortingVisualizer/>
                        </div>

                        <div id='eachproject'>
                            <div className='projecttitle'>Built in Calculator</div>
                            <Calculator/>
                        </div>

                        <div id='eachproject'>
                            <div className='projecttitle'>Built in Clock</div>
                            <Clock/>
                            <div className='clockstuff'>i</div>
                        </div>

                        <div id='eachproject'>
                            <div className='projecttitle'>Movie Site</div>
                            <img className='projectimages' alt='Home Movies' src={Homemovies}/>
                        <div className='linknavbar'>
                            <a href='https://brave-nobel-691c58.netlify.app' target="_blank" rel='noopener noreferrer'><div className='linktext'>Link to Website</div></a>
                            <a href='https://github.com/IanGitHub2/Home-Movies' target="_blank" rel='noopener noreferrer'><div className='linktext'>Link to Code</div></a>
                        </div>
                        <div className='projectdef'>This is a front-end app that is meant to be my take on a streaming platform. Made using Create-react-app, and some CSS.</div>
                        </div>

                        <div id='eachproject'>
                            <div className='projecttitle'>Connect 4</div>
                            <img className='projectimages' alt='Connect 4' src={Connect4}/>
                        <div className='linknavbar'>
                            <a href='https://infallible-mcnulty-f386b4.netlify.app' target="_blank" rel='noopener noreferrer'><div className='linktext'>Link to Website</div></a>
                            <a href='https://github.com/IanGitHub2/Project-1---Connect-4' target="_blank" rel='noopener noreferrer'><div className='linktext'>Link to Code</div></a>
                        </div>
                        <div className='projectdef'> Connect 4 was one of my first projects that had me working with for loops and if else statements to create a game. Made with Javascript, HTML, CSS, Bootstrap.</div>
                        </div>

                        <div id='eachproject'>
                            <div className='projecttitle'>Rush</div>
                            <img className='projectimages' alt='Rush' src={Rush}/>
                        <div className='linknavbar'>
                            <a href='https://rush-project-3.herokuapp.com/' target="_blank" rel='noopener noreferrer'><div className='linktext'>Link to Website</div></a>
                            <a href='https://github.com/IanGitHub2/Project3Rush' target="_blank" rel='noopener noreferrer'><div className='linktext'>Link to Code</div></a>
                        </div>
                        <div className='projectdef'>Rush is a site to post pictures of things you like, their cost and more. Made with the MERN template stack, CSS. </div>
                        </div>

                        <div id='eachproject'>
                            <div className='projecttitle'>C.P.S</div>
                            <img className='projectimages' alt='CPS' src={Cps}/>
                        <div className='linknavbar'>
                            <a href='https://infinite-badlands-56464.herokuapp.com/company/' target="_blank" rel='noopener noreferrer'><div className='linktext'>Link to Website</div></a>
                            <a href='https://github.com/IanGitHub2/Project-2-C.P.S' target="_blank" rel='noopener noreferrer'><div className='linktext'>Link to Code</div></a>
                        </div>
                        <div className='projectdef'>C.P.S or Companies, Products, Sellers was a project to teach me how to pass data using express and mongodb. Made with the MERN template stack, CSS.</div>
                        </div>

                        <div id='eachproject'>
                            <div className='projecttitle'>Bike Repair</div>
                            <img className='projectimages' alt='CPS' src='data:image/png;base64,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'/>
                        <div className='linknavbar'>
                            <a href='https://git.generalassemb.ly/IanGtHbE1/feral-code' target="_blank" rel='noopener noreferrer'><div className='linktext'>Link to Code</div></a>
                        </div>
                        <div className='projectdef'>Bike repair app was the project that brought what I had learned from python, django, react, axios, react-router-dom and brought it together to create this. Made with React, Python, Django, CSS.</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}