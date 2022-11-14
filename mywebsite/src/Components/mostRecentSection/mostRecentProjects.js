import React from 'react';
import { JavascriptLogo, ReactLogo, MUILogo, socialMediaBanner, TailwindLogo, VSCODELogo, GoogleAuthLibLogo } from '../../Links/ImgLinks';
import { DashBoard } from '../../images'

export default class mostRecentProjects extends React.Component{
    render(){
        return(
            <div className='grid grid-cols-2 mx-4 gap-2'>
                <div className='col-span-2 text-left text-sky-700 text-2xl font-semibold'>
                    <div>Most Recent Projects</div>
                </div>

                <div className='md:col-span-1 col-span-2'>
                    <div className='text-left text-sky-500 text-xl'>
                        <div>Dashboard</div>
                    </div>
                    <div className='grid grid-flow-col grid-rows-none justify-center gap-x-1'>
                        <div className='w-8 h-8 bg-sky-200 rounded-md'>
                                <img className='w-5 h-5 rounded-md inline' alt='VS Code Logo' src={VSCODELogo}/>
                            </div>
                        <div className='w-8 h-8 bg-sky-200 rounded-md justify-center '>
                            <img className='w-5 h-5 rounded-md inline' alt='Javascript Logo' src={JavascriptLogo}/>
                        </div>
                        <div className='w-8 h-8 bg-sky-200 rounded-md'>
                            <img className='w-5 h-5 rounded-md inline' alt='React Logo' src={ReactLogo}/>
                        </div>
                        <div className='w-8 h-8 bg-sky-200 rounded-md'>
                            <img className='w-5 h-5 rounded-md inline' alt='Material-UI Logo' src={MUILogo}/>
                        </div>
                        <div className='w-8 h-8 bg-sky-200 rounded-md'>
                                <img className='w-5 h-5 rounded-md inline' alt='Tailwind Logo' src={TailwindLogo}/>
                        </div>
                    </div>
                    <div>
                        <img className='rounded-md' alt='Dashboard App' src={DashBoard}/>
                    </div>
                    <div className='grid grid-flow-col grid-rows-2'>
                        <div className='col-span-1 row-span-2 text-left text-sm'><span className='font-bold text-red-600'>Under Construction. Text filler:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Id fugit incidunt laboriosam suscipit sit. Facilis blanditiis et, optio nulla, illo dignissimos dicta qui aut mollitia cumque quae aliquid, sapiente adipisci?</div>
                        <div className='col-span-1 row-span-1 self-center text-sky-700 hover:text-sky-400 underline underline-offset-2 font-medium'>Web Link</div>
                        <div className='col-span-1 row-span-1 self-center text-sky-700 hover:text-sky-400 underline underline-offset-2 font-medium'>Code Link</div>
                    </div>
                </div>

                <div className='md:col-span-1 col-span-2'>
                    <div className='text-left text-sky-500 text-xl'>
                        <div>Share Social App</div>
                    </div>
                    <div className='grid grid-flow-col grid-rows-none justify-center gap-x-1'>
                        <div className='w-8 h-8 bg-sky-200 rounded-md'>
                                <img className='w-5 h-5 rounded-md inline' alt='VS Code Logo' src={VSCODELogo}/>
                            </div>
                        <div className='w-8 h-8 bg-sky-200 rounded-md justify-center '>
                            <img className='w-5 h-5 rounded-md inline' alt='Javascript Logo' src={JavascriptLogo}/>
                        </div>
                        <div className='w-8 h-8 bg-sky-200 rounded-md'>
                            <img className='w-5 h-5 rounded-md inline' alt='React Logo' src={ReactLogo}/>
                        </div>
                        <div className='w-8 h-8 bg-sky-200 rounded-md'>
                            <img className='w-5 h-5 rounded-md inline' alt='Material-UI' src={MUILogo}/>
                        </div>
                        <div className='w-8 h-8 bg-sky-200 rounded-md'>
                                <img className='w-5 h-5 rounded-md inline' alt='Tailwind Logo' src={TailwindLogo}/>
                        </div>
                        <div className='w-8 h-8 bg-sky-200 rounded-md'>
                                <img className='w-5 h-5 rounded-md inline' alt='Google Auth Logo' src={GoogleAuthLibLogo}/>
                        </div>
                    </div>
                    <div>
                        <img className='rounded-md' alt='Social Media App' src={socialMediaBanner}/>
                    </div>
                    <div className='grid grid-flow-col grid-rows-2'>
                        <div className='col-span-1 row-span-2 text-left text-sm'><span className='font-bold text-red-600'>Under Construction. Text filler:</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quidem et, reprehenderit veniam numquam inventore quo possimus maiores magni asperiores ipsum, eius distinctio. Doloribus ipsam necessitatibus porro minus fugiat aut!</div>
                        <div className='col-span-1 row-span-1 self-center text-sky-700 hover:text-sky-400 underline underline-offset-2 font-medium'>
                            <a target="_blank" rel="noopener noreferrer" href='https://share-social-app.netlify.app/'>
                                <div>Web Link</div>
                            </a>
                        </div>
                        <div className='col-span-1 row-span-1 self-center text-sky-700 hover:text-sky-400 underline underline-offset-2 font-medium'>
                            <a target="_blank" rel="noopener noreferrer" href='https://github.com/IanGitHub2/FStack-Social-media-app'>
                                <div>Code Link</div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}