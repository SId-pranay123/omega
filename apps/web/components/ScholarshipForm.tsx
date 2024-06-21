'use client'
import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';

interface FormData {
  name: string;
  stream: string;
  currentClass: string;
  mobileNumber: string;
  email: string;
}

const ScholarshipForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    stream: '',
    currentClass: '',
    mobileNumber: '',
    email: ''
  });

  const [typedText, setTypedText] = useState('OMEGA ');
  const fullText = 'TALENT SCHOLARSHIP EXAM';
  const typingSpeed = 100; // speed of typing
  const pauseDelay = 2000; // delay after typing is complete (in ms)

  useEffect(() => {
    let index = 0;
    let isPaused = false;

    const typeText = () => {
      if (!isPaused) {
        setTypedText('OMEGA ' + fullText.slice(0, index));
        index++;
        if (index > fullText.length) {
          isPaused = true;
          setTimeout(() => {
            isPaused = false;
            index = 0; // Reset index to loop the typing effect
          }, pauseDelay);
        }
      }
    };

    const interval = setInterval(typeText, typingSpeed);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // Reset form fields
    setFormData({
      name: '',
      stream: '',
      currentClass: '',
      mobileNumber: '',
      email: ''
    });
  };

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center min-h-screen bg-gradient-to-r from-yellow-200 via-pink-200 to-purple-200 mt-8 p-4 md:p-8 pt-16 md:pt-8">
      <div className="text-center max-w-4xl w-full lg:w-1/2 lg:mr-8 mb-8 lg:mb-0">
        <h1 className="text-xl md:text-2xl font-bold text-red-600 mb-2">Appear in Instant <span className="underline">Online</span></h1>
        <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-red-600 mb-1 whitespace-normal">
          <span>{typedText}</span><span className="caret">|</span>
        </h2>
        <h3 className="text-xl md:text-3xl lg:text-4xl font-bold text-red-600 mb-4">(OTSE)</h3>
        <div className="bg-gradient-to-r from-orange-400 to-red-600 text-white font-bold py-4 rounded-md shadow-lg mb-4 inline-block px-4 md:px-8">
          <p className="text-lg md:text-xl lg:text-2xl mb-2">Avail up to <span className="underline text-2xl md:text-3xl lg:text-4xl">100% Scholarship</span> on</p>
          <p className="text-lg md:text-xl lg:text-2xl">JEE(Main+Advanced) & NEET Classroom Courses</p>
        </div>
        <p className="text-lg md:text-xl text-red-600 font-bold">Registration Fee = <span className="line-through">Rs.100</span> FREE</p>
      </div>
      <div className="bg-white p-4 md:p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4 text-center">Register Here For Scholarship</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Your Name</label>
            <input 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              required
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Mobile Number</label>
            <input 
              type="text" 
              name="mobileNumber" 
              value={formData.mobileNumber} 
              onChange={handleChange} 
              required
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email Id</label>
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              required
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Stream</label>
            <select 
              name="stream" 
              value={formData.stream} 
              onChange={handleChange} 
              required
              className="w-full px-3 py-2 border rounded-lg"
            >
              <option value="">Select Stream</option>
              <option value="science">Science</option>
              <option value="commerce">Commerce</option>
              <option value="arts">Arts</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Current Class</label>
            <select 
              name="currentClass" 
              value={formData.currentClass} 
              onChange={handleChange} 
              required
              className="w-full px-3 py-2 border rounded-lg"
            >
              <option value="">Select Class</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>
          </div>
          <button type="submit" className="w-full bg-red-500 text-white px-4 py-2 rounded-lg">Register Now</button>
        </form>
      </div>
      <style jsx>{`
        .caret {
          animation: blink 1s step-end infinite;
        }

        @keyframes blink {
          from, to {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default ScholarshipForm;
