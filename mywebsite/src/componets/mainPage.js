import React from "react";
import Aboutme from './aboutMe'
import Skills from './skills'
import Socialmedia from './socialMedia'
import Myprojects from './myProjects'
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
          <Aboutme/>
          <Skills/>
          <Socialmedia/>
          <Myprojects/>
         </div>
     )
 }
}