import React from 'react';
import './myProjects.css'
import Connect4 from '../images/connectgame.png'
import Homemovies from '../images/homemovies.png'
import Cps from '../images/cps.png'
import Rush from '../images/rush.png'

export default class myProjects extends React.Component {
    render(){
        return(
            <div>
              <div id='projectsheader'>My Projects</div>
              <div id='projectsContainer'>
                <div id='eachproject'>
                    <div className='projecttitle'>Connect 4</div>
                    <a href='https://infallible-mcnulty-f386b4.netlify.app' target="_blank" rel='noopener noreferrer'>Link to website</a>
                    <div className='projectdef'> Connect 4 give it a try.</div>
                    <img className='projectimages' alt='Connect 4' src={Connect4}/>
                </div>
                <div id='eachproject'>
                    <div className='projecttitle'>Movie Site</div>
                    <a href='https://brave-nobel-691c58.netlify.app' target="_blank" rel='noopener noreferrer'>Link to website</a>
                    <div className='projectdef'> A parody of say netflix or hulu.</div>
                    <img className='projectimages' alt='Connect 4' src={Homemovies}/>
                </div>
                <div id='eachproject'>
                    <div className='projecttitle'>Rush</div>
                    <a href='https://rush-project-3.herokuapp.com/' target="_blank" rel='noopener noreferrer'>Link to website</a>
                    <div className='projectdef'> Rush is like a social media website.</div>
                    <img className='projectimages' alt='Connect 4' src={Rush}/>
                </div>
                <div id='eachproject'>
                    <div className='projecttitle'>C.P.S</div>
                    <a href='https://infinite-badlands-56464.herokuapp.com/company/' target="_blank" rel='noopener noreferrer'>Link to website</a>
                    <div className='projectdef'>C.P.S stands for Company / Products / Sellers</div>
                    <img className='projectimages' alt='Connect 4' src={Cps}/>
                </div>
              </div>
            </div>
        )
    }
}