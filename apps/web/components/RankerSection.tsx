// components/Section.tsx
import React from 'react';
import Carousel from './CarouselRanker';
import Card, { CardProps } from './Card'; // Assuming you have CardProps defined as before.
import { useRouter } from 'next/navigation';

interface SectionProps {
  title: string;
  items: CardProps[];
}

const Section: React.FC<SectionProps> = ({ title, items }) => {
    const router = useRouter();

  return (
    <div className="flex flex-col  md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
      <h2 className="text-2xl font-bold w-full md:w-2/3 px-4 py-2">{title}</h2>
      <div className="w-full md:w-4/5">
        {/* <Carousel slides={items.map(item => (
          <div className="w-full px-2">
            <Card {...item} />
          </div>
        ))} /> */}
        <div className="flex w-full overflow-hidden space-x-16">
          <div className="flex space-x-16 animate-loop-scroll">
             {items.map(item => (
              <Card {...item} className="max-w-none min-w-4/5"/>
             ))}
          </div>
          <div className="flex space-x-16 animate-loop-scroll " aria-hidden="true">
          {items.map(item => (
              <Card {...item} className="max-w-none min-w-4/5" aria-hidden="true"/>
             ))}
          </div>
      </div>
        <div className='flex items-end justify-end py-4'>
            <button
                onClick={() => router.push('/Gallery')}
                className="bg-[#D82025] text-white px-4 py-2 rounded-full"
            >
                Show More
            </button>
        </div>
        
      </div>
    </div>
  );
};

export default Section;
