"use client";
import React from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import Image from 'next/image';
import ttwe from '../../imgs/ttwe2.png';
import p1 from '../../imgs/p1.png';
import fig from '../../imgs/fig.png';
import { MdOutlineDesignServices}from 'react-icons/md';

export default function Projects() {

    return (
        <div   className="w-full h-full mb-20">
            <div className="flex flex-col items-center justify-center">
                <h1 id='projects' className="text-5xl font-bold dark:text-gray-200 text-black">Projects</h1>
                <p className="dark:text-gray-400 text-gray-700 text-xl font-normal pt-4">Here are some of my projects that I have worked on.</p>
            </div>
            {/*project cards*/}
            
            <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12 gap-5 ">
                {/*card 1*/}
                <div className='box'>
                  <div className="dark:bg-gray-700 bg-gray-200 rounded-lg shadow-lg overflow-hidden relative">
                      <div className='dark:opacity-50 opacity-70'>
                          <Image src={ttwe} alt="Naser's Avatar" className="h-48 w-full object-cover" />
                      </div>
                      <div className="absolute top-0 left-0 mt-4 ml-4 ">
                          <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-700 rounded-full">Angular</span>
                          <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white  bg-amber-500 rounded-full ml-2">Firebase</span>
                      </div>
                      <div className="pt-5 px-6 pb-8 md:px-8">
                          <h3 className="text-xl font-medium dark:text-white text-black">Schools volunteer mangment website</h3>
                          <p className="mt-4 dark:text-gray-300 text-gray-600">This project was created to assist the school volunteer management staff in managing their student volunteer hours and rules by providing an intuitive interface and real-time database using Firebase, as well as other capabilities like different login choices and the ability to import student data from an Excel file. (this project is not finished yet but almost)</p>
                      </div>
                      <div className="relative flex flex-wrap items-center px-6 pb-6 mt-6">
                          <a href="https://volunteer-8dd08.web.app/signin" className="block relative">
                              <button type="button" className="dark:text-white text-black dark:bg-gray-900 bg-gray-50 hover:bg-gray-300 focus:ring-2 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2">
                              <svg className="w-4 h-4 mr-2" stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                                Live
                              </button>  
                          </a>
                          <a href="https://github.com/naseroish/volunteer" className="block relative">
                              <button type="button" className="dark:text-white text-black dark:bg-gray-800 bg-gray-100 hover:bg-gray-300/90 focus:ring-2 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2">
                                <svg className="w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                  <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
                                </svg>
                                Github
                              </button>  
                          </a>
                      </div>
                  </div>
                </div>


                {/*card 2*/}
                <div className='box'>
                <div className="dark:bg-gray-700 bg-gray-200 rounded-lg shadow-lg overflow-hidden relative">
                    <div className='dark:opacity-50 opacity-70'>
                        <Image src={p1} alt="Naser's Avatar" className="h-48 w-full object-cover" />
                    </div>
                    <div className="absolute top-0 left-0 mt-4 ml-4 ">
                        <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-indigo-100 bg-indigo-600 rounded-full">Bootstrap</span>
                        <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-indigo-100 bg-green-800 rounded-full ml-2">Django</span>
                    </div>
                    <div className="pt-5 px-6 pb-8 md:px-8">
                        <h3 className="text-xl font-medium dark:text-white text-black">My first portfolio</h3>
                        <p className="mt-4 dark:text-gray-300 text-gray-600">I developed this portfolio while I was learning the Django Framework. Despite the relatively short time frame in which I created it, I view this project as a significant personal achievement.</p>
                    </div>
                    <div className="relative flex flex-wrap items-center px-6 pb-6 mt-6">
                        <a href="https://naseroish.pythonanywhere.com/" className="block relative">
                            <button type="button" className="dark:text-white text-black dark:bg-gray-900 bg-gray-50 hover:bg-gray-300 focus:ring-2 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2">
                            <svg className="w-4 h-4 mr-2" stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                              Live
                            </button>  
                        </a>
                        <a href="https://github.com/naseroish/portfolio" className="block relative">
                            <button type="button" className="dark:text-white text-black dark:bg-gray-800 bg-gray-100 hover:bg-gray-300/90 focus:ring-2 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2">
                              <svg className="w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
                              </svg>
                              Github
                            </button>  
                        </a>
                    </div>
                </div>
                </div>

                {/*card 3*/}
                <div className='box'>
                <div className="dark:bg-gray-700 bg-gray-200 rounded-lg shadow-lg overflow-hidden relative">
                    <div className='dark:opacity-50 opacity-70'>
                        <Image src={fig} alt="Naser's Avatar" className="h-48 w-full object-cover" />
                    </div>
                    <div className="absolute top-0 left-0 mt-4 ml-4 ">
                        <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-indigo-100 bg-indigo-600 rounded-full">Figma</span>
                    </div>
                    <div className="pt-5 px-6 pb-8 md:px-8">
                        <h3 className="text-xl font-medium dark:text-white text-black">Shaguf web redsign</h3>
                        <p className="mt-4 dark:text-gray-300 text-gray-600">Shaguf website redesign involves the creation of a comprehensive Figma design, catering to both desktop and mobile platforms. This redesign aims to enhance the visual and functional aspects of the Shaguf website, ensuring a seamless and appealing user experience across various devices and screen sizes.</p>
                    </div>
                    <div className="relative flex flex-wrap items-center px-6 pb-6 mt-6 ">
                        <a href="https://www.figma.com/proto/vTzBY1ekBZQ6gWS155H7Pq/Shaguf?type=design&node-id=1-79&t=9GhIjVrnh3H4Avk2-1&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=1%3A79&show-proto-sidebar=1&mode=design" className="block relative">
                            <button type="button" className="dark:text-white text-black dark:bg-gray-900 bg-gray-50 hover:bg-gray-300 focus:ring-2 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2">
                            <svg className="w-4 h-4 mr-2" stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                              Prototype
                            </button>  
                        </a>
                        <a id='skills' href="https://www.figma.com/file/vTzBY1ekBZQ6gWS155H7Pq/Shaguf?type=design&node-id=0%3A1&mode=design&t=R8rcYfotscsvuUvV-1" className="block relative">
                            <button type="button" className="dark:text-white text-black dark:bg-gray-800 bg-gray-100 hover:bg-gray-300/90 focus:ring-2 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2">
                                <MdOutlineDesignServices className="w-4 h-4 mr-2" />
                              Design
                            </button>  
                        </a>
                    </div>
                </div>
            </div>
            </div>


                
        </div>
    );
    }   
