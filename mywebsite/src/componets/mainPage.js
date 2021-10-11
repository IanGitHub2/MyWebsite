import React from "react";
import Aboutme from './aboutSection/aboutMe'
import Skills from './skillSection/skills'
import Socialmedia from './socialSection/socialMedia'
import Myprojects from './projectSection/myProjects'
//import { Link } from 'react-router-dom'
import './mainPage.css'

export default class mainPage extends React.Component {

componetDidMount(){
    console.log('mainPage mounted')
}

render(){
    return(
        <div>
            <div id='welcomecontainer'>
                <div id='welcomeheaderbackground'>
                    <p id='welcometext'>Welcome</p>
                    <p id='nametext'>I'm Ian Kincaid</p>
                    <p id='jobtext'>Software Engineer</p>
                </div>
            </div>
            <div id='middlesection'>
                <Aboutme/>
                <Skills/>
                <Socialmedia/>
            </div>
            <Myprojects/>
        </div>
    )
}
}