'use client';
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';

interface Testimonial {
  name: string;
  image: string;
  rank: string;
  quote: string;
}

interface TestimonialProps {
  slug: string;
}

const jeeTestimonials: Testimonial[] = [
  {
    name: 'Manas Agrawal',
    image: '/manas.jpeg',
    rank: 'JEE Main & Advanced (IIT Delhi)',
    quote: 'I owe my JEE success to Omega Study Centre. The regular tests, doubt-clearing sessions, and motivational support kept me focused and confident.',
  },
  {
    name: 'Sanskriti Mishra',
    image: '/sanskriti.png',
    rank: 'JEE Main & Advanced (IIT Roorkee)',
    quote: 'The faculty is well-prepared, and the study material is very helpful. Omega is ideal for anyone seeking a structured course.',
  },
  {
    name: 'Himanshu Kumar',
    image: '/himanshu.jpg',
    rank: 'JEE Main & Advanced (IIT Kharaghpur)',
    quote: 'Omega Study Centre transformed my preparation. Their dedication and structured curriculum helped me secure a top rank.',
  },
  {
    name: 'Amar Ranjan',
    image: '/amar.jpg',
    rank: 'JEE Main & Advanced (IIT BHU)',
    quote: 'The experienced teachers and unique methods ensured I was well-prepared for every challenge. Highly recommend Omega.',
  },
];

const neetTestimonials: Testimonial[] = [
  {
    name: 'Aliya Hussain',
    image: '/alia.jpg',
    rank: 'NEET (...)',
    quote: 'Omega Study Centre was instrumental in my NEET success. The expert faculty and comprehensive study materials provided me with the knowledge and confidence to excel in my exams.',
  },
  {
    name: 'Riya Choudhary',
    image: '/ria.jpg',
    rank: 'NEET (SKMCH)',
    quote: "With Omega Study Centre's guidance, I achieved a top rank in NEET. The personalized coaching and focused preparation strategies made all the difference in my journey.",
  },
  {
    name: 'Sakshi Kumari',
    image: '/sakshi.jpg',
    rank: 'NEET (DMCH)',
    quote: 'The structured approach and regular practice tests at Omega Study Centre helped me secure a great NEET rank. Their commitment to student success is truly commendable.',
  },
  {
    name: 'Megha',
    image: '/megha.jpg',
    rank: 'NEET (SKMCH)',
    quote: 'Thanks to Omega Study Centre, I was able to realize my dream of entering a top medical college. The supportive environment and expert mentorship were key to my achievement.',
  },
];

const foundationTestimonials: Testimonial[] = [];

const TestCarousel: React.FC<TestimonialProps> = ({ slug }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  let testimonials: Testimonial[] = [];

  if (slug === 'iit-jee') {
    testimonials = jeeTestimonials;
  } else if (slug === 'neet') {
    testimonials = neetTestimonials;
  } else {
    testimonials = foundationTestimonials;
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="flex flex-col items-center justify-center py-12 bg-[#FEFAF3] px-4 sm:px-8 lg:px-16">
      <div className="relative w-full max-w-4xl overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full p-4 sm:p-6 md:p-8 rounded-lg text-center"
            >
              <h2 className="text-lg sm:text-xl font-bold mb-2">
                Reason Why Students Love and Prefer Omega
              </h2>
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full mx-auto mb-3 object-cover"
              />
              <h3 className="text-base sm:text-lg font-semibold">{testimonial.name}</h3>
              <p className="text-xs sm:text-sm text-gray-600">{testimonial.rank}</p>
              <p className="mt-3 text-sm sm:text-base text-gray-700 leading-tight">
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
              className={`h-2 w-2 md:h-3 md:w-3 rounded-full mx-1 ${
                index === currentIndex ? 'bg-red-500' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestCarousel;
