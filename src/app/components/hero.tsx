"use client";
/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import React from 'react';
import App from 'next/app';
import '../css/hero.css';
import a1 from '../../imgs/a.png';



export default function Hero() {

    return (
        
    <div className="lg:flex items-center justify-between pt-5 mb-44"  >
        <div className="lg:w-1/2">
          <p className="text-gray-500 pt-5 text-xl font-bold">Hello, I'm</p>
          <h1 className="text-5xl  font-bold pb-1 text-black dark:text-gray-100">Naser Allahyany</h1>
          <h2 className="text-3xl dark:text-gray-200 text-black font-bold pb-6">Full Stack Developer</h2>
          <p   className="dark:text-gray-400 text-gray-700 font-normal text-xl">I'm a Computer Science student at Kingston university with a passion for Full Stack Development. I blend my academic pursuits with real-world coding skills to create dynamic web experiences. Welcome to my portfolio, where you can explore my journey and projects in the world of technology.</p>
        </div>
        <div className="lg:w-1/2 flex justify-center items-center pt-6 box">

            <div className='img rounded-full'><Image src={a1} alt="Naser's Avatary" width={270} height={270} className="rounded-full opacity-80" /></div>
                
            </div>
    </div>

    );
}