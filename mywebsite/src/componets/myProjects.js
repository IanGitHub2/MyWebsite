import React from 'react';
import { Link } from 'react-router-dom'
import './myProjects.css'

export default class myProjects extends React.Component {
    render(){
        return(
            <div>
              <div id='projectsContainer'>
                <div id='projectsheader'>My Projects</div>
                <div id='eachproject'>
                    <div className='projecttitle'>Connect 4</div>
                    <Link to={'https://infallible-mcnulty-f386b4.netlify.app'}>
                    <div>Link to website</div>
                    </Link>
                    <div> Connect 4 give it a try.</div>
                </div>
                <div id='eachproject'>
                    <div className='projecttitle'>Movie Site</div>
                    <Link to={'https://brave-nobel-691c58.netlify.app'}>
                    <div>Link to website</div>
                    </Link>
                    <div> A parody of say netflix or hulu.</div>
                </div>
                <div id='eachproject'>
                    <div className='projecttitle'>Rush</div>
                    <Link to={'https://rush-project-3.herokuapp.com/'}>
                    <div>Link to website</div>
                    </Link>
                    <div> Rush is like a social media website.</div>
                </div>
                <div id='eachproject'>
                    <div className='projecttitle'>C.P.S</div>
                    <Link to={'https://infinite-badlands-56464.herokuapp.com/company/'}>
                    <div>Link to website</div>
                    </Link>
                    <div>C.P.S stands for Company / Products / Sellers</div>
                </div>
              </div>
            </div>
        )
    }
}