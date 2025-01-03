import React, { useEffect, useRef, useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

interface StatCardProps {
  icon: React.ReactNode;
  value: string | number;
  label: string;
  animationDelay: number;
}

const StatCard: React.FC<StatCardProps> = ({ icon, value, label, animationDelay }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false); // Prevent re-animation
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true); // Mark as animated
        }
      },
      { threshold: 1.0 } // Trigger when fully visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [hasAnimated]);

  return (
    <div
      ref={ref}
      className={`flex flex-col items-center p-4 ${isVisible ? 'slide-in' : ''}`}
      style={{ animationDelay: `${animationDelay}s` }}
    >
      <div className="text-[#a85158] text-4xl mb-2">{icon}</div> {/* Updated color */}
      <div className="text-2xl font-bold text-gray-900">{value}</div>
      <div className="text-gray-600">{label}</div>
    </div>
  );
};

const Stats: React.FC = () => {
  return (
    <>
      <style jsx global>{`
        @keyframes slideInFromLeft {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .slide-in {
          animation: slideInFromLeft 0.5s ease-in-out forwards;
        }
      `}</style>
      <div className="bg-gray-100 py-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <StatCard
            icon={<i className="fas fa-award"></i>}
            value={10}
            label="Years of Excellence"
            animationDelay={0.5}
          />
          <StatCard
            icon={<i className="fas fa-user-graduate"></i>}
            value="12000+"
            label="Satisfied Students"
            animationDelay={1}
          />
          <StatCard
            icon={<i className="fas fa-chalkboard-teacher"></i>}
            value="30+"
            label="Experienced Faculties"
            animationDelay={1.5}
          />
          <StatCard
            icon={<i className="fas fa-users"></i>}
            value="95%"
            label="Satisfied Parents"
            animationDelay={2}
          />
        </div>
      </div>
    </>
  );
};

export default Stats;
