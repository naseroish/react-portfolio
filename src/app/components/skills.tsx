"use client";
import React from 'react';

import { Disclosure, Menu, Transition } from '@headlessui/react';
import { FaReact, FaPython, FaJava, FaHtml5, FaCss3Alt, FaFigma, FaAngular } from 'react-icons/fa';
import { BiLogoJavascript, BiLogoDjango, BiLogoTailwindCss, BiLogoMongodb } from "react-icons/bi";
import { BsFiletypeScss, BsGit } from "react-icons/bs";
import { AiOutlineSetting, AiFillApi } from "react-icons/ai";
import { TbBrandVscode, TbBrandMysql } from "react-icons/tb";
import { SiTypescript, SiSqlite, SiExpress } from "react-icons/si";
import { IconContext } from "react-icons";



export default function Skills() {

  return (
    <div  className="w-full h-full mb-20">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold dark:text-gray-200 text-black">Skills</h1>
        <p className="dark:text-gray-400 text-gray-700 text-xl font-normal pt-4">Discover what I bring to the table.</p>
      </div>
      {/*Skills cards*/}
      <div className='box'>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:gap-10 mt-12 gap-5">

        {/*Languages*/}
        <div className="dark:bg-gray-700 bg-gray-200 rounded-lg shadow-lg overflow-hidden relative">
          <div className="pt-5 px-6 pb-2 md:px-8 flex flex-col items-center">
            <h3 className="text-xl font-medium dark:text-white text-black">Languages</h3>
            <div className="flex flex-wrap justify-center">
              {/* Use flex-wrap to wrap tags when the screen size is reduced */}
              <p className="mt-4 dark:text-gray-300 text-gray-800 dark:bg-gray-800 bg-gray-100 py-1 px-3 rounded-lg flex">
                <IconContext.Provider value={{ color: '#3178C6', size: '15px' }}>
                  <SiTypescript className="mt-1 mr-2" />
                </IconContext.Provider>
                Typescript
              </p>
              <p className="mt-4 ml-5 mr-4 dark:text-gray-300 text-gray-800 dark:bg-gray-800 bg-gray-100 py-1 px-3 rounded-lg flex">
                <IconContext.Provider value={{ color: '', size: '15px' }}>
                  <FaPython className="mt-1 mr-2 dark:text-yellow-400 text-blue-500" />
                </IconContext.Provider>
                Python
              </p>
              <p className="mt-4 dark:text-gray-300 text-gray-800 dark:bg-gray-800 bg-gray-100 py-1 px-3 rounded-lg flex">
                <IconContext.Provider value={{ color: '#3178C6', size: '15px' }}>
                  <FaJava className="mt-1 mr-2" />
                </IconContext.Provider>
                Java
              </p>
              <p className="mt-4 ml-5 dark:text-gray-300 text-gray-800 dark:bg-gray-800 bg-gray-100 py-1 px-3 rounded-lg flex">
                <IconContext.Provider value={{ color: '', size: '18px' }}>
                  <BiLogoJavascript className="mt-1 mr-2 text-yellow-500 dark:text-yellow-300" />
                </IconContext.Provider>
                Javascript
              </p>
            </div>
          </div>
        </div>


        {/*Frameworks*/}
        <div className="dark:bg-gray-700 bg-gray-200 rounded-lg shadow-lg overflow-hidden relative">
          <div className="pt-5 px-6 pb-2 md:px-8 flex flex-col items-center">
            <h3 className="text-xl font-medium dark:text-white text-black">Frameworks</h3>
            <div className="flex flex-wrap justify-center">
              {/* Use flex-wrap to wrap tags when the screen size is reduced */}
              <p className="mt-4 dark:text-gray-300 text-gray-800 dark:bg-gray-800 bg-gray-100 py-1 px-3 rounded-lg flex">
                <IconContext.Provider value={{ color: '#dd1b16', size: '16px' }}>
                  <FaAngular className="mt-1 mr-2" />
                </IconContext.Provider>
                Angular
              </p>
              <p className="mt-4 ml-5 mr-5 dark:text-gray-300 text-gray-800 dark:bg-gray-800 bg-gray-100 py-1 px-3 rounded-lg flex">
                <IconContext.Provider value={{ color: '#61DBFB', size: '15px' }}>
                  <FaReact className="mt-1 mr-2" />
                </IconContext.Provider>
                React
              </p>
              <p className="mt-4 dark:text-gray-300 text-gray-800 dark:bg-gray-800 bg-gray-100 py-1 px-3 rounded-lg flex">
                <IconContext.Provider value={{ color: '#81C8A8', size: '15px' }}>
                  <BiLogoDjango className="mt-1 mr-2" />
                </IconContext.Provider>
                Django
              </p>
              <p className="mt-4 ml-8 dark:text-gray-300 text-gray-800 dark:bg-gray-800 bg-gray-100 py-1 px-3 rounded-lg flex">
                <IconContext.Provider value={{ color: '', size: '15px' }}>
                  <SiExpress className="mt-1 mr-2" />
                </IconContext.Provider>
                Express.js
              </p>
            </div>
          </div>
        </div>


        {/*Others*/}
        <div className="dark:bg-gray-700 bg-gray-200 rounded-lg shadow-lg overflow-hidden relative">
          <div className="pt-5 px-6 pb-2 md:px-8 flex flex-col items-center">
            <h3 className="text-xl font-medium dark:text-white text-black">Others</h3>
            <div className="flex flex-wrap justify-center">
              {/* Use flex-wrap to wrap tags when the screen size is reduced */}
              <p className="mt-4 dark:text-gray-300 text-gray-800 dark:bg-gray-800 bg-gray-100 py-1 px-3 rounded-lg flex">
                <IconContext.Provider value={{ color: '#F06529', size: '15px' }}>
                  <FaHtml5 className="mt-1 mr-2" />
                </IconContext.Provider>
                HTML
              </p>
              <p className="mt-4 ml-8 dark:text-gray-300 text-gray-800 dark:bg-gray-800 bg-gray-100 py-1 px-3 rounded-lg flex">
                <IconContext.Provider value={{ color: '##2965f1', size: '15px' }}>
                  <FaCss3Alt className="mt-1 mr-2" />
                </IconContext.Provider>
                CSS
              </p>
              <p className="mt-4 ml-5 mr-5 dark:text-gray-300 text-gray-800 dark:bg-gray-800 bg-gray-100 py-1 px-3 rounded-lg flex">
                <IconContext.Provider value={{ color: '', size: '15px' }}>
                  <BsFiletypeScss className="mt-1 mr-2" />
                </IconContext.Provider>
                SCSS
              </p>
              <p className="mt-4 dark:text-gray-300 text-gray-800 dark:bg-gray-800 bg-gray-100 py-1 px-3 rounded-lg flex">
                <IconContext.Provider value={{ color: '#61DBFB', size: '15px' }}>
                  <BiLogoTailwindCss className="mt-1 mr-2" />
                </IconContext.Provider>
                Tailwind
              </p>
              <p className="mt-4 ml-5 dark:text-gray-300 text-gray-800 dark:bg-gray-800 bg-gray-100 py-1 px-3 rounded-lg flex">
                <IconContext.Provider value={{ color: '', size: '15px' }}>
                  <AiOutlineSetting className="mt-1 mr-2" />
                </IconContext.Provider>
                Agile
              </p>
              <p className="mt-4 ml-5 dark:text-gray-300 text-gray-800 dark:bg-gray-800 bg-gray-100 py-1 px-3 rounded-lg flex">
                <IconContext.Provider value={{ color: 'green', size: '15px' }}>
                  <AiFillApi className="mt-1 mr-2" />
                </IconContext.Provider>
                REST
              </p>
            </div>
          </div>
        </div>
        {/*Tools*/}
        <div className="dark:bg-gray-700 bg-gray-200 rounded-lg shadow-lg overflow-hidden relative">
          <div className="pt-5 px-6 pb-2 md:px-8 flex flex-col items-center">
            <h3 className="text-xl font-medium dark:text-white text-black">Tools</h3>
            <div className="flex flex-wrap justify-center">
              {/* Use flex-wrap to wrap tags when the screen size is reduced */}
              <p className="mt-4 dark:text-gray-300 text-gray-800 dark:bg-gray-800 bg-gray-100 py-1 px-3 rounded-lg flex">
                <IconContext.Provider value={{ color: '#3178C6', size: '15px' }}>
                  <TbBrandVscode className="mt-1 mr-2" />
                </IconContext.Provider>
                VSCode
              </p>
              <p className="mt-4 ml-8 dark:text-gray-300 text-gray-800 dark:bg-gray-800 bg-gray-100 py-1 px-3 rounded-lg flex">
                <IconContext.Provider value={{ color: '#61DBFB', size: '15px' }}>
                  <BsGit className="mt-1 mr-2" />
                </IconContext.Provider>
                Git
              </p>
              <p className="mt-4 ml-8 dark:text-gray-300 text-gray-800 dark:bg-gray-800 bg-gray-100 py-1 px-3 rounded-lg flex">
                <IconContext.Provider value={{ color: '	#a259ff', size: '15px' }}>
                  <FaFigma className="mt-1 mr-2" />
                </IconContext.Provider>
                Figma
              </p>
            </div>
          </div>
        </div>

        {/*Databases*/}
        <div className="dark:bg-gray-700 bg-gray-200 rounded-lg shadow-lg overflow-hidden relative">
          <div className="pt-5 px-6 pb-2 md:px-22 flex flex-col items-center">
            <h3 className="text-xl font-medium dark:text-white text-black">Databases</h3>
            <div className="flex flex-wrap justify-center">
              {/* Use flex-wrap to wrap tags when the screen size is reduced */}
              <p className="mt-4 dark:text-gray-300 text-gray-800 dark:bg-gray-800 bg-gray-100 py-1 px-2 rounded-lg flex whitespace-nowrap">
                <IconContext.Provider value={{ color: '#f29111,', size: '15px' }}>
                  <TbBrandMysql className="mt-1 mr-2" />
                </IconContext.Provider>
                MySQL
              </p>
              <p className="mt-4 ml-8 dark:text-gray-300 text-gray-800 dark:bg-gray-800 bg-gray-100 py-1 px-2 rounded-lg flex whitespace-nowrap">
                <IconContext.Provider value={{ color: '#3178C6', size: '15px' }}>
                  <SiSqlite className="mt-1 mr-2" />
                </IconContext.Provider>
                SQLite
              </p>
              <p className="mt-4 ml-8 dark:text-gray-300 text-gray-800 dark:bg-gray-800 bg-gray-100 py-1 px-2 rounded-lg flex whitespace-nowrap">
                <IconContext.Provider value={{ color: 'green', size: '15px' }}>
                  <BiLogoMongodb className="mt-1 mr-2" />
                </IconContext.Provider>
                Mongo
              </p>
            </div>
          </div>
        </div>

      </div>
      </div>
    </div>
  );
}   
