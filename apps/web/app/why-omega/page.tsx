import Head from 'next/head';

const WhyOmega = () => {
  return (
    <div className="my-16">
      <Head>
        <title>Why Omega</title>
      </Head>
      <div className="max-w-full">
        {/* Header Section */}
        <header className="flex bg-[#4C4D4D]">
          <h1 className="text-2xl sm:text-3xl font-bold p-6 sm:px-12 lg:px-28 text-white">Why Omega</h1>
        </header>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row mt-8">
          <div className="lg:w-2/3 px-6 sm:px-12 lg:px-24 mx-auto">
            {/* Welcome Section */}
            <section className="mb-12">
              <h1 className="text-2xl sm:text-3xl font-bold mb-6">
                Welcome to Omega Study Center
              </h1>
              <div className="flex items-center">
                <h1 className="text-4xl sm:text-5xl font-bold p-4 text-red-500">10</h1>
                <div className="py-2 px-2 text-sm sm:text-base lg:text-lg">
                  <p>Years of Excellence in Learning</p>
                  <p>Management System</p>
                </div>
              </div>
            </section>

            {/* Infrastructure Section */}
            <section className="mb-12">
              <h2 className="text-xl sm:text-2xl font-semibold text-red-500">
                Infrastructure
              </h2>
              <p className="text-gray-600 mt-4 text-sm sm:text-base">
                At OMEGA, the belief of students’ community has increased manifold owing to the outstanding results and nurturing of each student personally. OMEGA is known explicitly for the efforts it puts with an average student to make them a success story.
              </p>
              <p className="text-gray-600 mt-4 text-sm sm:text-base">
                OMEGA STUDY CENTRE, Darbhanga situated at Mirzapur Chowk (Heart of the city) in a new well-furnished building and pleasant environment provides a cozy environment conducive for learning. The carpet area of the institute is 16000 sq. ft., largest in North Bihar. Omega has a hi-tech COMPUTER LAB, LIBRARY, STUDY ROOM, and SUFFICIENT PARKING AREA (4800 Sq. Ft.). Campus is entirely well-furnished, safe & secure.
              </p>
            </section>

            {/* Technology Section */}
            <section className="mb-12">
              <h2 className="text-xl sm:text-2xl font-semibold text-red-500">
                Highly Technology Equipped Classrooms
              </h2>
              <p className="text-gray-600 mt-4 text-sm sm:text-base">
                We believe in bringing the most modern techniques and delivering extraordinary care to students with the highest levels of ethics and standards. We are committed to continuing education, ensuring that each student is equipped with the tools and skills needed for success.
              </p>
            </section>
          </div>
          {/* <div className="lg:w-1/3 flex justify-center items-center px-6">
            <Image src="/wopic.jpg" alt="Omega Image" width={400} height={400} className="rounded-lg" />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default WhyOmega;
