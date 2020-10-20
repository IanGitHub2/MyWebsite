import React from 'react';
import './myProjects.css'

export default class myProjects extends React.Component {
    render(){
        return(
            <div>
              <div id='projectsheader'>My Projects</div>
              <div id='projectsContainer'>
                <div id='eachproject'>
                    <div className='projecttitle'>Connect 4</div>
                    <a href='https://infallible-mcnulty-f386b4.netlify.app' target="_blank" rel='noopener noreferrer'>Link to website</a>
                    <div> Connect 4 give it a try.</div>
                    <img alt='Connect 4' src='./connect4.png'/>
                </div>
                <div id='eachproject'>
                    <div className='projecttitle'>Movie Site</div>
                    <a href='https://brave-nobel-691c58.netlify.app' target="_blank" rel='noopener noreferrer'>Link to website</a>
                    <div> A parody of say netflix or hulu.</div>
                </div>
                <div id='eachproject'>
                    <div className='projecttitle'>Rush</div>
                    <a href='https://rush-project-3.herokuapp.com/' target="_blank" rel='noopener noreferrer'>Link to website</a>
                    <div> Rush is like a social media website.</div>
                </div>
                <div id='eachproject'>
                    <div className='projecttitle'>C.P.S</div>
                    <a href='https://infinite-badlands-56464.herokuapp.com/company/' target="_blank" rel='noopener noreferrer'>Link to website</a>
                    <div>C.P.S stands for Company / Products / Sellers</div>
                </div>
              </div>
            </div>
        )
    }
}