
// import React from 'react'
// import ScholarshipForm from '../../components/ScholarshipForm'
// import Image from 'next/image'

// const page = () => {
//   return (
//     <div>
//         <ScholarshipForm/>

//         <div className='p-12 text-center'>
//           <h1 className="text-3xl font-bold ">Omega Talent Seacrh Examination</h1>
//           <p className='max-w-3xl mx-auto py-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
//         </div>

//         <div className='grid lg:grid-cols-2 sm:grid-cols-1 px-10 pb-8'>
//           <div className=' m-4 flex justify-center rounded-xl shadow-xl gap-4 items-center'>
//             <div className='w-[92%] h-[85%] '>
//               <Image src={"/otse1.jpeg"} alt="logo" layout='fill' objectFit="cover" />
//             </div>
//           </div>
//           <div className=' m-4 flex justify-center rounded-xl shadow-xl gap-4 items-center'>
//             <div className='w-[92%] h-[85%] '>
//             <Image src={"/otse2.jpeg"} alt="logo" width={300} height={300}/>
//             </div>
//           </div>
//           {/* <div className=' m-4 flex justify-center rounded-xl shadow-xl gap-4 items-center'>
//             <div className='w-[92%] h-[85%] bg-red-500 '>
//               <Image src={""} alt="logo" width={300} height={300} />
//             </div>
//           </div>
//           <div className=' m-4 flex justify-center rounded-xl shadow-xl gap-4 items-center'>
//             <div className='w-[92%] h-[85%] bg-red-500 '>
//               <Image src={""} alt="logo" width={300} height={300} />
//             </div>
//           </div>
//           <div className=' m-4 flex justify-center rounded-xl shadow-xl gap-4 items-center'>
//             <div className='w-[92%] h-[85%] bg-red-500 '>
//               <Image src={""} alt="logo" width={300} height={300} />
//             </div>
//           </div>
//           <div className=' m-4 flex justify-center rounded-xl shadow-xl gap-4 items-center'>
//             <div className='w-[92%] h-[85%] bg-red-500 '>
//               <Image src={""} alt="logo" width={300} height={300} />
//             </div>
//           </div>
//           <div className=' m-4 flex justify-center rounded-xl shadow-xl gap-4 items-center'>
//             <div className='w-[92%] h-[85%] bg-red-500 '>
//               <Image src={""} alt="logo" width={300} height={300} />
//             </div>
//           </div>
          
//            */}
//         </div>
//     </div>
//   )
// }

// export default page

import React from 'react';
import ScholarshipForm from '../../components/ScholarshipForm';

const page = () => {
  return (
    <div>
        <ScholarshipForm />

        <div className='p-12 text-center'>
          <h1 className="text-3xl font-bold">Omega Talent Search Examination</h1>
          <p className='max-w-3xl mx-auto py-8'>The Omega Talent Search Examination (OTSE) is a unique opportunity for aspiring students to showcase their academic potential. With no application fee required, OTSE is accessible to all students seeking to excel in their educational journey. Participants have the chance to win exciting prizes, such as laptops, bicycles, watches, and more, based on their performance in the examination. In addition to these prizes, the Omega Study Centre offers scholarships of up to 100% on admission fees, depending on the marks obtained in the OTSE. This initiative is designed to recognize and reward academic excellence, making quality education more affordable and accessible for talented students. Through OTSE, Omega Study Centre reaffirms its commitment to nurturing future leaders by providing them with the resources and support they need to succeed..</p>
        </div>

        <div className='grid lg:grid-cols-2 sm:grid-cols-1 px-10 pb-8'>
          <div className='m-4 rounded-xl shadow-xl'>
            <div className='w-full h-full relative rounded-xl overflow-hidden'>
              <img src="/otse1.jpeg" alt="logo" className='p-4 w-full h-full object-cover rounded-xl'/>
            </div>
          </div>
          <div className='m-4 rounded-xl shadow-xl'>
            <div className='w-full h-full relative rounded-xl overflow-hidden'>
              <img src="/otse2.jpeg" alt="logo" className='p-4 w-full h-full object-cover rounded-xl'/>
            </div>
          </div>
          <div className='m-4 rounded-xl shadow-xl'>
            <div className='w-full h-full relative rounded-xl overflow-hidden'>
              <img src="/otse3.jpeg" alt="logo" className='p-4 w-full h-full object-cover rounded-xl'/>
            </div>
          </div>
        </div>
    </div>
  );
}

export default page;
