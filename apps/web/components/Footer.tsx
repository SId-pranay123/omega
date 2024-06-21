import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#F8BC4D] text-black pt-10 ">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* About Us */}
          <div className="w-full sm:w-1/2 md:w-1/4 mb-4">
            <h3 className="font-bold mb-2">About Us</h3>
            <ul>
              <li className="mb-1"><a href="#" className="hover:underline">Why Omega</a></li>
              <li className="mb-1"><a href="#" className="hover:underline">About Omega Study Center</a></li>
              <li className="mb-1"><a href="#" className="hover:underline">JEE/NEET E-Brochure</a></li>
              <li className="mb-1"><a href="#" className="hover:underline">Foundation E-Brochure</a></li>
              <li className="mb-1"><a href="#" className="hover:underline">Omega Plus Magazine</a></li>
              <li className="mb-1"><a href="#" className="hover:underline">Omega Arjun Program</a></li>
            </ul>
          </div>
          {/* About Exam */}
          <div className="w-full sm:w-1/2 md:w-1/4 mb-4">
            <h3 className="font-bold mb-2">About Exam</h3>
            <ul>
              <li className="mb-1"><a href="#" className="hover:underline">JEE Main</a></li>
              <li className="mb-1"><a href="#" className="hover:underline">JEE Advanced</a></li>
              <li className="mb-1"><a href="#" className="hover:underline">NEET</a></li>
              <li className="mb-1"><a href="#" className="hover:underline">NTSE</a></li>
              <li className="mb-1"><a href="#" className="hover:underline">Answer Key & Solutions</a></li>
              <li className="mb-1"><a href="#" className="hover:underline">Registration Form</a></li>
              <li className="mb-1"><a href="#" className="hover:underline">Admission Open</a></li>
            </ul>
          </div>
          {/* Contact Us */}
          <div className="w-full sm:w-1/2 md:w-1/4 mb-4">
            <h3 className="font-bold mb-2">Contact Us</h3>
            <ul>
              <li className="mb-1"><a href="#" className="hover:underline">Contact Us</a></li>
              <li className="mb-1"><a href="#" className="hover:underline">Enquiry</a></li>
              <li className="mb-1"><a href="#" className="hover:underline">Be A Partner</a></li>
              <li className="mb-1"><a href="#" className="hover:underline">Associate Consultant</a></li>
              <li className="mb-1"><a href="#" className="hover:underline">Feedback & Grievance</a></li>
              <li className="mb-1"><a href="#" className="hover:underline">Careers</a></li>
              <li className="mb-1"><a href="#" className="hover:underline">Student Parent Login</a></li>
            </ul>
          </div>
          {/* Useful Links */}
          <div className="w-full sm:w-1/2 md:w-1/4 mb-4">
            <h3 className="font-bold mb-2">Useful Links</h3>
            <ul>
              <li className="mb-1"><a href="#" className="hover:underline">Study Center</a></li>
              <li className="mb-1"><a href="#" className="hover:underline">Fee Payment</a></li>
              <li className="mb-1"><a href="#" className="hover:underline">MOST</a></li>
              <li className="mb-1"><a href="#" className="hover:underline">Omega Blog</a></li>
              <li className="mb-1"><a href="#" className="hover:underline">I-MMP</a></li>
              <li className="mb-1"><a href="#" className="hover:underline">Amrit Course</a></li>
              <li className="mb-1"><a href="#" className="hover:underline">Coaching Guidelines</a></li>
            </ul>
          </div>
        </div>
        {/* Corporate Office */}
        <div className="flex flex-wrap justify-between items-center border-t border-gray-700 pt-4 mt-4">
          <div className="w-full md:w-1/2 mb-4 md:mb-0">
            <p className="mb-2">
              <strong>Corporate Office</strong>
            </p>
            <p className="mb-2">📍 Mirzapur chowk, Near bandhan store, 846004</p>
            <p className="mb-2">📞 18002121799</p>
            <p className="mb-2">📧 Info@motion.ac.in</p>
          </div>
          {/* Social Links */}
          <div className="w-full md:w-1/2 text-right">
            <p className="mb-2">FOLLOW US ON</p>
            <div className="flex justify-end space-x-4">
              <a href="#" className="hover:underline">F</a>
              <a href="#" className="hover:underline">I</a>
              <a href="#" className="hover:underline">Y</a>
            </div>
          </div>
        </div>
        {/* Footer Bottom */}
        <div className="flex flex-wrap justify-between items-center border-t border-gray-700 pt-4 mt-4">
          <div className="w-full md:w-1/2">
            <p>© 2024 All right reserved by Motion Education</p>
          </div>
          <div className="w-full md:w-1/2 text-right">
            <p>
              <a href="#" className="hover:underline">Privacy Policy</a> | <a href="#" className="hover:underline">Terms & Conditions</a> | <a href="#" className="hover:underline">Refund Rules</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
