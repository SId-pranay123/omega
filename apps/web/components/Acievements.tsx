'use client'
import React from 'react';

interface AchievementProps {
  title: string;
  qualified: number;
  enrolled: number;
  intake: number;
}

const AchievementCard: React.FC<AchievementProps> = ({ title, qualified, enrolled, intake }) => (
  <div className="bg-purple-100 p-4 rounded-lg shadow-md text-center">
    <button
      className="bg-purple-500 text-white py-2 rounded text-lg font-semibold w-full"
      onClick={() => alert(`You clicked on ${title}`)}
    >
      {title}
    </button>
    <div className="mt-4 text-lg">
      <p className="font-semibold">{qualified} Students Qualified</p>
      <p>{enrolled} Students Enrolled</p>
      <p>{intake} Class Intake</p>
    </div>
  </div>
);


const Achievements: React.FC = () => (
  <div className="bg-gray-100 py-10">
    <h1 className="text-3xl font-bold text-center mb-10">Achievements</h1>
    <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      <AchievementCard title="NEET" qualified={80} enrolled={100} intake={100} />
      <AchievementCard title="JEE (Advanced)" qualified={75} enrolled={100} intake={100} />
      <AchievementCard title="JEE (Main)" qualified={82} enrolled={100} intake={100} />
    </div>
  </div>
);

export default Achievements;
