import React from 'react';
const Footer: React.FC = () => {
  return (
    <footer className="bg-[#7a0d0fe5] py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <div className="text-white rounded-full w-10 h-10 flex items-center justify-center">
            {/* Replace with your logo/icon */}
            {/* <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 18.364A9 9 0 1118.364 5.121 9 9 0 015.121 18.364z"></path>
            </svg> */}
            <img src="/omega.png" alt="Logo" />
          </div>
          <span className="ml-3 text-xl text-white font-bold">Omega Study Center</span>
        </div>
        <div className="flex flex-col md:flex-row justify-between text-white w-full md:w-auto">
          <div className="mb-4 md:mb-0 md:mr-8">
            <h3 className="font-semibold mb-2">PRODUCT</h3>
            <ul>
              <li><a href="#" className="hover:underline">Features</a></li>
              <li><a href="#" className="hover:underline">Integrations</a></li>
              <li><a href="#" className="hover:underline">Pricing</a></li>
              <li><a href="#" className="hover:underline">FAQ</a></li>
            </ul>
          </div>
          <div className="mb-4 md:mb-0 md:mr-8">
            <h3 className="font-semibold mb-2">COMPANY</h3>
            <ul>
              <li><a href="#" className="hover:underline">Privacy</a></li>
              <li><a href="#" className="hover:underline">Terms of Service</a></li>
            </ul>
          </div>
          <div className="mb-4 md:mb-0 md:mr-8">
            <h3 className="font-semibold mb-2">DEVELOPERS</h3>
            <ul>
              <li><a href="#" className="hover:underline">Public API</a></li>
              <li><a href="#" className="hover:underline">Documentation</a></li>
              <li><a href="#" className="hover:underline">Guides</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">SOCIAL MEDIA</h3>
            <ul className="flex space-x-4">
              <li><a href="https://www.facebook.com/omegastudycentredbg?mibextid=ZbWKwL" target='_blank' rel="noopener noreferrer" className="hover:underline"><i className="fab fa-facebook-f"></i></a></li>
              <li><a href="#" className="hover:underline"><i className="fab fa-twitter"></i></a></li>
              <li><a href="https://www.instagram.com/omega_darbhanga/" className="hover:underline"><i className="fab fa-instagram"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-300 mt-8 pt-4 text-center text-white">
        <p>&copy; 1968 Company Co. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer