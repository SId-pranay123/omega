"use client"
import Image from 'next/image';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

// const responsive = {
//     superLargeDesktop: {
//         // the naming can be any, depends on you.
//         breakpoint: { max: 4000, min: 3000 },
//         items: 1,
//         slidesToSlide: 1
//     },
//     desktop: {
//         breakpoint: { max: 3000, min: 1024 },
//         items: 1,
//         slidesToSlide: 1
//     },
//     tablet: {
//         breakpoint: { max: 1024, min: 464 },
//         items: 1,
//         slidesToSlide: 1
//     },
//     mobile: {
//         breakpoint: { max: 464, min: 0 },
//         items: 1,
//         slidesToSlide: 1
//     }
// }
const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
        slidesToSlide: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
        slidesToSlide: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1
    }
};


const Hero = () => {
    return (
    <div className='mt-16'>
        <Carousel 
                additionalTransfrom={0}
                arrows={true}
                autoPlay={true}
                autoPlaySpeed={10000}
                centerMode={false}
                infinite
                responsive={responsive}
                itemClass='item'
            >
            {/* <div className='w-[100vw] h-[88vh] lg:flex md:flex items-center justify-around bg-orange-300 md:clip_path'>
                <div className="grid grid-rows-1 justify-center items-center gap-[2rem] my-auto">
                    <Image 
                        src="/Banner.jpg"
                        alt="omega"
                        width={1350}
                        height={700}
                        // className='py-4'
                    />
                </div>
            </div> */}
            <div className='w-screen h-screen lg:flex md:flex items-center justify-around bg-[#560002]'>
                <div className="flex justify-center items-center w-full h-full">
                    <Image 
                        src="/Banner.jpg"
                        alt="omega"
                        // className='max-w-full max-h-full object-cover'
                        layout='fill'
                        objectFit='contain' // The image will be fully visible but may not cover the entire container
                        priority
                    />
                </div>
            </div>
        </Carousel>
    </div>
    )
}

export default Hero