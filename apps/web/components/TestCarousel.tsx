'use client'
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';

interface Testimonial {
  name: string;
  image: string;
  rank: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Aniket Agrawal',
    image: '/neet.jpg', // Replace with the path to the image
    rank: 'JEE Main & Advanced (AIR 34)',
    quote: 'Genuinely, I would like to thank Omega for helping me crack JEE Advanced 2019. The guidance by all the teachers, the support of office staff and the study material, everything is just perfect to take you through JEE and other exams. Thank you Omega for making my career.',
  },
  {
    name: 'Manas Agrawal',
    image: '/manas.jpeg', // Replace with the path to the image
    rank: 'JEE Main & Advanced (AIR 34)',
    quote: 'I owe my JEE success to Omega Study Centre. The regular tests, doubt-clearing sessions, and motivational support kept me focused and confident throughout my journey.',
  },
  {
    name: 'Manas Agrawal',
    image: '/manas.jpeg', // Replace with the path to the image
    rank: 'JEE Main & Advanced (AIR 34)',
    quote: "Omega Study Centre transformed my JEE preparation. The faculty's dedication and the structured curriculum helped me secure a top rank. Highly recommended for serious aspirants!",
  },
  {
    name: 'Aniket Agrawal',
    image: '/neet.jpg', // Replace with the path to the image
    rank: 'JEE Main & Advanced (AIR 34)',
    quote: 'Joining Omega Study Centre was the best decision for my JEE preparation. The experienced teachers and their unique teaching methods ensured I was well-prepared for every challenge.',
  },
  // Add more testimonials as needed
];

const TestCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center py-16 bg-[#FEFAF3] ">
      <div className="relative w-3/4 overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex-shrink-0 w-full p-8  rounded-lg text-center">
              <h2 className="text-2xl font-bold mb-4 whitespace-pre-line">
                Reason Why Student Love and{'\n'}Prefer Omega
              </h2>
              <img src={testimonial.image} alt={testimonial.name} className="w-24 h-24 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-semibold">{testimonial.name}</h3>
              <p className="text-gray-600">{testimonial.rank}</p>
              <p className="mt-4 text-gray-700">
                <FontAwesomeIcon icon={faQuoteLeft} className="text-red-500 mr-2" />
                {testimonial.quote}
                <FontAwesomeIcon icon={faQuoteRight} className="text-red-500 ml-2" />
              </p>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-4 absolute bottom-4 left-0 right-0">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={`h-2 w-2 rounded-full mx-1 ${index === currentIndex ? 'bg-red-500' : 'bg-gray-300'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestCarousel;