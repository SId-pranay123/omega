import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';


interface StatCardProps {
  icon: React.ReactNode;
  value: string | number;
  label: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon, value, label }) => (
  <div className="flex flex-col items-center p-4">
    <div className="text-[#9f4648] text-4xl mb-2">{icon}</div>
    <div className="text-2xl font-bold text-gray-900">{value}</div>
    <div className="text-gray-600">{label}</div>
  </div>
);

const Stats: React.FC = () => (
  <div className="bg-gray-100 py-10">
    <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
      <StatCard 
        icon={<i className="fas fa-award"></i>} 
        value={10} 
        label="Years of Excellence" 
      />
      <StatCard 
        icon={<i className="fas fa-user-graduate"></i>} 
        value="12000+" 
        label="Satisfied Students" 
      />
      <StatCard 
        icon={<i className="fas fa-chalkboard-teacher"></i>} 
        value="30+" 
        label="Experienced Faculties" 
      />
      <StatCard 
        icon={<i className="fas fa-users"></i>} 
        value="95%" 
        label="Satisfied Parents" 
      />
    </div>
  </div>
);

export default Stats;