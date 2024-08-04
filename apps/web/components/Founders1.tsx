import React from 'react';
import Carousel from './Carousel';
import Founders from './Founders';

const App: React.FC = () => {
  // Array of founder objects
  const foundersData = [
    {
      imagePath:"./sumansir.jpg",
      founderName:"Suman Kumar Thakur",
      degree: "",
      institution: " Mr. Suman Kumar Thakur  is the Founder & Director of Omega Study Centre, a premier institution for JEE & NEET preparation. He has been mentoring and guiding all the aspirants for more than 10 years.Over 10,000+ students have had their careers effectively influenced by his excellent guidance over the years, enabling them to matriculate into various IITs , Nits, Aiims & various respected medical colleges. He thinks that everyone can succeed in life if they are given the proper direction and advice to go in order to succeed in the cutthroat world. Driven by his passion for education, Mr. Suman spends significant time with his students, ensuring they receive the proper direction and support needed to succeed. He views mentoring as a lifelong mission, believing that every student can achieve greatness with the right guidance in this competitive world.",
      experience: "",
    },
    {
      imagePath:"./sumitsir1.jpeg",
      founderName:"Sumit kumar Chaubey",
      degree: "",
      institution: "Mr. Sumit Kumar Chaubey is the Founder & Managing Director of Omega Study Centre, a premier institution for JEE & NEET preparation. He has been mentoring and guiding all the aspirants for more than 10 years.Over 10,000+ students have had their careers effectively influenced by his superb mentorship over the years, enabling them to matriculate into various IITs , Nits, Aiims & various respected medical colleges. This journey continues as a crusade. To sate his enthusiasm for making dreams of many come true, he spends as much time as possible with students. He feels that becoming a mentor is a lifelong goal for him, not just a job. He thinks that everyone can succeed in life if they are given the proper direction and advice to go in order to succeed in the cutthroat world.",
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
