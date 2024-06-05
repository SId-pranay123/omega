'use client'

import React, { useEffect, useState } from 'react';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown((prev) => (prev === dropdown ? null : dropdown));
  };

  const handleMouseEnter = (dropdown: string) => {
    if (window.innerWidth >= 768) {
      setActiveDropdown(dropdown);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 768) {
      setActiveDropdown(null);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.dropdown')) {
        setActiveDropdown(null);
      }
    };

    if (activeDropdown) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [activeDropdown]);

  return (
    <div className="w-full text-white bg-red-700 dark:text-gray-200 dark:bg-gray-800 z-500">
      <div className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
        <div className="p-4 flex flex-row items-center justify-between">
          <a
            href="#"
            className="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark:text-white focus:outline-none focus:shadow-outline"
          >
            <img src="./favicon.ico" alt="Logo" className="h-8" />
          </a>
          <button
            className="md:hidden rounded-lg focus:outline-none focus:shadow-outline"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
              {!menuOpen ? (
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              ) : (
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              )}
            </svg>
          </button>
        </div>
        <nav className={`flex-col flex-grow pb-4 md:pb-0 ${menuOpen ? 'flex' : 'hidden'} md:flex md:justify-end md:flex-row`}>
          <a
            className="px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-gray-200 rounded-lg dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:bg-gray-600 dark:focus:text-white dark:hover:text-white dark:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
            href="#"
          >
            Home
          </a>
          <div
            className="relative dropdown"
            onMouseEnter={() => handleMouseEnter('Experience omega')}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={() => toggleDropdown('Experience omega')}
              className="flex flex-row items-center w-full px-4 py-2 mt-2 text-sm font-semibold text-left bg-transparent rounded-lg dark:bg-transparent dark:focus:text-white dark:hover:text-white dark:focus:bg-gray-600 dark:hover:bg-gray-600 md:w-auto md:inline md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
            >
              <span>Experience omega</span>
              <svg fill="currentColor" viewBox="0 0 20 20" className={`inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform ${activeDropdown === 'Experience omega' ? 'rotate-180' : 'rotate-0'}`}>
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
            {activeDropdown === 'Experience omega' && (
              <div className="mt-2 origin-top-right rounded-md shadow-lg md:absolute md:right-0 md:w-48">
                <div className="px-2 py-2 bg-white rounded-md shadow dark:bg-gray-800">
                  {['Why omega?', 'Desk of MD', 'Infrastructure', 'Our facilities'].map((subItem, index) => (
                    <a
                      key={index}
                      className=" text-black block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark:bg-transparent dark:hover:bg-gray-600 dark:focus:bg-gray-600 dark:focus:text-black dark:hover:text-black dark:text-black md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      href="#"
                    >
                      {subItem}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div
            className="relative dropdown"
            onMouseEnter={() => handleMouseEnter('Classroom')}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={() => toggleDropdown('Classroom')}
              className="flex flex-row items-center w-full px-4 py-2 mt-2 text-sm font-semibold text-left bg-transparent rounded-lg dark:bg-transparent dark:focus:text-white dark:hover:text-white dark:focus:bg-gray-600 dark:hover:bg-gray-600 md:w-auto md:inline md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
            >
              <span>Classroom</span>
              <svg fill="currentColor" viewBox="0 0 20 20" className={`inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform ${activeDropdown === 'Classroom' ? 'rotate-180' : 'rotate-0'}`}>
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
            {activeDropdown === 'Classroom' && (
              <div className="mt-2 origin-top-right rounded-md shadow-lg md:absolute md:right-0 md:w-48">
                <div className="px-2 py-2 bg-white rounded-md shadow dark:bg-gray-800">
                  {['Pre-engineering', 'Pre-medical', 'Pre-board'].map((subItem, index) => (
                    <a
                    key={index}
                    className=" text-black block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark:bg-transparent dark:hover:bg-gray-600 dark:focus:bg-gray-600 dark:focus:text-black dark:hover:text-black dark:text-black md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                    href="#"
                    >
                      {subItem}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div
            className="relative dropdown"
            onMouseEnter={() => handleMouseEnter('Academics')}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={() => toggleDropdown('Academics')}
              className="flex flex-row items-center w-full px-4 py-2 mt-2 text-sm font-semibold text-left bg-transparent rounded-lg dark:bg-transparent dark:focus:text-white dark:hover:text-white dark:focus:bg-gray-600 dark:hover:bg-gray-600 md:w-auto md:inline md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
            >
              <span>Academics</span>
              <svg fill="currentColor" viewBox="0 0 20 20" className={`inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform ${activeDropdown === 'Academics' ? 'rotate-180' : 'rotate-0'}`}>
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
            {activeDropdown === 'Academics' && (
              <div className="mt-2 origin-top-right rounded-md shadow-lg md:absolute md:right-0 md:w-48">
                <div className="px-2 py-2 bg-white rounded-md shadow dark:bg-gray-800">
                  {['Syllabus', 'Exam alert'].map((subItem, index) => (
                    <a
                    key={index}
                    className=" text-black block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark:bg-transparent dark:hover:bg-gray-600 dark:focus:bg-gray-600 dark:focus:text-black dark:hover:text-black dark:text-black md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                    href="#"
                    >
                      {subItem}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div
            className="relative dropdown"
            onMouseEnter={() => handleMouseEnter('Student zone')}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={() => toggleDropdown('Student zone')}
              className="flex flex-row items-center w-full px-4 py-2 mt-2 text-sm font-semibold text-left bg-transparent rounded-lg dark:bg-transparent dark:focus:text-white dark:hover:text-white dark:focus:bg-gray-600 dark:hover:bg-gray-600 md:w-auto md:inline md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
            >
              <span>Student zone</span>
              <svg fill="currentColor" viewBox="0 0 20 20" className={`inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform ${activeDropdown === 'Student zone' ? 'rotate-180' : 'rotate-0'}`}>
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
            {activeDropdown === 'Student zone' && (
              <div className="mt-2 origin-top-right rounded-md shadow-lg md:absolute md:right-0 md:w-48">
                <div className="px-2 py-2 bg-white rounded-md shadow dark:bg-gray-800">
                  {['Periodic test', 'Online test', 'Residential coaching', 'Gallery', 'Enquiry for admission', 'Competitive exams'].map((subItem, index) => (
                    <a
                    key={index}
                    className=" text-black block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark:bg-transparent dark:hover:bg-gray-600 dark:focus:bg-gray-600 dark:focus:text-black dark:hover:text-black dark:text-black md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                    href="#"
                    >
                      {subItem}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
          <a
            className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark:bg-transparent dark:hover:bg-gray-600 dark:focus:bg-gray-600 dark:focus:text-white dark:hover:text-white dark:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
            href="#"
          >
            Contact
          </a>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
