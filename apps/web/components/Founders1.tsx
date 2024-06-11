import React from 'react';
import Carousel from './Carousel';
import Founders from './Founders';

const App: React.FC = () => {
  // Array of founder objects
  const foundersData = [
    {
      imagePath:"./omega.png",
      founderName:"A Vishwas Rao",
      degree: "  M.Sc. in Chemical Engineering from IIT Madras and Ph.D. in Material Science from IIT Delhi.",
      institution: " Mr. A Vishwas Rao is the Founder & Director of our classes which is a premier institution for all IIT/JEE preparation. He has been mentoring and guiding all the aspirants for more than 10 years.",
      experience: " Over 15,000+ students have had their careers effectively influenced by his superb teaching and coaching over the pastfew years, enabling them to matriculate into various IITs. This journey continues as a crusade. To sate his enthusiasm for teaching, he spends as much time as possible in the classroom. He feels that becoming a teacher is a lifelong goal for him, not just a job. He thinks that everyone can succeed in life if they are given the proper direction and advice to go in order to succeed in the cutthroat world.",
    },
    {
      imagePath:"./omega.png",
      founderName:"A Vishwas Rao",
      degree: "  M.Sc. in Chemical Engineering from IIT Madras and Ph.D. in Material Science from IIT Delhi.",
      institution: " Mr. A Vishwas Rao is the Founder & Director of our classes which is a premier institution for all IIT/JEE preparation. He has been mentoring and guiding all the aspirants for more than 10 years.",
      experience: " Over 15,000+ students have had their careers effectively influenced by his superb teaching and coaching over the pastfew years, enabling them to matriculate into various IITs. This journey continues as a crusade. To sate his enthusiasm for teaching, he spends as much time as possible in the classroom. He feels that becoming a teacher is a lifelong goal for him, not just a job. He thinks that everyone can succeed in life if they are given the proper direction and advice to go in order to succeed in the cutthroat world.",
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
