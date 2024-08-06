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
    <div className="flex justify-around py-4 bg-gray-100 rounded-xl">
      <button onClick={() => handleScroll('section1')} className="text-gray-500 hover:text-gray-900">
        Course Description
      </button>
      <button onClick={() => handleScroll('section2')} className="text-gray-500 hover:text-gray-900">
        Results
      </button>
      <button onClick={() => handleScroll('section3')} className="text-gray-500 hover:text-gray-900">
        Fees
      </button>
      <button onClick={() => handleScroll('section4')} className="text-gray-500 hover:text-gray-900">
        What students says?
      </button>
    </div>
  );
};

export default ScrollableOptions;