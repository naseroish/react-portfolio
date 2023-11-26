"use client";
import React from 'react';
import { Disclosure } from '@headlessui/react';
import logo2 from '../../imgs/logo2.png';
import logo3 from '../../imgs/logo3.png';
import Image from 'next/image';



const buttons = [
  { name: 'Projects', href: '#', current: false, special: 'projects'},
  { name: 'Skills', href: '#', current: false, special: 'skills'},
  { name: 'Contact', href: '#', current: false, special: 'contact'}, // Corrected 'Contact' to 'contact'
];

type ButtonItem = {
  name: string;
  href: string;
  current: boolean;
  special?: string | boolean | undefined;
};




export default function Navbar() {
  
  

  function handleScrollToContact(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, special: boolean | undefined): void {
    if (special) {
      e.preventDefault();
      const contact = document.getElementById('contact');
      if (contact) {
        window.scrollBy({
          top: contact.getBoundingClientRect().top - 50, // adjust the value as needed
          left: 0,
          behavior: 'smooth'
        });
      }
    }
  }

  function handleScrollToProjects(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, special: boolean | undefined): void {
    if (special) {
      e.preventDefault();
      const projects = document.getElementById('projects');
      if (projects) {
        window.scrollBy({
          top: projects.getBoundingClientRect().top - 100, // adjust the value as needed
          left: 0,
          behavior: 'smooth'
        });
      }
    }
  }

  function handleScrollToSkills(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, special: boolean | undefined): void {
    if (special) {
      e.preventDefault();
      const skills = document.getElementById('skills');
      if (skills) {
        window.scrollBy({
          top: skills.getBoundingClientRect().top - -70, // adjust the value as needed
          left: 0,
          behavior: 'smooth'
        });
      }
    }
  }

  function toggleTheme() {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    }
  }

    return (
      <Disclosure as="nav" className="dark:bg-gray-900 bg-gray-50 sticky top-0 z-50">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-6xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
              <div className="flex items-center">
                <Image
                  src={logo3}
                  alt=""
                  width={40}
                  height={40}
                  className="h-10 w-auto pt-1 dark:hidden"
                />
                <Image
                  src={logo2}
                  alt=""
                  width={40}
                  height={40}
                  className="h-10 w-auto pt-1 hidden dark:block"
                />
                <p className="ml-2 text-xl font-bold text-black dark:text-gray-200">Naser</p>
                
              </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                  {buttons.map((item: ButtonItem) => (
                      <a
                        key={item.name}
                        href={item.special === 'contact' ? '#contact' : item.special === 'projects' ? '#projects' : item.special === 'skills' ? '#skills' : item.href}
                        className={`${
                          item.current
                            ? 'bg-gray-900 text-white'
                            : item.special === 'contact'
                            ? 'bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400 hover:bg-gradient-to-br text-black dark:bg-gradient-to-r dark:from-light2blue dark:via-light1blue dark:to-darkblue dark:hover:bg-gradient-to-br dark:text-white  font-bold py-2 px-4 rounded-lg'
                            : 'dark:text-gray-300 text-gray-700 dark:hover:bg-gray-700 hover:bg-gray-300 dark:hover:text-white rounded-lg'
                        } ${
                          !item.special ? 'rounded-md' : ''
                        } px-3 py-2 text-sm font-medium`}
                        aria-current={item.current ? 'page' : undefined}
                        onClick={(e) => {
                          if (item.special === 'contact') {
                            handleScrollToContact(e, item.special as unknown as boolean);
                          } else if (item.special === 'projects') {
                            handleScrollToProjects(e, item.special as unknown as boolean);
                          } else if (item.special === 'skills') {
                            handleScrollToSkills(e, item.special as unknown as boolean);
                          }
                        }}
                      >
                        {item.name}
                      </a>
                    ))}
                    <label className="swap swap-rotate">

                      {/* this hidden checkbox controls the state */}
                      <input type="checkbox" onClick={toggleTheme}/>

                      {/* sun icon */}
                      <svg className="swap-on fill-current w-5 h-5 text-gray-700 dark:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                      {/* moon icon */}
                      <svg className="swap-off fill-current w-5 h-5 dark:text-white text-gray-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                    </label>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 dark:text-gray-400 text-black dark:hover:bg-gray-700 hover:bg-gray-300 dark:hover:text-white focus:outline-none transition-transform">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <svg
                        className="block h-6 w-6 transition-transform ease-in-out duration-150"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ transform: 'rotate(90deg)' }}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="block h-6 w-6 transition-transform ease-in-out duration-150"
                        style={{
                            transform: open ? 'rotate(90deg)' : 'rotate(0deg)', // Rotate based on 'open' state
                          }}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>
            <Disclosure.Panel className="sm:hidden transition-transform duration-300 ease-in-out">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {buttons.map((item: ButtonItem) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`${
                      item.current
                        ? 'bg-gray-900 dark:text-white text-gray-700'
                        : 'dark:text-gray-300 text-gray-700 dark:hover:bg-gray-700 hover:bg-gray-300 dark:hover:text-white hover-text-black'
                    } block px-3 py-2 rounded-md text-base font-medium`}
                    aria-current={item.current ? 'page' : undefined}
                    onClick={(e) => {
                      if (item.special === 'contact') {
                        handleScrollToContact(e, item.special as unknown as boolean);
                      } else if (item.special === 'projects') {
                        handleScrollToProjects(e, item.special as unknown as boolean);
                      } else if (item.special === 'skills') {
                        handleScrollToSkills(e, item.special as unknown as boolean);
                      }
                    }}
                  >
                    {item.name}
                  </a>
                ))}
                <div className='absolute  right-12 mr-8 pb-3 top-5'>
                    <label className="swap swap-rotate">

                      {/* this hidden checkbox controls the state */}
                      <input type="checkbox" onClick={toggleTheme}/>

                      {/* sun icon */}
                      <svg className="swap-on fill-current w-5 h-5 text-gray-700 dark:text-gray-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                      {/* moon icon */}
                      <svg className="swap-off fill-current w-5 h-5 dark:text-gray-300 text-gray-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                    </label>
                  </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    );
  }



