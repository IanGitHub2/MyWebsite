import React from 'react';
import { LinkedInLogo, EmailLogo, GithubLogo, LeetcodeLogo, CodeSignalLogo } from '../../Links/ImgLinks';


export default class aboutMe extends React.Component {
    render(){
        return(
            <div className='grid grid-cols-none px-4'>
                <div className='my-3 text-left'>
                    <div className='text-2xl text-sky-700 font-semibold'>
                        <div >About Me</div>
                    </div>
                    <div className='text-sm'>
                        <div>Building new and different things brings me joy. Developing applications of varying degrees keeps my attention while pushing me to learn more. I have worked with Frontend and Backend. I mainly build Frontend and smaller Fullstack apps as they are quicker to build and allow for study of new and different concepts. I have been programming for 3 years, some educational from a bootcamp and the rest self study using internet programs. Such as Codecademy, Leetcode, Codesignal, W3Schools, MDN Web Docs (Mozilla), Edabit, Stack Overflow, Stack Exchange, CodePen. I find most enjoyable the mystery in solving a problem from a bug to a new way of tackling an issue in a given programming language or making an algorithm more efficient. Hopefully one day I will have several in production applications that help people in their day's to show off. </div>
                    </div>
                </div>
                <div className='my-1 text-left'>
                    <div className='text-2xl text-sky-700 font-semibold'>
                        <div>Currently Studying</div>
                    </div>
                    <div className='text-sm'>More Next.js and maybe a Fullstack Java App.</div>
                </div>
                <div className='my-3 '>
                    <div className='text-left text-xl text-sky-700 font-semibold'>
                        <div>Get in touch</div>
                    </div>
                    <div className='flex gap-2'>
                        <div>
                            <a target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/ian-kincaid-74a82714a/'>
                                <img alt='Linkedin' src={LinkedInLogo} className='w-10 h-10 inline'/>
                                <div className='text-sky-500 text-sm underline underline-offset-2 hover:text-sky-800'>LinkedIn Link</div>
                            </a>
                        </div>
                        <div>
                            <a target="_blank" rel="noopener noreferrer" href='https://mail.google.com/mail/?view=cm&fs=1&to=ikbusinessacct@gmail.com&su=SUBJECT&body=BODY'>
                                <img alt='Email' src={EmailLogo} className='w-10 h-10 inline'/>
                                <div className='text-sky-500 text-sm underline underline-offset-2 hover:text-sky-800'>Email Link</div>
                            </a>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='text-left text-xl text-sky-700 font-semibold'>
                        <div>See More...</div>
                    </div>
                    <div className='flex gap-2'>
                        <div>
                            <a target="_blank" rel="noopener noreferrer" href='https://github.com/IanGitHub2'>
                                <img alt='Github' src={GithubLogo} className='w-10 h-10 inline'/>
                                <div className='text-sky-500 text-sm underline underline-offset-2 hover:text-sky-800'>Github Link</div>
                            </a>
                        </div>
                        <div>
                            <a target='_blank' rel='noopener noreferrer' href='https://leetcode.com/IANleet1/'>
                                <img alt='Leetcode' src={LeetcodeLogo} className='w-10 h-10 inline'/>
                                <div className='text-sky-500 text-sm underline underline-offset-2 hover:text-sky-800'>Leetcode Link</div>
                            </a>
                        </div>
                        <div>
                            <a target='_blank' rel='noopener noreferrer' href='https://app.codesignal.com/profile/ian_k31'>
                                <img alt='Codesignal' src={CodeSignalLogo} className='w-10 h-10 inline'/>
                                <div className='text-sky-500 text-sm underline underline-offset-2 hover:text-sky-800'>CodeSignal Link</div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}