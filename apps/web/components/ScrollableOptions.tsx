'use client';
import React from 'react';

const ScrollableOptions: React.FC = () => {
  const handleScroll = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-wrap justify-around items-center py-4 bg-gray-100 rounded-xl shadow-md">
      <button
        onClick={() => handleScroll('section1')}
        className="text-gray-500 hover:text-gray-900 py-2 px-4 rounded-lg transition duration-300"
      >
        Course Description
      </button>
      <button
        onClick={() => handleScroll('section2')}
        className="text-gray-500 hover:text-gray-900 py-2 px-4 rounded-lg transition duration-300"
      >
        Results
      </button>
      <button
        onClick={() => handleScroll('section3')}
        className="text-gray-500 hover:text-gray-900 py-2 px-4 rounded-lg transition duration-300"
      >
        Fees
      </button>
      <button
        onClick={() => handleScroll('section4')}
        className="text-gray-500 hover:text-gray-900 py-2 px-4 rounded-lg transition duration-300"
      >
        What Students Say?
      </button>
    </div>
  );
};

export default ScrollableOptions;
