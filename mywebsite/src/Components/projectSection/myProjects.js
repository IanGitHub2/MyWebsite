import React from 'react';
// import './myProjects.css';
import { Connect4, Homemovies, Cps, Rush, ECommerceProject } from '../../images';
import { Clock, Calculator, SortingVisualizer, RandomNameGenerator } from '../builtInProjects';
import { clockLinkCod, calculatorLinkCod, sortingVisualizerLinkCod, beginnerPythonCod, ecommerceCod, moviesCod, connetCod, rushCod, cpsCod, bikeCod } from '../../Links/GitHubLinks';
import { ecommerceWeb, moviesWeb, connetWeb, rushWeb, cpsWeb } from '../../Links/WebsiteLinks';
import { JavascriptLogo, ReactLogo, MUILogo, BikeRepairBanner, CommercejsLogo, StripeLogo, CssLogo, BootstrapLogo, MERNLogo, ExpressLogo, MongoDBLogo, AxiosLogo, PythonLogo, DjangoLogo, VSCODELogo, PycharmLogo } from '../../Links/ImgLinks';

export default class myProjects extends React.Component {
    render(){
        return(
            <div>
                <div>
                    <div className='text-left mt-6 ml-2 text-sky-700 text-2xl font-semibold'>My Projects</div>
                    <div className='grid grid-cols-4 mx-4 gap-2'>

                    <div className='md:col-span-1 col-span-4'>
                        <div className='text-left text-sky-500 text-xl'>
                            <div>E-Commerce Project</div>
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
                                <img className='w-5 h-5 rounded-md inline' alt='CommerceJS Logo' src={CommercejsLogo}/>
                            </div>
                            <div className='w-8 h-8 bg-sky-200 rounded-md'>
                                <img className='w-5 h-5 rounded-md inline' alt='Stripe Logo' src={StripeLogo}/>
                            </div>
                        </div>
                        <div>
                            <img className='rounded-md w-81 h-50' alt='E-Commerce-project' src={ECommerceProject}/>
                        </div>
                        <div className='grid grid-flow-col grid-rows-2'>
                            <div className='col-span-1 row-span-2 text-left text-sm'>A fully functional eCommerce application that uses ("test keys"). So no worry of being charged.</div>
                            <div className='col-span-1 row-span-1 self-center text-sky-700 hover:text-sky-400 underline underline-offset-2 font-medium'>
                                <a target="_blank" rel="noopener noreferrer" href={ecommerceWeb}>
                                    <div>Web Link</div>
                                </a>
                            </div>
                            <div className='col-span-1 row-span-1 self-center text-sky-700 hover:text-sky-400 underline underline-offset-2 font-medium'>
                                <a target="_blank" rel="noopener noreferrer" href={ecommerceCod}>
                                    <div>Code Link</div>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className='md:col-span-1 col-span-4'>
                        <div className='text-left text-sky-500 text-xl'>
                            <div>Movie Site</div>
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
                                <img className='w-5 h-5 rounded-md inline' alt='Css Logo' src={CssLogo}/>
                            </div>
                        </div>
                        <div>
                            <img className='rounded-md w-81 h-50' alt='Home Movies' src={Homemovies}/>
                        </div>
                        <div className='grid grid-flow-col grid-rows-2'>
                            <div className='col-span-1 row-span-2 text-left text-sm'>This is a front-end app that is meant to be a quick look at whats new in the movies world.</div>
                            <div className='col-span-1 row-span-1 self-center text-sky-700 hover:text-sky-400 underline underline-offset-2 font-medium'>
                                <a target="_blank" rel="noopener noreferrer" href={moviesWeb}>
                                    <div>Web Link</div>
                                </a>
                            </div>
                            <div className='col-span-1 row-span-1 self-center text-sky-700 hover:text-sky-400 underline underline-offset-2 font-medium'>
                                <a target="_blank" rel="noopener noreferrer" href={moviesCod}>
                                    <div>Code Link</div>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className='md:col-span-1 col-span-4'>
                        <div className='text-left text-sky-500 text-xl'>
                            <div>Connect 4</div>
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
                                <img className='w-5 h-5 rounded-md inline' alt='Css Logo' src={CssLogo}/>
                            </div>
                            <div className='w-8 h-8 bg-sky-200 rounded-md'>
                                <img className='w-5 h-5 rounded-md inline' alt='Boot Strap Logo' src={BootstrapLogo}/>
                            </div>
                        </div>
                        <div>
                            <img className='rounded-md w-81 h-50' alt='Connect 4' src={Connect4}/>
                        </div>
                        <div className='grid grid-flow-col grid-rows-2'>
                            <div className='col-span-1 row-span-2 text-left text-sm'>Connect 4 was one of my first projects that had me working with for loops and if else statements to create a game.</div>
                            <div className='col-span-1 row-span-1 self-center text-sky-700 hover:text-sky-400 underline underline-offset-2 font-medium'>
                                <a target="_blank" rel="noopener noreferrer" href={connetWeb}>
                                    <div>Web Link</div>
                                </a>
                            </div>
                            <div className='col-span-1 row-span-1 self-center text-sky-700 hover:text-sky-400 underline underline-offset-2 font-medium'>
                                <a target="_blank" rel="noopener noreferrer" href={connetCod}>
                                    <div>Code Link</div>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className='md:col-span-1 col-span-4'>
                        <div className='text-left text-sky-500 text-xl'>
                            <div>Rush</div>
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
                                <img className='w-5 h-5 rounded-md inline' alt='Css Logo' src={CssLogo}/>
                            </div>
                            <div className='w-8 h-8 bg-sky-200 rounded-md'>
                                <img className='w-5 h-5 rounded-md inline' alt='Mern stack Logo' src={MERNLogo}/>
                            </div>
                        </div>
                        <div>
                            <img className='rounded-md w-81 h-50' alt='Rush' src={Rush}/>
                        </div>
                        <div className='grid grid-flow-col grid-rows-2'>
                            <div className='col-span-1 row-span-2 text-left text-sm'>Rush is a site to post pictures of things you like their cost and more.</div>
                            <div className='col-span-1 row-span-1 self-center text-sky-700 hover:text-sky-400 underline underline-offset-2 font-medium'>
                                <a target="_blank" rel="noopener noreferrer" href={rushWeb}>
                                    <div>Web Link</div>
                                </a>
                            </div>
                            <div className='col-span-1 row-span-1 self-center text-sky-700 hover:text-sky-400 underline underline-offset-2 font-medium'>
                                <a target="_blank" rel="noopener noreferrer" href={rushCod}>
                                    <div>Code Link</div>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className='md:col-span-1 col-span-4'>
                        <div className='text-left text-sky-500 text-xl'>
                            <div>C.P.S</div>
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
                                <img className='w-5 h-5 rounded-md inline' alt='Css Logo' src={CssLogo}/>
                            </div>
                            <div className='w-8 h-8 bg-sky-200 rounded-md'>
                                <img className='w-5 h-5 rounded-md inline' alt='Express Logo' src={ExpressLogo}/>
                            </div>
                            <div className='w-8 h-8 bg-sky-200 rounded-md'>
                                <img className='w-5 h-5 rounded-md inline' alt='MongoDB Logo' src={MongoDBLogo}/>
                            </div>
                            <div className='w-8 h-8 bg-sky-200 rounded-md'>
                                <img className='w-5 h-5 rounded-md inline' alt='MERN Logo' src={MERNLogo}/>
                            </div>
                        </div>
                        <div>
                            <img className='rounded-md w-81 h-50' alt='CPS' src={Cps}/>
                        </div>
                        <div className='grid grid-flow-col grid-rows-2'>
                            <div className='col-span-1 row-span-2 text-left text-sm'>Companies, Products, Sellers or (C.P.S) was a project that teach me how to pass data using express and mongodb.</div>
                            <div className='col-span-1 row-span-1 self-center text-sky-700 hover:text-sky-400 underline underline-offset-2 font-medium'>
                                <a target="_blank" rel="noopener noreferrer" href={cpsWeb}>
                                    <div>Web Link</div>
                                </a>
                            </div>
                            <div className='col-span-1 row-span-1 self-center text-sky-700 hover:text-sky-400 underline underline-offset-2 font-medium'>
                                <a target="_blank" rel="noopener noreferrer" href={cpsCod}>
                                    <div>Code Link</div>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className='md:col-span-1 col-span-4'>
                        <div className='text-left text-sky-500 text-xl'>
                            <div>Bike Repair</div>
                        </div>
                        <div className='grid grid-flow-col grid-rows-none justify-center gap-x-1'>
                            <div className='w-8 h-8 bg-sky-200 rounded-md'>
                                <img className='w-5 h-5 rounded-md inline' alt='VS Code Logo' src={VSCODELogo}/>
                            </div>
                            <div className='w-8 h-8 bg-sky-200 rounded-md'>
                                <img className='w-5 h-5 rounded-md inline' alt='Pycharm Logo' src={PycharmLogo}/>
                            </div>
                            <div className='w-8 h-8 bg-sky-200 rounded-md justify-center '>
                                <img className='w-5 h-5 rounded-md inline' alt='Javascript Logo' src={JavascriptLogo}/>
                            </div>
                            <div className='w-8 h-8 bg-sky-200 rounded-md'>
                                <img className='w-5 h-5 rounded-md inline' alt='React Logo' src={ReactLogo}/>
                            </div>
                            <div className='w-8 h-8 bg-sky-200 rounded-md'>
                                <img className='w-5 h-5 rounded-md inline' alt='Css Logo' src={CssLogo}/>
                            </div>
                            <div className='w-8 h-8 bg-sky-200 rounded-md'>
                                <img className='w-5 h-5 rounded-md inline' alt='Axios Logo' src={AxiosLogo}/>
                            </div>
                            <div className='w-8 h-8 bg-sky-200 rounded-md'>
                                <img className='w-5 h-5 rounded-md inline' alt='Python Logo' src={PythonLogo}/>
                            </div>
                            <div className='w-8 h-8 bg-sky-200 rounded-md'>
                                <img className='w-5 h-5 rounded-md inline' alt='Django Logo' src={DjangoLogo}/>
                            </div>
                        </div>
                        <div className=''>
                            <img className='rounded-md w-81 h-50' alt='Bike Repair' src={BikeRepairBanner}/>
                        </div>
                        <div className='grid grid-flow-col grid-rows-2'>
                            <div className='col-span-1 row-span-2 text-left text-sm'>Bike repair app pulled what I had learned from python, django, react, axios, react-router-dom and brought it together to create this.</div>
                            <div className='col-span-1 row-span-1 self-center text-sky-700 hover:text-sky-400 underline underline-offset-2 font-medium'>
                                <a target="_blank" rel="noopener noreferrer" href={bikeCod}>
                                    <div>Code Link</div>
                                </a>
                            </div>
                        </div>
                    </div>

                        <div className='md:col-span-1 col-span-4'>
                            <div className='text-left text-sky-500 text-xl'>Links for built in projects</div>
                            <div>
                                <a href={clockLinkCod} target="_blank" rel='noopener noreferrer'><div className='self-center text-sky-700 hover:text-sky-500 underline underline-offset-2 font-medium'>Link to Clock Code</div></a>
                                <a href={calculatorLinkCod} target="_blank" rel='noopener noreferrer'><div className='self-center text-sky-700 hover:text-sky-500 underline underline-offset-2 font-medium'>Link to Calculator Code</div></a>
                                <a href={sortingVisualizerLinkCod} target="_blank" rel='noopener noreferrer'><div className='self-center text-sky-700 hover:text-sky-500 underline underline-offset-2 font-medium'>Link to Sorting Code</div></a>
                            </div>
                        </div>

                        <div className='md:col-span-1 col-span-4'>
                            <div className='text-left text-sky-500 text-xl'>Links for Python projects</div>
                            <div>
                                <a href={beginnerPythonCod} target="_blank" rel='noopener noreferrer'><div className='self-center text-sky-700 hover:text-sky-500 underline underline-offset-2 font-medium'>Link to beginner Python Code</div></a>
                            </div>
                        </div>

                        <div className='md:col-span-1 col-span-4'>
                            <div className='text-left text-sky-500 text-xl'>Built in Clock</div>
                            <Clock/>
                            <div className='text-8xl'>i</div>
                        </div>

                        <div className='md:col-span-2 col-span-4'>
                            <div className='text-left text-sky-500 text-xl'>Built in Sorting 'Alg'</div>
                            <SortingVisualizer/>
                        </div>

                        <div className='md:col-span-1 col-span-4'>
                            <div className='text-left text-sky-500 text-xl'>Built in Calculator</div>
                            <Calculator/>
                        </div>

                        <div className='md:col-span-1 col-span-4'>
                            <div className='text-left text-sky-500 text-xl'>Built in Random Name Generator</div>
                            <RandomNameGenerator/>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}