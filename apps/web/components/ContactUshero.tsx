'use client'
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
      <div className="bg-[#011926] text-white h-[650px] flex items-center justify-start p-4 pl-32">
        <div className="w-full max-w-lg">
          <div className="text-7xl font-bold mb-6">
            Contact <span className="text-yellow-400">Us</span>
          </div>
          <p className="text-lg mb-6">
            Please fill the form to share your queries, feedback or any concerns you may have about Omega or our programs.
          </p>
          <button
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-[15px]"
            onClick={handleEnquiryClick}
          >
            Enquiry now
          </button>
        </div>
      </div>
    </div>
  );
}

// bg-[#aa8f26]

export default ContactUshero;
