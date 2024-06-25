
import React from 'react'
import ScholarshipForm from '../../components/ScholarshipForm'
import Image from 'next/image'

const page = () => {
  return (
    <div>
        <ScholarshipForm/>

        <div className='p-12 text-center'>
          <h1 className="text-3xl font-bold ">Omega Talent Seacrh Examination</h1>
          <p className='max-w-3xl mx-auto py-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>

        <div className='grid lg:grid-cols-2 sm:grid-cols-1 px-10 pb-8'>
          <div className=' m-4 flex justify-center rounded-xl shadow-xl gap-4 items-center'>
            <div className='w-[92%] h-[85%] bg-red-500 '>
              <Image src={""} alt="logo" width={300} height={300} />
            </div>
          </div>
          <div className=' m-4 flex justify-center rounded-xl shadow-xl gap-4 items-center'>
            <div className='w-[92%] h-[85%] bg-red-500 '>
            <Image src={""} alt="logo" width={300} height={300} />
            </div>
          </div>
          <div className=' m-4 flex justify-center rounded-xl shadow-xl gap-4 items-center'>
            <div className='w-[92%] h-[85%] bg-red-500 '>
              <Image src={""} alt="logo" width={300} height={300} />
            </div>
          </div>
          <div className=' m-4 flex justify-center rounded-xl shadow-xl gap-4 items-center'>
            <div className='w-[92%] h-[85%] bg-red-500 '>
              <Image src={""} alt="logo" width={300} height={300} />
            </div>
          </div>
          <div className=' m-4 flex justify-center rounded-xl shadow-xl gap-4 items-center'>
            <div className='w-[92%] h-[85%] bg-red-500 '>
              <Image src={""} alt="logo" width={300} height={300} />
            </div>
          </div>
          <div className=' m-4 flex justify-center rounded-xl shadow-xl gap-4 items-center'>
            <div className='w-[92%] h-[85%] bg-red-500 '>
              <Image src={""} alt="logo" width={300} height={300} />
            </div>
          </div>
          <div className=' m-4 flex justify-center rounded-xl shadow-xl gap-4 items-center'>
            <div className='w-[92%] h-[85%] bg-red-500 '>
              <Image src={""} alt="logo" width={300} height={300} />
            </div>
          </div>
          
          
        </div>
    </div>
  )
}

export default page