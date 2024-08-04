// components/CourseFee.tsx
import React from 'react';

interface CourseFeeProps {
  slug : string;
  program: string;
}

const CourseFee: React.FC<CourseFeeProps> = ({slug, program}) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-8">
      <div className="text-center mb-6">
        <h1 className="text-2xl md:text-3xl font-semibold">{`Course Fee for ${slug.toUpperCase()} - ${program}`}</h1>
        <p className="text-gray-600 mt-2">Available in Classroom Mode</p>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg w-full">
        <div className="bg-red-600 text-white rounded-t-lg p-2">
          <h2 className="text-lg font-semibold">Classroom Program</h2>
        </div>
        <div className="p-4">
          <p className="text-red-600 font-semibold mb-4">
            CLASSROOM Mode is available for student who wants to study in offline center
          </p>
          <div className="grid grid-cols-2 gap-4 text-center font-semibold">
            <div className="p-4 bg-orange-200 rounded-md">
              {program === "Target Batch" ?
               <><p>Admission + Kit Fee</p><p>{slug === "iit-jee" ? `₹ 14,000`: `₹ 18,000`}</p></>
              : <><p>Admission + Kit Fee</p><p>{slug === "iit-jee" ? `₹ 38,000`: `₹ 38,000`}</p></> }
              
            </div>
            <div className="p-4 bg-orange-200 rounded-md">
              {program === "Target Batch" ?
              <><p>Tuition Fee</p><p>{slug === "iit-jee" ? `₹ 40,000`: `₹ 60,000`}</p></>  
              : <><p>Tuition Fee</p><p>{slug === "iit-jee" ? `₹ 96,000`: `₹ 96,000`}</p></>}
            </div>
            {/* <div className="p-4 bg-orange-300 rounded-md">
              <p>Total Fee</p>
              <p>₹ 1,16,000</p>
            </div> */}
          </div>
          <div className="flex justify-center mt-6">
            <button className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition">
              Pay Now
            </button>
          </div>
          <div className="mt-4 text-xs text-red-600">
            <p>* EMI option available with 0% interest rate.</p>
            <p>* Get Upto 100% Scholarship.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseFee;
