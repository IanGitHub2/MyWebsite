import React from 'react';
import { JavascriptLogo, ReactLogo, PythonLogo, DjangoLogo, AngularLogo, JavaLogo, SqlLogo, NodeLogo, MongoDBLogo, ExpressLogo, MERNLogo, VSCODELogo, PycharmLogo, SublimeLogo, MUILogo, GoogleFontsLogo, StripeLogo, CssLogo, TailwindLogo, HtmlLogo, BootstrapLogo, CommercejsLogo, AxiosLogo, GoogleAuthLibLogo, SyncfusionLogo, SanityLogo, ReactIconLogo, ReactRDLogo, NextjsLogo, SassLogo } from '../../Links/ImgLinks';

export default class skills extends React.Component {
    render(){
        return(
            <div className='mx-1 grid grid-cols-none grid-rows-1 grid-flow-row-dense'>
                <div className=' text-left text-sky-700 font-semibold text-2xl'>
                    <div >Skills</div>
                </div>
                <div className='grid grid-flow-col grid-rows-none gap-x-1 py-4 overflow-x-auto text-xs'>
                    {/* IDE comment */}
                    <div className='py-2 px-2 w-12 h-10 text-sky-700 font-semibold justify-center place-self-center underline underline-offset-2'>
                        <div>IDE</div>
                    </div>
                    <div className='py-2 px-2 w-max h-16 bg-sky-200 text-sky-800 rounded-md'>
                        <img className='w-10 h-10 rounded-md inline' alt='VSCODE' src={VSCODELogo}/>
                        <div>VScode</div>
                    </div>
                    <div className='py-2 px-2 w-max h-16 bg-sky-200 text-sky-800 rounded-md'>
                        <img className='w-10 h-10 rounded-md inline' alt='Pycharm Logo' src={PycharmLogo}/>
                        <div>Pycharm</div>
                    </div>
                    <div className='py-2 px-2 w-max h-16 bg-sky-200 text-sky-800 rounded-md'>
                        <img className='w-10 h-10 rounded-md inline' alt='Sublime Logo' src={SublimeLogo}/>
                        <div>Sublime</div>
                    </div>

                    {/* Frameworks comment */}
                    <div className='py-2 px-2 w-21 h-10 text-sky-700 font-semibold justify-center place-self-center underline underline-offset-2'>
                        <div>Frameworks</div>
                    </div>
                    <div className='py-2 px-2 w-max h-16 bg-sky-200 text-sky-800 rounded-md'>
                        <img className='w-10 h-10 rounded-md inline' alt='Html logo' src={HtmlLogo}/>
                        <div>HTML</div>
                    </div>
                    <div className='py-2 px-2 w-max h-16 bg-sky-200 text-sky-800 rounded-md'>
                        <img className='w-10 h-10 rounded-md inline' alt='Css logo' src={CssLogo}/>
                        <div>CSS</div>
                    </div>
                    <div className='py-2 px-2 w-max h-16 bg-sky-200 text-sky-800 rounded-md'>
                        <img className='w-10 h-10 rounded-md inline' alt='Java logo' src={JavaLogo}/>
                        <div>Java</div>
                    </div>
                    <div className='py-2 px-2 w-max h-16 bg-sky-200 text-sky-800 rounded-md justify-center '>
                        <img className='w-10 h-10 rounded-md inline ' alt='Javascript Logo' src={JavascriptLogo}/>
                        <div>Javascript</div>
                    </div>
                    <div className='py-2 px-2 w-max h-16 bg-sky-200 text-sky-800 rounded-md'>
                        <img className='w-10 h-10 rounded-md inline' alt='Python Logo' src={PythonLogo}/>
                        <div>Python</div>
                    </div>
                    <div className='py-2 px-2 w-max h-16 bg-sky-200 text-sky-800 rounded-md'>
                        <img className='w-10 h-10 rounded-md inline' alt='Django Logo' src={DjangoLogo}/>
                        <div>Django</div>
                    </div>
                    <div className='py-2 px-2 w-max h-16 bg-sky-200 text-sky-800 rounded-md'>
                        <img className='w-10 h-10 rounded-md inline' alt='Node logo' src={NodeLogo}/>
                        <div>Node.js</div>
                    </div>
                    <div className='py-2 px-2 w-max h-16 bg-sky-200 text-sky-800 rounded-md'>
                        <img className='w-10 h-10 rounded-md inline' alt='Express logo' src={ExpressLogo}/>
                        <div>Express</div>
                    </div>

                    {/* Libraries comment */}
                    <div className='py-2 px-2 w-21 h-10 text-sky-700 font-semibold justify-center place-self-center underline underline-offset-2'>
                        <div >Libraries</div>
                    </div>
                    <div className='py-2 px-2 w-max h-16 bg-sky-200 text-sky-800 rounded-md'>
                        <img className='w-10 h-10 rounded-md inline' alt='React Logo' src={ReactLogo}/>
                        <div>React</div>
                    </div>
                    <div className='py-2 px-2 w-max h-16 bg-sky-200 text-sky-800 rounded-md'>
                        <img className='w-10 h-10 rounded-md inline' alt='Next Logo' src={NextjsLogo}/>
                        <div>Next.js</div>
                    </div>
                    <div className='py-2 px-2 w-max h-16 bg-sky-200 text-sky-800 rounded-md'>
                        <img className='w-10 h-10 rounded-md inline' alt='Angular logo' src={AngularLogo}/>
                        <div>Angular</div>
                    </div>
                    <div className='py-2 px-2 w-max h-16 bg-sky-200 text-sky-800 rounded-md'>
                        <img className='w-10 h-10 rounded-md inline' alt='Material-UI' src={MUILogo}/>
                        <div>Material-UI</div>
                    </div>
                    <div className='py-2 px-2 w-max h-16 bg-sky-200 text-sky-800 rounded-md'>
                        <img className='w-10 h-10 rounded-md inline' alt='Google Fonts' src={GoogleFontsLogo}/>
                        <div>Google Fonts</div>
                    </div>
                    <div className='py-2 px-2 w-max h-16 bg-sky-200 text-sky-800 rounded-md'>
                        <img className='w-10 h-10 rounded-md inline' alt='Strip Logo' src={StripeLogo}/>
                        <div>Stripe</div>
                    </div>
                    <div className='py-2 px-2 w-max h-16 bg-sky-200 text-sky-800 rounded-md'>
                        <img className='w-10 h-10 rounded-md inline' alt='Tailwind Logo' src={TailwindLogo}/>
                        <div>Tailwind</div>
                    </div>
                    <div className='py-2 px-2 w-max h-16 bg-sky-200 text-sky-800 rounded-md'>
                        <img className='w-10 h-10 rounded-md inline' alt='Sass Logo' src={SassLogo}/>
                        <div>Sass</div>
                    </div>
                    <div className='py-2 px-2 w-max h-16 bg-sky-200 text-sky-800 rounded-md'>
                        <img className='w-10 h-10 rounded-md inline' alt='Boot Strap Logo' src={BootstrapLogo}/>
                        <div>Bootstrap</div>
                    </div>
                    <div className='py-2 px-2 w-max h-16 bg-sky-200 text-sky-800 rounded-md'>
                        <img className='w-10 h-10 rounded-md inline' alt='CommerceJS Logo' src={CommercejsLogo}/>
                        <div>Commerce.JS</div>
                    </div>
                    <div className='py-2 px-2 w-max h-16 bg-sky-200 text-sky-800 rounded-md'>
                        <img className='w-10 h-10 rounded-md inline' alt='Sanity Logo' src={SanityLogo}/>
                        <div>Sanity</div>
                    </div>
                    <div className='py-2 px-2 w-max h-16 bg-sky-200 text-sky-800 rounded-md'>
                        <img className='w-10 h-10 rounded-md inline' alt='Syncfusion Logo' src={SyncfusionLogo}/>
                        <div>Syncfusion</div>
                    </div>
                    <div className='py-2 px-2 w-max h-16 bg-sky-200 text-sky-800 rounded-md'>
                        <img className='w-10 h-10 rounded-md inline' alt='Axios Logo' src={AxiosLogo}/>
                        <div>Axios</div>
                    </div>
                    <div className='py-2 px-2 w-max h-16 bg-sky-200 text-sky-800 rounded-md'>
                        <img className='w-10 h-10 rounded-md inline' alt='React Router Dom Logo' src={ReactRDLogo}/>
                        <div>React-Router-Dom</div>
                    </div>
                    <div className='py-2 px-2 w-max h-16 bg-sky-200 text-sky-800 rounded-md'>
                        <img className='w-10 h-10 rounded-md inline' alt='React-Icon Logo' src={ReactIconLogo}/>
                        <div>React-Icon</div>
                    </div>

                    {/* Database comment */}
                    <div className='py-2 px-2 w-21 h-10 text-sky-700 font-semibold justify-center place-self-center underline underline-offset-2'>
                        <div >Databases</div>
                    </div>
                    <div className='py-2 px-2 w-max h-16 bg-sky-200 text-sky-800 rounded-md'>
                        <img className='w-10 h-10 rounded-md inline' alt='Sql logo' src={SqlLogo}/>
                        <div>SQL</div>
                    </div>
                    <div className='py-2 px-2 w-max h-16 bg-sky-200 text-sky-800 rounded-md'>
                        <img className='w-10 h-10 rounded-md inline' alt='MongoDB' src={MongoDBLogo}/>
                        <div>MongoDB</div>
                    </div>

                    {/* Others comment */}
                    <div className='py-2 px-2 w-21 h-10 text-sky-700 font-semibold justify-center place-self-center underline underline-offset-2'>
                        <div >Other</div>
                    </div>
                    <div className='py-2 px-2 w-max h-16 bg-sky-200 text-sky-800 rounded-md'>
                        <img className='w-10 h-10 rounded-md inline' alt='M.E.R.N logo' src={MERNLogo}/>
                        <div>M.E.R.N Stack</div>
                    </div>
                    <div className='py-2 px-2 w-max h-16 bg-sky-200 text-sky-800 rounded-md'>
                        <img className='w-10 h-10 rounded-md inline' alt='Google Auth Library Logo' src={GoogleAuthLibLogo}/>
                        <div>Google Auth</div>
                    </div>
                </div>
        </div>
        )
    }
}
/*<img className='w-10 h-10' alt='General Assembly Logo' src={GALogo}/> */