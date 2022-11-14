import React from "react";
import Aboutme from './aboutSection/aboutMe'
import Skills from './skillSection/skills';
import MostRecentProjects from './mostRecentSection/mostRecentProjects';
import Myprojects from './projectSection/myProjects';
//import { Link } from 'react-router-dom';

export default class mainPage extends React.Component {

componetDidMount(){
    console.log('mainPage mounted')
}

render(){
    return(
        <div className="grid grid-cols-2 auto-rows-auto">
            <div className="col-span-2 ">
                <p>
                    <span className="text-5xl text-sky-700 font-semibold">Ian Kincaid</span>
                    <span className="text-3xl text-sky-500 font-semibold block">Software Engineer</span>
                </p>
            </div>
            <div className='col-span-2'>
                <Skills/>
            </div>
            <div className='md:col-span-1 col-span-2'>
                <Aboutme/>
            </div>
            <div className='md:col-span-1 col-span-2'>
                <MostRecentProjects/>
            </div>
            <div className='col-span-2'>
                <Myprojects/>
            </div>
        </div>
    )
}
}