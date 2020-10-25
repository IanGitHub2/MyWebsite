import React from 'react'
import './aboutMe.css'


export default class aboutMe extends React.Component {
    render(){
        return(
            <div id='aboutmehousing'>
             <div id='aboutcontainer'>
                <div id='aboutheader'>About Me</div>
             </div>
             <div id='abouttextcontainer'>
                 <p id='aboutsum'>I started learning to program by myself after I graduated from high school in 2019. I quickly learned it would take a long time to teach myself different programming languages and to understand the core concepts of programming. So I searched for a bootcamp that would accelerate my learning in programming. I also wanted to gain insight into the programming world from developers that had recently or were currently working in that space. So I attended the “General Assembly”. They quickly boosted my knowledge of programming and taught me to think like a programmer. So Building projects on my own and solving issues that would arise. I spent about 480 hours programming there and many more hours building my knowledge of different programming languages sitting at the back tables and at home. Since I have completed that course I have continued to educate myself in things like <p className='programminglan'> Angular, Java, Animation</p> and more. I am most skilled at working with <p className='programminglan'> Javascript, Node.js, MongoDB, Express, Django, Python</p> and I am constantly adding to that list.   </p>
             </div>
          </div>
        )
    }
}