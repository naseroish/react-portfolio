require('dotenv').config();
import Navbar from './components/nav'
import Hero from './components/hero'
import React from 'react';
import Projects from './components/projects';
import Skills from './components/skills';
import Contact from './components/contact';
import Footer from './components/footer';
import ScrollToTop from './components/scroll';
import Theme from './theme';
import { Analytics } from '@vercel/analytics/react';




export default function Home() {
  return (
  
    <Theme>
      <Analytics />
      <Navbar/>
      <main className="flex-grow dark:bg-gray-800 bg-gray-200 overflow-x-hidden">
        
        <div className=" max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10  ">
          
            <Hero />
         
          
            
             <Projects />

             <Skills />

             <Contact />

              <ScrollToTop />

              
         
          
          
        </div>

        
      </main>
      <Footer />
    </Theme>

  );
}

