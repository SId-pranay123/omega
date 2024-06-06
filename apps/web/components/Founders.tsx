// components/Founder.tsx
import React from 'react';

const Founders: React.FC = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-10">Our Founder</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <img 
              src="/images/founder.jpg" // Update this path to your image path
              alt="Founder" 
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-2/3 md:pl-10">
            <h3 className="text-2xl font-semibold mb-2">A Vishwas Rao</h3>
            <p className="text-lg font-medium mb-4">
              M.Sc. in Chemical Engineering from IIT Madras and Ph.D. in Material Science from IIT Delhi.
            </p>
            <p className="text-gray-700 mb-4">
              Mr. A Vishwas Rao is the Founder & Director of our classes which is a premier institution for all IIT/JEE preparation. He has been mentoring and guiding all the aspirants for more than 10 years.
            </p>
            <p className="text-gray-700 mb-4">
              Over 15,000+ students have had their careers effectively influenced by his superb teaching and coaching over the past
              few years, enabling them to matriculate into various IITs. This journey continues as a crusade. To sate his enthusiasm for teaching, he spends as much time as possible in the classroom. He feels that becoming a teacher is a lifelong goal for him, not just a job. He thinks that everyone can succeed in life if they are given the proper direction and advice to go in order to succeed in the cutthroat world.
           </p>
         </div>
         </div>
         </div>
         </div>
);
};

export default Founders;