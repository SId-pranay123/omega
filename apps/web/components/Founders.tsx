import React from 'react';

interface FoundersProps {
  imagePath: string;
  founderName: string;
  degree: string;
  institution: string;
  experience: string;
}

const Founders: React.FC<FoundersProps> = ({
  imagePath,
  founderName,
  degree,
  institution,
  experience,
}) => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-10">Our Founder</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <img 
              src={imagePath}
              alt={founderName} 
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-2/3 md:pl-10">
            <h3 className="text-2xl font-semibold mb-2">{founderName}</h3>
            <p className="text-lg font-medium mb-4">{degree}</p>
            <p className="text-gray-700 mb-4">{institution}</p>
            <p className="text-gray-700 mb-4">{experience}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Founders;
