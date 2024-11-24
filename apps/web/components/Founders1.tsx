import React from 'react';
import Carousel from './Carousel';
import Founders from './Founders';

const App: React.FC = () => {
  // Array of founder objects
  const foundersData = [
    {
      imagePath:"./cofounder1.jpg",
      founderName:"Suman Kumar Thakur",
      degree: "",
      institution: "Mr. Suman Kumar Thakur, the Founder and Director of Omega Study Centre, is a distinguished leader in JEE and NEET preparation. With over a decade of experience, he has mentored and guided thousands of aspirants, profoundly shaping the careers of more than 10,000 students who have gone on to secure admissions in IITs, NITs, AIIMS, and other prestigious medical institutions.He firmly believes that with the right guidance and direction, anyone can excel in the competitive world. Driven by his unwavering passion for education, Mr. Suman dedicates substantial time to his students, providing them with the support and mentorship needed to achieve their goals. He sees mentoring as a lifelong mission, empowering every student to realize their potential and achieve greatness.",
      experience: "",
    },
    {
      imagePath:"./cofounder.jpg",
      founderName:"Sumit kumar Chaubey",
      degree: "",
      institution: "Mr. Sumit Kumar Chaubey, the Founder and Managing Director of Omega Study Centre, has established a leading institution for JEE and NEET preparation. With over a decade of experience, he has guided and mentored countless aspirants, transforming the careers of more than 10,000 students who have secured admissions in IITs, NITs, AIIMS, and other esteemed medical colleges.Driven by his passion for helping students realize their dreams, Mr. Chaubey dedicates significant time to his students, ensuring they receive the guidance and support needed to excel. For him, mentorship is not merely a profession but a lifelong mission. He firmly believes that with the right direction and advice, every individual has the potential to thrive in the competitive world. His journey is a continuing crusade to inspire and empower future achievers.",
      experience: "",
    },
    // Add more founder objects as needed
  ];

  return (
    <div className="App">
      <Carousel 
        slides={foundersData.map((founder, index) => (
          <Founders
            key={index}
            imagePath={founder.imagePath}
            founderName={founder.founderName}
            degree={founder.degree}
            institution={founder.institution}
            experience={founder.experience}
          />
        ))}
        interval={3000} // Optional: specify the interval in milliseconds
      />
    </div>
  );
};

export default App;
