'use client'
import React, { useState, useEffect } from 'react';

interface CarouselProps {
  slides: React.ReactNode[];
  interval?: number;
}

const Carousel: React.FC<CarouselProps> = ({ slides, interval = 2000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex(prevIndex =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(slideInterval);
  }, [slides.length, interval]);

  return (
    <div className="carousel-container" style={{ overflow: 'hidden' }}>
      <div
        className="carousel"
        style={{
          display: 'flex',
          transition: 'transform 0.5s ease-in-out',
          transform: `translateX(-${currentIndex * 100}%)`
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="slide"
            style={{ flex: '0 0 auto', width: '100%' }}
          >
            {slide}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
