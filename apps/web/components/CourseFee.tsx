import React from 'react';

interface CourseFeeProps {
  slug: string;
  program: string;
}

const CourseFee: React.FC<CourseFeeProps> = ({ slug, program }) => {
  return (
    <div className="flex flex-col items-center justify-center py-8 px-4">
      <div className="text-center mb-6">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold">
          {`Course Fee for ${slug.toUpperCase()} - ${program}`}
        </h1>
        <p className="text-gray-600 mt-2 text-sm md:text-base">
          Available in Classroom Mode
        </p>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md md:max-w-lg">
        <div className="bg-red-600 text-white rounded-t-lg p-3">
          <h2 className="text-lg font-semibold text-center">Classroom Program</h2>
        </div>
        <div className="p-4">
          <p className="text-red-600 font-medium mb-4 text-sm md:text-center">
            CLASSROOM Mode is available for students who want to study at our offline center.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-center font-semibold text-sm md:text-base">
            <div className="p-4 bg-orange-200 rounded-md">
              {program === "Target Batch" ? (
                <>
                  <p>Admission + Kit Fee</p>
                  <p>{slug === "iit-jee" ? `₹ 14,000` : `₹ 18,000`}</p>
                </>
              ) : (
                <>
                  <p>Admission + Kit Fee</p>
                  <p>{slug === "iit-jee" ? `₹ 38,000` : `₹ 38,000`}</p>
                </>
              )}
            </div>
            <div className="p-4 bg-orange-200 rounded-md">
              {program === "Target Batch" ? (
                <>
                  <p>Tuition Fee</p>
                  <p>{slug === "iit-jee" ? `₹ 40,000` : `₹ 60,000`}</p>
                </>
              ) : (
                <>
                  <p>Tuition Fee</p>
                  <p>{slug === "iit-jee" ? `₹ 96,000` : `₹ 96,000`}</p>
                </>
              )}
            </div>
          </div>
          <div className="flex justify-center mt-6">
            <button className="bg-red-600 text-white py-2 px-6 rounded-md hover:bg-red-700 transition text-sm md:text-base">
              Pay Now
            </button>
          </div>
          <div className="mt-4 text-xs text-red-600 text-center">
            <p>* EMI option available with 0% interest rate.</p>
            <p>* Get Upto 100% Scholarship.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseFee;