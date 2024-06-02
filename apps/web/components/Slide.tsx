// import Image from "next/image";

// interface SlideProps {
//     img: string;
//     title: string;
//     mainTitle: string;
// }

// const Slide = ({img, title, mainTitle}: SlideProps)=>{
//     return (
//         <div className="outline-none border-none relative">
//             <div className="absolute left-[30px] md:left-[70px] max-w-[250px] sm:max-w-[350px] top-[50%] -translate-y-[50%] spcae-y-2 space-y-2 lg:space-y-4 bg-[#ffffffa2] sm:bg-transparent p-4 sm:p-0 rounded-lg sm:rounded-none">
//                 <h3 className="text-red text-[24px] lg:text-[28px]">{title}</h3>
//                 <h2 className="text-black text-[24px] md:text-[28px] lg:text-[32px] font-bold leading [1.2]">{mainTitle}</h2>
//                 <h3 className="text-[24px] text-gray-500">
//                     starting at{" "}
//                     <b className="text-[20px] md:text-[24px] lg:text-[28px]">₹ 2000</b>
//                 </h3>
//                 <Image className="w-[100%] h-[100%] md:h-auto rounded-xl object-cover object-right md:object-left-bottom "
//                     src={img}
//                     alt="slide"
//                     width={2000}
//                     height={2000}
//                 />
//             </div>
//         </div>
//     )
// } 

// export default Slide;




// "use client"
// // import { useState } from 'react'
// // import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

// // type Slide = {
// //   image?: string
// //   title?: string
// //   subtitle?: string
// //   buttonText?: string
// // }

// // const slides: Slide[] = [
// //   {
// //     image: '/omega.png',
// //     title: 'Get The Education To Create The Career Of Your Dreams',
// //     subtitle: 'NEET/IIT-JEE Foundation',
// //     buttonText: 'Join Us',
// //   },
// //   {
// //     image: '/omega.png',
// //     title: 'Another Slide Title',
// //     subtitle: 'Another Slide Subtitle',
// //     buttonText: 'Join Us',
// //   },
// //   // Add more slides as needed
// // ]

// // const Hero = () => {
// //   const [currentIndex, setCurrentIndex] = useState(0)

// //   const nextSlide = () => {
// //     setCurrentIndex((prevIndex) =>
// //       prevIndex === slides.length - 1 ? 0 : prevIndex + 1
// //     )
// //   }

// //   const prevSlide = () => {
// //     setCurrentIndex((prevIndex) =>
// //       prevIndex === 0 ? slides.length - 1 : prevIndex - 1
// //     )
// //   }

// //   return (
// //     <div className="relative w-full h-96 bg-green-700">
// //       {slides.map((slide, index) => (
// //         <div
// //         key={index}
// //         className={`absolute inset-0 transition-opacity duration-1000 object-cover w-full h-full ${
// //           index === currentIndex ? 'opacity-100' : 'opacity-0'
// //         }`}
// //         style={{
// //           backgroundImage: `url(${slide.image})`,
// //           backgroundSize: 'cover',
// //           backgroundPosition: 'center',}}
// //         >
// //           <div className="flex justify-center items-center h-full px-4 md:px-8">
// //             <div className="text-center text-white">
// //               <h1 className="text-2xl md:text-4xl font-bold mb-2">{slide.title}</h1>
// //               <p className="text-lg md:text-2xl mb-4">{slide.subtitle}</p>
// //               <button className="bg-yellow-500 text-black py-2 px-4 rounded-md">
// //                 {slide.buttonText}
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       ))}
// //       <button
// //         onClick={prevSlide}
// //         className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white rounded-full p-2"
// //       >
// //         <FaArrowLeft />
// //       </button>
// //       <button
// //         onClick={nextSlide}
// //         className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full p-2"
// //       >
// //         <FaArrowRight />
// //       </button>
// //     </div>
// //   )
// // }

// // export default Hero


// // import React from 'react';
// // // import hero from "./assets/hero.png"

// // function App() {
// //  return (
// //    <div className="w-screen h-screen text-white" style={{
// //      background: "linear-gradient(90deg, rgba(131, 126, 226, 1) 24%, rgba(114, 114, 226, 1) 58%, rgba(0, 212, 255, 1) 100%)"
// //    }}>
// //      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
// //        <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center" alt="hero" src="/omega.png" />
// //        <div className="text-center lg:w-5/12 w-full">
// //          <h1 className="my-4 text-5xl font-bold leading-tight">
// //            Turn your designs into production-ready frontend
// //          </h1>
// //          <p className="text-2xl mb-8">
// //            Ship products 5-10x faster with your existing design tools, tech stacks & workflows!
// //          </p>
// //          <div className="flex justify-center mx-auto">
// //            <button
// //              className="hover:underline bg-white text-gray-800 font-bold rounded-full  py-4 px-8">
// //              View Projects
// //            </button>
// //            <button
// //              className="ml-4 hover:underline bg-white text-gray-800 font-bold rounded-full  py-4 px-8">
// //              Plugins
// //            </button>
// //          </div>
// //        </div>
// //      </div>
// //    </div >
// //  );
// // }

// // export default App

// import Image from "next/image"
// import Slide from "./Slide"


// const Hero = () => {
//     const slideData = [
//         {
//             image: "/omega.png",
//             title: "this is title 1",

//         },
//         // {
//         //     image: "/omega.png",
//         //     title: "this is title 2"
//         // },
//         // {
//         //     image: "/omega.png",
//         //     title: "this is title 3"
//         // }
//     ]

//     return (
//         <div className="flex w-full h-full bg-black-100 justify-center items-center">
//             <div className="w-[90%]">
//                 {slideData.map((slide, index) => (
//                     <Slide key={index} image={slide.image} title={slide.title} />
//                 ))}
//             </div>
//         </div>
//     )
// } 

// export default Hero



import Image from "next/image"

interface SlideProps {
    image: string
    title: string
}

const Slide = ({image, title}: SlideProps) => {
    return (
    <header className="bg-hero bg-center bg-cover bg-orange-300 bg-no-repeat sm:p-16 py-16 px-8 flex justify-center lg:items-center max-lg:flex-col w-full sm:gap-16 gap-0">
      <div className="flex-1 flex flex-col gap-10">
        {/* <Image
          src="/omega.png"
          alt="logo"
          width={101}
          height={96}
          className="object-contain"
        /> */}
        <h1 className="sm:text-6xl text-5xl text-black lg:max-w-lg font-bold leading-[120%]">
          {title}
        </h1>
      </div>
      <div className="lg:flex-1 relative w-full h-[50vh] justify-center">
        <Image src={image} alt="anime" fill className="object-contain" />
      </div>
    </header>
    )
} 

export default Slide