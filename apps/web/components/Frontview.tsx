'use client'
import React, { useState } from 'react';

interface FrontviewProps {
  jee: string;
  nurture: string;
  batch: string;
  classInfo: string;
}

const Frontview1: React.FC<FrontviewProps> = ({ jee, nurture, batch, classInfo }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    class: '',
    course: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic, e.g., sending data to a server
    console.log(formData);
    alert('Form submitted successfully!');
  };

  return (
    <div className="relative bg-yellow-200 py-16 px-8 flex flex-col items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-transparent" />
      <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-stretch justify-between w-full max-w-6xl">
        <div className="flex flex-col items-center lg:items-start justify-center mb-8 lg:mb-0 lg:w-2/3 lg:mr-5">
          <div className="text-center lg:text-left text-6xl font-bold mb-4 ml-50">
            <span className="block">{jee}</span>
            <span className="block text-red-600">{nurture}</span>
            <span className="block">{batch}</span>
            <div className="font-medium text-lg">
              {classInfo}
            </div>
          </div>
        </div>
        <div className="relative z-10 w-full lg:w-1/3 rounded-lg shadow-lg">
          <div className="bg-yellow-400 p-4 rounded-t-2xl text-white text-center" style={{ backgroundColor: '#efa902', color: 'white' }}>
            <h3 className="text-xl font-semibold ">
              Submit form for free counselling & scholarship
            </h3>
          </div>
          <div className="bg-white rounded-b-2xl p-6">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="w-full px-4 py-2 border rounded-lg"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email id"
                className="w-full px-4 py-2 border rounded-lg"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="mobile"
                placeholder="Mobile number"
                className="w-full px-4 py-2 border rounded-lg"
                value={formData.mobile}
                onChange={handleChange}
                required
              />
              <select
                name="class"
                className="w-full px-4 py-2 border rounded-lg"
                value={formData.class}
                onChange={handleChange}
                required
              >
                <option value="" disabled>Select class</option>
                <option value="10">11th</option>
                <option value="11">12th</option>
                <option value="12+">12th Pass</option>
              </select>
              <select
                name="course"
                className="w-full px-4 py-2 border rounded-lg"
                value={formData.course}
                onChange={handleChange}
                required
              >
                <option value="" disabled>Select Course</option>
                <option value="course1">JEE(MAIN + ADVANCED)</option>
                <option value="course2">NEET</option>
              </select>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="w-auto px-6 py-2 bg-red-500 text-white font-bold rounded-lg"
                >
                  Submit now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

// Sample usage
const Frontview: React.FC = () => {
  return (
    <Frontview1 
      jee="JEE" 
      nurture="NURTURE" 
      batch="BATCH" 
      classInfo="Class 10th to 11th Moving Students" 
    />
  );
};
export default Frontview;
