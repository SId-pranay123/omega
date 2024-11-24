

// // const Card = () => {
// //     return (
// //         <div className='max-w-sm bg-white border border-gray-200 rounded-lg shadow trasform-all duration-300 hover:scale-110'>
// //             <a href="#">
// //                 <img className="rounded-t-lg p-4" src="/omega.png" alt="Logo" />
// //             </a>
// //             <div className="p-5">
// //                 <a href="#">
// //                     <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">IIT JEE</h5>
// //                 </a>
// //                 <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Best coaching in North Bihar </p>
// //                 <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
// //                     Read more
// //                     <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
// //                         <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
// //                     </svg>
// //                 </a>
// //             </div>
// //         </div>  
// //     )
// // }

// import Image from "next/image";

// // export default Card


// interface CardProps {
//     imageSrc: string;
//     title: string;
//     description: string;
//     buttonText?: string;
//     onButtonClick?: () => void;
//   }
  
//   const Card: React.FC<CardProps> = ({ imageSrc, title, description, buttonText, onButtonClick }) => {
//     return (
//     //   <div className="max-w-xs mx-auto bg-white rounded-lg shadow-md overflow-hidden">
//     //     <div className="relative h-40">
//     //       <img src={imageSrc} alt={title} className="w-full h-full object-cover rounded-lg" />
//     //     </div>
//     //     <div className="p-4">
//     //       <h3 className="text-xl font-semibold mb-2">{title}</h3>
//     //       <p className="text-gray-600 mb-4">{description}</p>
//     //       {buttonText  && (
//     //         <button onClick={onButtonClick} className="bg-yellow-500 text-white px-4 py-2 rounded-full">
//     //           {buttonText}
//     //         </button>
//     //       )}
//     //     </div>
//     //   </div>

//     <div className=" flex flex-col justify-center items-center ">
//         <div className="flex items-center justify-center bg-gray-100 ">
//             <div className=" w-full max-w-4xl">
//                 <div
//                     className="absolute inset-0 bg-cover bg-center"
//                 ></div> 
//                 <div className="relative bg-white bg-opacity-75" 
//                 >
//                     <Image src = {imageSrc} alt = {title} width = {300} height = {300} className="rounded-full"/>
//                 </div>
//             </div>
//         </div>
//         <div className="pt-8 text-center">
//             <h1 className="font-bold">{title}</h1>
//         </div>
//         <div className="p-4 text-center">
//             <h1>{description}</h1>
//         </div>
//         {buttonText&& 
//         <div className="p-6 text-center">
//             <button onClick={onButtonClick} className="bg-yellow-500 text-white px-4 py-2 rounded-full">{buttonText}</button>
//         </div>}
//     </div>
//     );
//   };
  
//   export default Card;


import Image from 'next/image';

export interface CardProps {
    imageSrc: string;
    title: string;
    description: string;
    buttonText?: string; // Optional button text
    onButtonClick?: () => void; // Optional button click handler
    className?: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, title, description, buttonText, onButtonClick, className }) => {
    return (
        <div className={`bg-white rounded-lg overflow-hidden ${className ? className : ''} shadow-lg`}>
        {/* Circular Image */}
        <div className="relative mx-auto mt-4" style={{ height: '200px', width: '200px' }}>
            <Image
                src={imageSrc}
                alt={title}
                layout="fill"
                objectFit="cover" // Ensures the image maintains aspect ratio while filling the container
                style={{borderRadius:'100%'}}
            />
        </div>
        <div className="p-4 flex flex-col items-center justify-center">
            <h3 className="text-lg text-center font-bold mb-2">{title}</h3>
            <p className="text-gray-700 text-center mb-4">{description}</p>
            {buttonText && (
                <button
                    onClick={onButtonClick}
                    className="bg-[#D82025] text-white px-4 py-2 rounded-full hover:bg-[#a8161d] transition-colors duration-300"
                >
                    {buttonText}
                </button>
            )}
        </div>
    </div>
    );
};

export default Card;
