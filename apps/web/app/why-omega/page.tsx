import Head from 'next/head';
import Image from 'next/image'

const WhyOmega = () => {
  return (
    < div className='my-16 '>
      <Head >
        <title>Why Omega</title>
      </Head>
      <div className="max-w-full">
        <header className="flex  bg-[#4C4D4D]">
          <h1 className="text-3xl font-bold justify-between p-6 px-28 text-white">Why Omega</h1>
        </header>
        <div className="flex">
          <div>

        <section className="px-24 mx-8 mt-8">
          <h1 className='text-3xl font-bold '>Welcome to Omega study center </h1>
          <div className='flex'>
            <h1 className='text-3xl font-bold p-6 text-red-500'>10</h1>
            <div className='py-6 px-2 text-xl'>
              <p>Years of Excellence in Learning </p>
              <p>Management System</p>
            </div>
          </div>
        </section>  
        <section className="mt-8 mx-8 px-24">
          <h2 className="text-2xl font-semibold text-red-500">Infrastructure</h2>
          <p className="text-gray-600 mt-4">At OMEGA, the belief of students’ community has increased manifolds owing to the outstanding results and nurturing of each student personally. OMEGA is known explicitly for the efforts it puts with an average student to make him / her success story.</p>
          <p className="text-gray-600 mt-2">OMEGA STUDY CENTRE, Darbhanga situated at Mirzapur Chowk (Heart of the city) in a new well-furnished building and pleasant environment provides cozy environment conducive for learning. The carpet area of the institute is 16000 sq. ft., largest in North Bihar. Omega has a hi-tech COMPUTER LAB, LIBRARY, STUDY ROOM, and SUFFICIENT PARKING AREA (4800 Sq. Ft.). Campus is entirely well furnished, safe & secure.</p>
        </section>
        <section className="mt-6 mx-8 px-24">
          <h2 className="text-2xl font-semibold text-red-500">Highly Technologies Equipped Classrooms</h2>
          <p className="text-gray-600 mt-4">We believe in bringing the most modern techniques and delivering extraordinary care to ailing population with the highest levels of ethics and standards. We are committed to continuing medical education, through our fellowship and DNB programs.

We believe in bringing the most modern techniques and delivering extraordinary care to ailing population with the highest.We believe in bringing the most modern techniques and delivering extraordinary care to ailing population with the highest levels of ethics and standards. We are committed to continuing medical education, through our fellowship and DNB programs.

We believe in bringing the most modern techniques and delivering extraordinary care to ailing population with the highest.</p>
        </section>
        </div>
          {/* <Image src="/wopic.jpg" alt="logo" layout='fill' /> */}
        </div>
      </div>
    </div>
  );
}

export default WhyOmega;
