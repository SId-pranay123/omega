import React, { useState, useEffect, useRef } from 'react';

interface CarouselProps {
  slides: React.ReactNode[];
  interval?: number; // Time in milliseconds
}

const Carousel: React.FC<CarouselProps> = ({ slides, interval = 2000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const duplicatedSlides = [...slides, ...slides];
    const totalSlides = duplicatedSlides.length;

    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, interval);

    return () => clearInterval(slideInterval);
  }, [slides, interval]);

  useEffect(() => {
    // Check if slideRef.current is not null
    const currentSlide = slideRef.current;
    if (currentSlide) {
      if (currentIndex === 0) {
        currentSlide.style.transition = 'none';
        currentSlide.style.transform = 'translateX(0)';
        // Force a reflow by reading offsetWidth and then applying transitions
        // This forces the browser to re-calculate the style immediately
        const forceReflow = currentSlide.offsetWidth;
        requestAnimationFrame(() => {
          currentSlide.style.transition = 'transform 0.5s ease-in-out';
        });
      } else {
        currentSlide.style.transform = `translateX(-${currentIndex * (200 / slides.length)}%)`;
      }
    }
  }, [currentIndex, slides.length]);

  return (
    <div className="carousel-container relative w-full overflow-hidden">
      <div
        ref={slideRef}
        className="carousel flex transition-transform duration-500 ease-in-out"
      >
        {[...slides, ...slides].map((slide, index) => (
          <div key={index} className="slide flex-shrink-0 w-full md:w-1/3">
            {slide}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
