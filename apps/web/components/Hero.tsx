"use client"
import Image from 'next/image';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


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
