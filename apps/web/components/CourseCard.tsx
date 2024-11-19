import React from 'react';

export interface CardProps {
    title: string;
    description: string;
    buttonText?: string;
    onButtonClick?: () => void;
    className?: string;
}

const CourseCard: React.FC<CardProps> = ({ title, description, buttonText, onButtonClick, className }) => {
    return (
        <div className={`w-80 h-60 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col justify-center p-6 ${className || ''}`}>
            <div className="space-y-4 text-center">
                <h3 className="text-xl font-bold text-gray-900 tracking-tight">
                    {title}
                </h3>
                <p className="text-gray-600">
                    {description}
                </p>
            </div>
            
            <div className="flex justify-center mt-6">
                <button
                    onClick={onButtonClick}
                    className="bg-[#D82025] text-white px-4 py-2 rounded-full inline-flex items-center
                             hover:bg-[#B31B1F] transform hover:scale-105 transition-all duration-200
                             active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#D82025] focus:ring-opacity-50"
                >
                    {buttonText}
                    <svg 
                        className="w-3.5 h-3.5 ml-2 rtl:rotate-180 transition-transform duration-200 group-hover:translate-x-1" 
                        aria-hidden="true" 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 14 10"
                    >
                        <path 
                            stroke="currentColor" 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth="2" 
                            d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default CourseCard;