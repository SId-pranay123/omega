"use client"
import Image from 'next/image';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 1,
        slidesToSlide: 1
    },
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
}


const Hero = () => {
    return (

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
            <div className='w-[100vw] h-[88vh] lg:flex md:flex items-center justify-around bg-orange-300 md:clip_path'>
                {/* <div className='p-10 flex justify-center items-center'>
                    <h1>Some title here</h1>
                </div> */}
                <div className="grid grid-rows-1 justify-center items-center gap-[2rem] my-auto">
                    <Image 
                        src="/Banner.jpg"
                        alt="omega"
                        width={1350}
                        height={700}
                        // className='py-4'
                    />
                </div>
            </div>
        </Carousel>
    )
}

export default Hero