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
    quote: 'I owe my JEE success to Omega Study Centre. The regular tests, doubt-clearing sessions, and motivational support kept me focused and confident throughout my journey.',
  },
  {
    name: 'Sanskriti Mishra',
    image: '/sanskriti.png',
    rank: 'JEE Main & Advanced (IIT Roorkee)',
    quote: 'I am very happy with the course. The faculty is well prepared and the study material is very helpful. I would recommend Omega to anyone who is looking for a well-prepared course.',
  },
  {
    name: 'Himanshu Kumar',
    image: '/himanshu.jpg',
    rank: 'JEE Main & Advanced (IIT Kharaghpur)',
    quote: "Omega Study Centre transformed my JEE preparation. The faculty's dedication and the structured curriculum helped me secure a top rank. Highly recommended for serious aspirants!",
  },
  {
    name: 'Amar Ranjan',
    image: '/amar.jpg',
    rank: 'JEE Main & Advanced (IIT Bhu)',
    quote: 'Joining Omega Study Centre was the best decision for my JEE preparation. The experienced teachers and their unique teaching methods ensured I was well-prepared for every challenge.',
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
    <div className="flex flex-col items-center justify-center py-16 bg-[#FEFAF3] px-4 sm:px-8 lg:px-16">
      <div className="relative w-full max-w-4xl overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full p-6 sm:p-8 md:p-12 rounded-lg text-center"
            >
              <h2 className="text-2xl font-bold mb-4 whitespace-pre-line">
                Reason Why Students Love and{'\n'}Prefer Omega
              </h2>
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-lg sm:text-xl font-semibold">{testimonial.name}</h3>
              <p className="text-sm sm:text-base text-gray-600">{testimonial.rank}</p>
              <p className="mt-4 text-sm sm:text-base text-gray-700">
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
