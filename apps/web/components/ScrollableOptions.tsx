'use client'
import React from 'react';

const ScrollableOptions: React.FC = () => {
  const handleScroll = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex justify-around py-4 bg-gray-100">
      <button onClick={() => handleScroll('section1')} className="text-gray-700 hover:text-gray-900">
        Section 1
      </button>
      <button onClick={() => handleScroll('section2')} className="text-gray-700 hover:text-gray-900">
        Section 2
      </button>
      <button onClick={() => handleScroll('section3')} className="text-gray-700 hover:text-gray-900">
        Section 3
      </button>
      <button onClick={() => handleScroll('section4')} className="text-gray-700 hover:text-gray-900">
        Section 4
      </button>
    </div>
  );
};

export default ScrollableOptions;
