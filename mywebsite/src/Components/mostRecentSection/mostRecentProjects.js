import React from 'react';
import { JavascriptLogo, ReactLogo, TailwindLogo, VSCODELogo, DashBoardBanner, SyncfusionLogo, ReactIconLogo, ReactRDLogo, NextjsLogo, SassLogo, NextjsPracticeBanner } from '../../Links/ImgLinks';
import { dashboardWeb, nextjspracticeWeb } from '../../Links/WebsiteLinks';
import { nextjspracticeCod, dashboardCod } from '../../Links/GitHubLinks';

export default class mostRecentProjects extends React.Component{
    render(){
        return(
            <div className='grid grid-cols-2 mx-4 gap-2'>
                <div className='col-span-2 text-left text-sky-700 text-2xl font-semibold'>
                    <div>Most Recent Projects</div>
                </div>

                <div className='md:col-span-1 col-span-2'>
                    <div className='text-left text-sky-500 text-xl'>
                        <div>Next.js Practice App</div>
                    </div>
                    <div className='grid grid-flow-col grid-rows-none justify-center gap-x-1'>
                        <div className='w-8 h-8 bg-sky-200 rounded-md'>
                            <img className='w-5 h-5 rounded-md inline' alt='VS Code Logo' src={VSCODELogo}/>
                        </div>
                        <div className='w-8 h-8 bg-sky-200 rounded-md justify-center '>
                            <img className='w-5 h-5 rounded-md inline' alt='Javascript Logo' src={JavascriptLogo}/>
                        </div>
                        <div className='w-8 h-8 bg-sky-200 rounded-md'>
                            <img className='w-5 h-5 rounded-md inline' alt='Next Logo' src={NextjsLogo}/>
                        </div>
                        <div className='w-8 h-8 bg-sky-200 rounded-md'>
                            <img className='w-5 h-5 rounded-md inline' alt='React Logo' src={ReactLogo}/>
                        </div>
                        <div className='w-8 h-8 bg-sky-200 rounded-md'>
                            <img className='w-5 h-5 rounded-md inline' alt='Sass Logo' src={SassLogo}/>
                        </div>
                    </div>
                    <div>
                        <img className='rounded-md' alt='Next.js App' src={NextjsPracticeBanner}/>
                    </div>
                    <div className='grid grid-flow-col grid-rows-2'>
                    {/* <span className='font-bold text-red-600'>Under Construction. Text filler:</span> */}
                        <div className='col-span-1 row-span-2 text-left text-sm'>A small Next.js 13 project. To learn what and how Next.js differs from React.js.</div>
                        <div className='col-span-1 row-span-1 self-center text-sky-700 hover:text-sky-400 underline underline-offset-2 font-medium'>
                            <a target="_blank" rel="noopener noreferrer" href={nextjspracticeWeb}>
                                <div>Web Link</div>
                            </a>
                        </div>
                        <div className='col-span-1 row-span-1 self-center text-sky-700 hover:text-sky-400 underline underline-offset-2 font-medium'>
                            <a target="_blank" rel="noopener noreferrer" href={nextjspracticeCod}>
                                <div>Code Link</div>
                            </a>
                        </div>
                    </div>
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


            </div>
        )
    }
}