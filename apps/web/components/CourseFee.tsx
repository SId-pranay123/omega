import React from 'react';

interface CourseFeeProps {
  slug: string;
  program: string;
}

const CourseFee: React.FC<CourseFeeProps> = ({ slug, program }) => {
  return (
    <div className="flex flex-col items-center justify-center py-6 px-1 sm:px-3 w-full">
      <div className="text-center mb-4 w-full">
        <h1 className="text-sm sm:text-lg md:text-2xl font-semibold">
          {`Course Fee for ${slug.toUpperCase()} - ${program}`}
        </h1>
        <p className="text-gray-600 mt-1 text-xs sm:text-sm md:text-base">
          Available in Classroom Mode
        </p>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-4 w-[95%] sm:w-full sm:max-w-md md:max-w-lg">
        <div className="bg-red-600 text-white rounded-t-lg p-2">
          <h2 className="text-sm sm:text-lg font-semibold text-center">Classroom Program</h2>
        </div>
        <div className="p-3">
          <p className="text-red-600 font-medium mb-3 text-xs sm:text-sm md:text-center">
            CLASSROOM Mode is available for students who want to study at our offline center.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-center font-semibold text-xs sm:text-sm md:text-base">
            <div className="p-3 bg-orange-200 rounded-md w-full">
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
            <div className="p-3 bg-orange-200 rounded-md w-full">
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
          <div className="flex justify-center mt-4">
            <button className="bg-red-600 text-white py-1 px-4 rounded-md hover:bg-red-700 transition text-xs sm:text-sm md:text-base w-full sm:w-auto">
              Pay Now
            </button>
          </div>
          <div className="mt-3 text-xs text-red-600 text-center">
            <p>* EMI option available with 0% interest rate.</p>
            <p>* Get Upto 100% Scholarship.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseFee;