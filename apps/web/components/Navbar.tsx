// 'use client';

// import React, { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation';

// const NavBar = () => {
//   const router = useRouter();
//   const [menuOpen, setMenuOpen] = useState<boolean>(false);
//   const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
//   const [selectedMenuItem, setSelectedMenuItem] = useState<string | null>(null);
//   const [hoveredMenuItem, setHoveredMenuItem] = useState<string | null>(null);
//   const [isNavHovered, setIsNavHovered] = useState<boolean>(false);
//   const [isDropdownHovered, setIsDropdownHovered] = useState<boolean>(false);

//   const toggleDropdown = (dropdown: string) => {
//     setActiveDropdown((prev) => (prev === dropdown ? null : dropdown));
//   };

//   const handleMouseEnter = (dropdown: string) => {
//     if (window.innerWidth >= 768) {
//       setActiveDropdown(dropdown);
//     }
//   };

//   const handleMouseLeave = () => {
//     if (window.innerWidth >= 768) {
//       setActiveDropdown(null);
//     }
//   };

//   const handleMenuItemClick = (item: string, path: string) => {
//     setSelectedMenuItem(item);
//     router.push(path);
//     setMenuOpen(false);
//     setActiveDropdown(null);
//   };

//   const handleNavMouseEnter = () => {
//     setIsNavHovered(true);
//   };

//   const handleNavMouseLeave = () => {
//     setIsNavHovered(false);
//     setHoveredMenuItem(null);
//   };

//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       const target = event.target as HTMLElement;
//       if (!target.closest('.dropdown')) {
//         setActiveDropdown(null);
//       }
//     };

//     if (activeDropdown) {
//       document.addEventListener('click', handleClickOutside);
//     } else {
//       document.removeEventListener('click', handleClickOutside);
//     }

//     return () => {
//       document.removeEventListener('click', handleClickOutside);
//     };
//   }, [activeDropdown]);

//   const renderMenuItem = (item: string, path: string) => (
//     <a
//       className={`px-4 py-2 mt-2 text-sm font-semibold text-white bg-[#560002] rounded-lg dark:bg-[#560002] dark:hover:bg-gray-600 dark:focus:bg-gray-600 dark:focus:text-white dark:hover:text-white md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-white focus:bg-[#560002] focus:outline-none focus:shadow-outline ${
//         selectedMenuItem === item && !isNavHovered && !isDropdownHovered ? 'bg-[#F8BC4D]' : ''
//       } ${hoveredMenuItem === item ? 'bg-gray-200' : ''}`}
//       onClick={() => handleMenuItemClick(item, path)}
//       onMouseEnter={() => setHoveredMenuItem(item)}
//       onMouseLeave={() => setHoveredMenuItem(null)}
//     >
//       {item}
//     </a>
//   );

//   const renderDropdownItem = (dropdown: string, items: string[]) => (
//     <div
//       className="relative dropdown"
//       onMouseEnter={() => handleMouseEnter(dropdown)}
//       onMouseLeave={handleMouseLeave}
//     >
//       <button
//         onClick={() => toggleDropdown(dropdown)}
//         className="flex flex-row items-center w-full px-4 py-2 mt-2 text-sm font-semibold text-left bg-transparent rounded-lg dark:bg-transparent dark:focus:text-white dark:hover:text-white dark:focus:bg-gray-600 dark:hover:bg-gray-600 md:w-auto md:inline md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
//       >
//         <span>{dropdown}</span>
//         <svg fill="currentColor" viewBox="0 0 20 20" className={`inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform ${activeDropdown === dropdown ? 'rotate-180' : 'rotate-0'}`}>
//           <path
//             fillRule="evenodd"
//             d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
//             clipRule="evenodd"
//           ></path>
//         </svg>
//       </button>
//       {activeDropdown === dropdown && (
//         <div
//           className="pt-2 origin-top-right rounded-md shadow-lg md:absolute md:right-0 md:w-48 z-10"
//           onMouseEnter={() => setIsDropdownHovered(true)}
//           onMouseLeave={() => setIsDropdownHovered(false)}
//         >
//           <div className="px-2 py-2 bg-white rounded-md shadow dark:bg-white-800">
//             {items.map((subItem, index) => (
//               <a
//                 key={index}
//                 className="text-black block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark:bg-transparent dark:hover:bg-gray-200 dark:focus:bg-gray-600 dark:focus:text-black dark:hover:text-black dark:text-black md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
//                 href={`/${subItem.toLowerCase().replace(' ', '-')}`}
//                 onMouseEnter={() => setHoveredMenuItem(subItem)}
//                 onMouseLeave={() => setHoveredMenuItem(null)}
//               >
//                 {subItem}
//               </a>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );

//   return (
//     <div
//       className="fixed top-0 w-full text-white dark:text-gray-200 bg-[#560002] z-50"
//       onMouseEnter={handleNavMouseEnter}
//       onMouseLeave={handleNavMouseLeave}
//     >
//       <div className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
//         <div className="p-4 flex min-h-[4rem] flex-row items-center justify-between">
//           {/* Logo */}
//           {/* Uncomment and update the href and src attributes as needed */}
//           {/* <a
//             href="/"
//             className="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark:text-white focus:outline-none focus:shadow-outline"
//           >
//             <img src="/omega.png" alt="Logo" className="h-8" />
//           </a> */}
//           <button
//             className="md:hidden rounded-lg focus:outline-none focus:shadow-outline"
//             onClick={() => setMenuOpen(!menuOpen)}
//           >
//             <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
//               {!menuOpen ? (
//                 <path
//                   fillRule="evenodd"
//                   d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
//                   clipRule="evenodd"
//                 ></path>
//               ) : (
//                 <path
//                   fillRule="evenodd"
//                   d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
//                   clipRule="evenodd"
//                 ></path>
//               )}
//             </svg>
//           </button>
//         </div>
//         <nav className={`flex-col flex-grow pb-4 md:pb-0 ${menuOpen ? 'flex' : 'hidden'} md:flex md:justify-end md:flex-row`}>
//           {renderMenuItem('Home', '/')}
//           {renderMenuItem('Why Omega', '/why-omega')}
//           {renderDropdownItem('Classroom', ['Pre-engineering', 'Pre-medical', 'Pre-board'])}
//           {renderMenuItem('OTSE', '/Otse')}
//           {renderDropdownItem('Student zone', ['Periodic test', 'Online test', 'Residential coaching', 'Gallery', 'Enquiry for admission', 'Competitive exams'])}
//           {renderMenuItem('Contact', '/contact')}
//         </nav>
//       </div>
//     </div>
//   );
// };

// export default NavBar;


'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';

const NavBar: React.FC = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const colorMap: { [key: string]: { bg: string; text: string } } = {
    '/': { bg: 'bg-[#560002]', text: 'text-white' },
    '/why-omega': { bg: 'bg-[#011926]', text: 'text-gray-200' },
    '/classroom/pre-engineering': { bg: 'bg-[#004F2D]', text: 'text-white' },
    '/classroom/pre-medical': { bg: 'bg-[#8B0000]', text: 'text-white' },
    '/classroom/pre-board': { bg: 'bg-[#2C2C2C]', text: 'text-white' },
    '/otse': { bg: 'bg-[#3D0859]', text: 'text-white' },
    '/student-zone/periodic-test': { bg: 'bg-[#4B0082]', text: 'text-white' },
    '/student-zone/online-test': { bg: 'bg-[#8B4513]', text: 'text-white' },
    '/student-zone/residential-coaching': { bg: 'bg-[#2E8B57]', text: 'text-white' },
    '/student-zone/gallery': { bg: 'bg-[#4682B4]', text: 'text-white' },
    '/student-zone/enquiry-for-admission': { bg: 'bg-[#8A2BE2]', text: 'text-white' },
    '/student-zone/competitive-exams': { bg: 'bg-[#800080]', text: 'text-white' },
    '/contact': { bg: 'bg-[#011926]', text: 'text-white' },
  };

  const getColorsForPath = (path: string) => {
    return colorMap[path] || colorMap['/']; // Default to home if path not found
  };

  const currentColors = getColorsForPath(pathname);

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

  const renderMenuItem = (item: string, path: string): React.ReactNode => (
    <a
      key={path} 
      className={`px-4 py-2 mt-2 text-sm font-semibold ${currentColors?.bg} ${currentColors?.text} rounded-lg md:mt-0 hover:text-gray-900 hover:bg-white focus:text-gray-900 focus:bg-white focus:outline-none focus:shadow-outline cursor-pointer`}
      href={path}
    >
      {item}
    </a>
  );

  const renderDropdownItem = (dropdown: string, items: { name: string; path: string }[]): React.ReactNode => (
    <div
      key={dropdown} 
      className="relative dropdown"
      onMouseEnter={() => handleMouseEnter(dropdown)}
      onMouseLeave={handleMouseLeave}
    >
      <button
        onClick={() => toggleDropdown(dropdown)}
        className={`flex flex-row items-center w-full px-4 py-2 mt-2 text-sm font-semibold text-left ${currentColors?.text} ${currentColors?.bg} rounded-lg md:w-auto md:inline md:mt-0 md:ml-4 hover:text-gray-900 hover:bg-white focus:text-gray-900 focus:bg-white focus:outline-none focus:shadow-outline cursor-pointer`}
      >
        <span>{dropdown}</span>
        <svg
          fill="currentColor"
          viewBox="0 0 20 20"
          className={`inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform ${
            activeDropdown === dropdown ? 'rotate-180' : 'rotate-0'
          }`}
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
      {activeDropdown === dropdown && (
        <div className="pt-2 origin-top-right rounded-md shadow-lg md:absolute md:right-0 md:w-48 z-10">
          <div className="px-2 py-2 bg-white rounded-md shadow">
            {items.map((subItem, index) => (
              <a
                key={index}
                className="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 rounded-lg md:mt-0 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline cursor-pointer"
                href={subItem.path}
              >
                {subItem.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div
      className={`fixed top-0 w-full z-50 ${currentColors?.bg} transition-colors duration-200 ${currentColors?.text}`}
    >
      <div className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
        <div className="p-4 flex flex-row items-center justify-between w-full md:w-auto">
          <a
            href="/"
            className="flex items-center text-lg font-semibold tracking-widest uppercase rounded-lg focus:outline-none focus:shadow-outline"
          >
            <img src="/omega.png" alt="Logo" className="h-8 mr-2" />
            <span>Omega Study Center</span>
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
        <nav
          className={`flex-col flex-grow pb-4 md:pb-0 ${
            menuOpen ? 'flex' : 'hidden'
          } md:flex md:justify-end md:flex-row`}
        >
          {renderMenuItem('Home', '/')}
          {renderMenuItem('Why Omega', '/why-omega')}
          {renderDropdownItem('Classroom', [
            { name: 'Pre-engineering', path: '/classroom/pre-engineering' },
            { name: 'Pre-medical', path: '/classroom/pre-medical' },
            { name: 'Pre-board', path: '/classroom/pre-board' },
          ])}
          {renderMenuItem('OTSE', '/Otse')}
          {renderDropdownItem('Student zone', [
            { name: 'Periodic test', path: '/student-zone/periodic-test' },
            { name: 'Online test', path: '/student-zone/online-test' },
            { name: 'Residential coaching', path: '/student-zone/residential-coaching' },
            { name: 'Gallery', path: '/student-zone/gallery' },
            { name: 'Enquiry for admission', path: '/student-zone/enquiry-for-admission' },
            { name: 'Competitive exams', path: '/student-zone/competitive-exams' },
          ])}
          {renderMenuItem('Contact', '/contact')}
        </nav>
      </div>
    </div>
  );
};

export default NavBar;