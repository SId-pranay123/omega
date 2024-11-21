'use client';
import React from 'react';

const ContactUshero: React.FC = () => {
  const handleEnquiryClick = (): void => {
    const formSection = document.getElementById('contact-form-section');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <div className="bg-[#011926] text-white h-[650px] flex items-center justify-center md:justify-start p-6 sm:p-8 lg:pl-32">
        <div className="w-full max-w-md sm:max-w-lg text-center md:text-left">
          <div className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6">
            Contact <span className="text-yellow-400">Us</span>
          </div>
          <p className="text-base sm:text-lg lg:text-xl mb-4 sm:mb-6">
            Please fill the form to share your queries, feedback, or any concerns you may have about Omega or our programs.
          </p>
          <button
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 sm:px-8 rounded-[15px] transition duration-300 ease-in-out"
            onClick={handleEnquiryClick}
          >
            Enquiry now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUshero;