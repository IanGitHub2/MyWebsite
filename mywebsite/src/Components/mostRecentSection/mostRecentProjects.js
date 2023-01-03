import React from 'react';
import { JavascriptLogo, ReactLogo, socialMediaBanner, TailwindLogo, VSCODELogo, GoogleAuthLibLogo, DashBoardBanner, SyncfusionLogo, SanityLogo, ReactIconLogo, ReactRDLogo } from '../../Links/ImgLinks';
import { dashboardWeb, sharesocialWeb } from '../../Links/WebsiteLinks';
import { sharesocialCod, dashboardCod } from '../../Links/GitHubLinks';

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
                            <img className='w-5 h-5 rounded-md inline' alt='React Router Dom Logo' src={ReactRDLogo}/>
                        </div>
                        <div className='w-8 h-8 bg-sky-200 rounded-md'>
                            <img className='w-5 h-5 rounded-md inline' alt='Syncfusion Logo' src={SyncfusionLogo}/>
                        </div>
                        <div className='w-8 h-8 bg-sky-200 rounded-md'>
                                <img className='w-5 h-5 rounded-md inline' alt='Tailwind Logo' src={TailwindLogo}/>
                        </div>
                        <div className='w-8 h-8 bg-sky-200 rounded-md'>
                                <img className='w-5 h-5 rounded-md inline' alt='React-Icon Logo' src={ReactIconLogo}/>
                        </div>
                    </div>
                    <div>
                        <img className='rounded-md' alt='Dashboard App' src={DashBoardBanner}/>
                    </div>
                    <div className='grid grid-flow-col grid-rows-2'>
                    {/* <span className='font-bold text-red-600'>Under Construction. Text filler:</span> */}
                        <div className='col-span-1 row-span-2 text-left text-sm'>DashBoard App-Syncfusion applies the data it's given to different chart components. While tailwind styles each component. React Icons are used so buttons are easier to understand.</div>
                        <div className='col-span-1 row-span-1 self-center text-sky-700 hover:text-sky-400 underline underline-offset-2 font-medium'>
                            <a target="_blank" rel="noopener noreferrer" href={dashboardWeb}>
                                <div>Web Link</div>
                            </a>
                        </div>
                        <div className='col-span-1 row-span-1 self-center text-sky-700 hover:text-sky-400 underline underline-offset-2 font-medium'>
                            <a target="_blank" rel="noopener noreferrer" href={dashboardCod}>
                                <div>Code Link</div>
                            </a>
                        </div>
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
                            <img className='w-5 h-5 rounded-md inline' alt='React Router Dom Logo' src={ReactRDLogo}/>
                        </div>
                        <div className='w-8 h-8 bg-sky-200 rounded-md'>
                                <img className='w-5 h-5 rounded-md inline' alt='React-Icon Logo' src={ReactIconLogo}/>
                        </div>
                        <div className='w-8 h-8 bg-sky-200 rounded-md'>
                                <img className='w-5 h-5 rounded-md inline' alt='Tailwind Logo' src={TailwindLogo}/>
                        </div>
                        <div className='w-8 h-8 bg-sky-200 rounded-md'>
                                <img className='w-5 h-5 rounded-md inline' alt='Sanity Logo' src={SanityLogo}/>
                        </div>
                        <div className='w-8 h-8 bg-sky-200 rounded-md'>
                                <img className='w-5 h-5 rounded-md inline' alt='Google Auth Logo' src={GoogleAuthLibLogo}/>
                        </div>
                    </div>
                    <div>
                        <img className='rounded-md' alt='Social Media App' src={socialMediaBanner}/>
                    </div>
                    <div className='grid grid-flow-col grid-rows-2'>
                        <div className='col-span-1 row-span-2 text-left text-sm'>Full Stack Application. Sanity is used for Front-end and Back-end. CRUD App so you can create, read, update, delete. Google Auth login allows for individual accounts. Different categories. Individual pages for posts that can be commented on. Also a suggestion area below for posts that are similar.</div>
                        <div className='col-span-1 row-span-1 self-center text-sky-700 hover:text-sky-400 underline underline-offset-2 font-medium'>
                            <a target="_blank" rel="noopener noreferrer" href={sharesocialWeb}>
                                <div>Web Link</div>
                            </a>
                        </div>
                        <div className='col-span-1 row-span-1 self-center text-sky-700 hover:text-sky-400 underline underline-offset-2 font-medium'>
                            <a target="_blank" rel="noopener noreferrer" href={sharesocialCod}>
                                <div>Code Link</div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}