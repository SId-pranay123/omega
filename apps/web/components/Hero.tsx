"use client"
import Image from 'next/image';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const Hero = () => {
    return (
        <div className="relative w-full">
            <div className="mt-12 sm:mt-14 md:mt-16 lg:mt-16">
                <Carousel
                    additionalTransfrom={0}
                    arrows={true}
                    autoPlay={true}
                    autoPlaySpeed={10000}
                    centerMode={false}
                    infinite
                    responsive={responsive}
                    itemClass="carousel-item"
                    swipeable={true}
                    draggable={true}
                    showDots={true}
                    ssr={true}
                    keyBoardControl={true}
                    containerClass="carousel-container"
                >
                    <div className="relative w-full">
                        <div className="h-[400px] sm:h-[450px] md:h-[550px] lg:h-[600px] xl:h-[700px] bg-[#560002]">
                            <div className="relative w-full h-full">
                                <Image 
                                    src="/Banner.jpg"
                                    alt="omega"
                                    fill
                                    className="object-contain" 
                                    sizes="(max-width: 768px) 100vw,
                                           (max-width: 1024px) 90vw,
                                           80vw"
                                    priority
                                    quality={90}
                                />
                            </div>
                        </div>
                    </div>
                </Carousel>
            </div>
        </div>
    );
};

export default Hero;