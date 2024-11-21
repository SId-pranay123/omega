'use client';
// ContactUsform.tsx
import React, { useState } from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';
import ContactUshero from './ContactUshero';

const ContactUsform: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    course: '',
    class: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      course: '',
      class: '',
      message: '',
    });
  };

  return (
    <>
      <ContactUshero />
      <div
        id="contact-form-section"
        className="flex flex-col lg:flex-row bg-[#F3F3F3] p-6 md:p-12 rounded-lg shadow-md w-full mx-auto space-y-8 lg:space-y-0"
      >
        {/* Contact Information Section */}
        <div className="lg:w-2/5 p-6 bg-white rounded-lg flex flex-col justify-center space-y-8">
          <div className="flex items-start mb-6">
            <FaMapMarkerAlt className="w-8 h-8 mr-4 text-[#001926]" />
            <div>
              <h2 className="text-xl font-bold text-[#001926]">Our Address</h2>
              <p className="text-lg text-gray-700">
                Omega Darbhanga,
                <br />
                Mirzapur Chowk,
                <br />
                Darbhanga, Pin-846004
              </p>
            </div>
          </div>
          <div className="flex items-start mb-6">
            <FaPhone className="w-8 h-8 mr-4 text-[#001926]" />
            <div>
              <h2 className="text-xl font-bold text-[#001926]">Call us</h2>
              <p className="text-lg text-gray-700">
                You can reach us at:
                <br />
                <a href="tel:+1234567890" className="text-[#001926] font-bold">
                  +91-99310-53355
                </a>
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <FaEnvelope className="w-8 h-8 mr-4 text-[#001926]" />
            <div>
              <h2 className="text-xl font-bold text-[#001926]">Email us</h2>
              <p className="text-lg text-gray-700">
                Prefer to chat directly from your inbox?
                <br />
                Email us at:
                <br />
                <a
                  href="mailto:hello@thegoodalliance.org"
                  className="text-[#001926] font-bold"
                >
                  Info@Omegadarbhanga.Com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="lg:w-3/5 p-6">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="flex flex-wrap -mx-2">
              <div className="w-full md:w-1/2 px-2">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  className="w-full p-2 border-b-2 border-gray-300 bg-[#F3F3F3] text-[#001926] focus:border-blue-500 focus:outline-none placeholder-gray-500"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className="w-full md:w-1/2 px-2">
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  className="w-full p-2 border-b-2 border-gray-300 bg-[#F3F3F3] text-[#001926] focus:border-blue-500 focus:outline-none placeholder-gray-500"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-2">
              <div className="w-full md:w-1/2 px-2">
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  className="w-full p-2 border-b-2 border-gray-300 bg-[#F3F3F3] text-[#001926] focus:border-blue-500 focus:outline-none placeholder-gray-500"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="w-full md:w-1/2 px-2">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone number"
                  className="w-full p-2 border-b-2 border-gray-300 bg-[#F3F3F3] text-[#001926] focus:border-blue-500 focus:outline-none placeholder-gray-500"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-2">
              <div className="w-full md:w-1/2 px-2">
                <select
                  name="course"
                  className="w-full p-2 border-b-2 border-gray-300 bg-[#F3F3F3] text-[#001926] focus:border-blue-500 focus:outline-none"
                  required
                  value={formData.course}
                  onChange={handleChange}
                >
                  <option value="">Select course</option>
                  <option value="course1">Course 1</option>
                  <option value="course2">Course 2</option>
                  <option value="course3">Course 3</option>
                  <option value="course4">Course 4</option>
                </select>
              </div>
              <div className="w-full md:w-1/2 px-2">
                <select
                  name="class"
                  className="w-full p-2 border-b-2 border-gray-300 bg-[#F3F3F3] text-[#001926] focus:border-blue-500 focus:outline-none"
                  required
                  value={formData.class}
                  onChange={handleChange}
                >
                  <option value="">Select class</option>
                  <option value="class1">Class 1</option>
                  <option value="class2">Class 2</option>
                  <option value="class3">Class 3</option>
                  <option value="class4">Class 4</option>
                </select>
              </div>
            </div>
            <textarea
              name="message"
              placeholder="Message"
              className="w-full p-2 border-b-2 border-gray-300 bg-[#F3F3F3] text-[#001926] focus:border-blue-500 focus:outline-none placeholder-gray-500"
              rows={4}
              required
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <button
              type="submit"
              className="bg-[#001926] text-white font-bold py-3 px-6 rounded w-full lg:w-auto"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactUsform;
