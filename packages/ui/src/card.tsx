import Image from 'next/image';
export function Card({
  image,
  title,
  subtitle,
  details,
  href,
}: {
  image: string;
  title: string;
  subtitle?: string;
  details: string;
  href?: string;
}): JSX.Element {
  return (
    // <div className="p-8 max-w-lg border border-indigo-300 rounded-2xl hover:shadow-xl hover:shadow-indigo-50 flex flex-col items-center">
    //   <div className="bg-orange-300 rounded-lg m-3">
    //     <div className="relative w-full h-64 mb-4">
    //       <Image
    //         src={image}
    //         alt="Student studying"
    //         // layout="fill"
    //         objectFit="cover"
    //         className="rounded-t-lg"
    //         width={300}
    //         height={300}
    //       />
    //     </div>
    //     <h2 className="text-xl font-bold mb-2">{title } </h2>
    //     <p className="text-gray-700 mb-4">
    //       {details}
    //     </p>
    //     {href && <button className="px-4 py-2 bg-red-500 text-black rounded-full hover:bg-purple-700 focus:outline-none">
    //       Know More
    //     </button>}
        
    //   </div>
    // </div>


    <div className='max-w-sm bg-white border border-gray-200 shadow-md rounded-lg trasform-all duration-300 hover:scale-110 hover:shadow-lg' >
            {/* <a href="#">
                <img className="rounded-t-lg py-6  p-4" src={image} alt="Logo" />
            </a> */}
            <div className='p-5 flex justify-center items-center'>
            <Image 
                className='rounded-t-lg'
                src={image}
                alt="Logo"
                // layout='fill'
                objectFit='cover'
                width={300}
                height={300}
            />
            </div>
            
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900">{title}</h5>
                    {subtitle && <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900">({subtitle})</h5>}
                </a>
                <p className="mb-3 font-normal text-center text-gray-700 dark:text-gray-400">{details.substring(0, details.lastIndexOf(" "))}</p>
                { !details.includes("ranker") && 
                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>}
                
            </div>
        </div>  
  );
}
