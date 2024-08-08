// import {Card } from "@repo/ui/card";
"use client";
import Card from "../components/Card";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Achievements from "../components/Acievements";
import Founders1 from "../components/Founders1";
import { useRouter } from "next/navigation";
import ScrollableOptions from "../components/ScrollableOptions";
import Section from "../components/RankerSection";

const trimString = (str : string) => {
  return str.length > 80 ? str.slice(0, 80) + "..." : str
}

export default function Page(): JSX.Element {

  const sections = [
    {
      title: 'IIT JEE',
      items: [
        {
          imageSrc: '/sanskriti.png',
          title: 'Sanskriti Mishra',
          description: 'IIT Roorkee',
          // buttonText: 'Buy Now',
          // onButtonClick: () => alert('Product 1 purchased!')
        },
        {
          imageSrc: '/manasresult.jpeg',
          title: 'Manas Agarwal',
          description: 'IIT Delhi',
          // buttonText: 'Buy Now',
          // onButtonClick: () => alert('Product 1 purchased!')
        },
        {
          imageSrc: '/sonu_ranker.png',
          title: 'Sonu Kumar Jha',
          description: 'IIT Roorkee',
          // buttonText: 'Buy Now',
          // onButtonClick: () => alert('Product 1 purchased!')
        },{
          imageSrc: '/muskan_ranker.png',
          title: 'Mushkan',
          description: 'IIT Delhi',
          // buttonText: 'Buy Now',
          // onButtonClick: () => alert('Product 1 purchased!')
        },{
          imageSrc: '/rkt_ranker.png',
          title: 'Rakesh Kumar Thakur',
          description: 'IIT Delhi',
          // buttonText: 'Buy Now',
          // onButtonClick: () => alert('Product 1 purchased!')
        },
        {
          imageSrc: '/rajeev_ranker.png',
          title: 'Rajeev Ranjan',
          description: 'IIT Delhi',
          // buttonText: 'Buy Now',
          // onButtonClick: () => alert('Product 1 purchased!')
        },
        {
          imageSrc: '/navnnet_ranker.png',
          title: 'Navneet Raj',
          description: 'IIT Roorkee',
          // buttonText: 'Buy Now',
          // onButtonClick: () => alert('Product 1 purchased!')
        },
        {
          imageSrc: '/aryan_ranker.png',
          title: 'Aryan Kumar',
          description: 'IIT Kharaghpur',
          // buttonText: 'Buy Now',
          // onButtonClick: () => alert('Product 1 purchased!')
        },
        {
          imageSrc: '/himanshu_ranker.png',
          title: 'Himanshu Jha',
          description: 'IIT Kharaghpur',
          // buttonText: 'Buy Now',
          // onButtonClick: () => alert('Product 1 purchased!')
        },

      ],
    },
    {
      title: 'NEET',
      items: [
        {
          imageSrc: '/alia.jpg',
          title: 'Aliya Hussain',
          description: 'AIIMS',
          // buttonText: 'Buy Now',
          // onButtonClick: () => alert('Product 3 purchased!')
        },
        {
          imageSrc: '/ria.jpg',
          title: 'Riya Choudhary',
          description: 'SKMCH',
          // buttonText: 'Buy Now',
          // onButtonClick: () => alert('Product 3 purchased!')
        },
        {
          imageSrc: '/sakshi.jpg',
          title: 'Sakshi Kumari',
          description: 'DMCH',
          // buttonText: 'Buy Now',
          // onButtonClick: () => alert('Product 3 purchased!')
        },
        {
          imageSrc: '/megha.jpg',
          title: 'Megha Kumari',
          description: 'SKMCH',
          // buttonText: 'Buy Now',
          // onButtonClick: () => alert('Product 3 purchased!')
        },
      ],
    },
    // Additional sections...
  ];

  const router = useRouter();
  const iitDescription = "Our JEE (Mains + Advance)  courses are designed to help students achieve excellent results and high ranks in the Joint Entrance Examination. We focus on building a strong foundation of concepts and knowledge, ensuring that each student gains a better understanding of the subjects. With our expert faculty and comprehensive study materials, we guide students through a structured learning path that enhances their problem-solving skills and prepares them for success in the JEE exams along with boards."
  const neetDescription = "Our NEET courses aim to provide students with the knowledge and skills necessary to excel in the National Eligibility cum Entrance Test. We emphasize a deep understanding of key concepts in biology, chemistry, and physics, helping students achieve outstanding results and top ranks. Our experienced instructors and well-organized curriculum ensure that students have a better understanding of the subjects, enabling them to confidently tackle the challenges of the NEET exam."
  const foundationDescription = "We also offer classes to students who are preparing for Pre-Board exams to ensure that they perfrom to give the best results."

  return (
    <>
      <main >
        <Hero />

        {/* -----------------------------Courses-------------------------------- */}

        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center py-6">
            <h1 className="text-3xl font-bold"> Courses</h1>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-6">
            {/* <Card image="/abhishek.jpeg" title="IIT JEE" details="Best coaching in North Bihar" href="#"/>
            <Card image="/neet.jpg" title="NEET" details="Best coaching in North Bihar" href="#"/>
            <Card image="/omega.png" title="FOUNDATION" details="Best coaching in North Bihar" href="#"/>
            <Card image="/omega.png" title="Class 6-10" details="Best coaching in North Bihar" href="#"/> */}

            <Card imageSrc="/abhishek.jpeg" title="JEE(Mains + Advance)" description={trimString(iitDescription)} 
                      buttonText="Know More"
                    onButtonClick={() => router.push("/courses/iit-jee")}
                  />
            <Card imageSrc="/neet.jpg" title="NEET" description={trimString(neetDescription)}
                      buttonText="Know More"
                    onButtonClick={() => router.push("/courses/neet")}
                  />
            <Card imageSrc="/omega.png" title="Pre-Foundation" description={trimString(foundationDescription)}
                      buttonText="Know More"
                    onButtonClick={() => router.push("/courses/foundation")}
                  />
            {/* <Card imageSrc="/abhishek.jpeg" title="IIT-JEE" description="We offer the best online coaching for IIT-JEE exam preparation, making it an ideal choice for aspirants." 
                      buttonText="Know More"
                    // onButtonClick={handleKnowMoreClick}
                  /> */}
            
          </div>
        </div>

        <Achievements />
        <Stats />

        {/* // -----------------------------Top Rankers-------------------------------- */}
        {/* <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center py-6">
            <h1 className="text-3xl font-bold"> Top Rankers </h1>
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6">
            <Card imageSrc="/sanskriti.png" title="Sanskriti Mishra" description="IIT Roorkee" 
                  />
            <Card imageSrc="/manas_ranker.png" title="Manas Agarwal" description="IIT Delhi" 
                  
                  />
            <Card imageSrc="/rkt_ranker.png" title="Rakesh Kumar Thakur" description="IIT Delhi" />
            <Card imageSrc="/rajeev_ranker.png" title="Rajeev Ranjan" description="IIT Delhi" />
            <Card imageSrc="/gopal_ranker.png" title="Gopal " description="IIT Delhi" />
            <Card imageSrc="/muskan_ranker.png" title="Mushkan " description="IIT Delhi" />
            <Card imageSrc="/navnnet_ranker.png" title="Navneet Raj" description="IIT Roorkee" />
            <Card imageSrc="/pankaj_ranker.png" title="Pankaj Kumar" description="IIT Roorkee" />
            <Card imageSrc="/sonu_ranker.png" title="Sonu Kumar jha" description="IIT Roorkee" />
            <Card imageSrc="/ritik_ranker.png" title="Ritik Jha" description="IIT Roorkee" />
            <Card imageSrc="/safi_ranker.png" title="Safi Azam" description="IIT Roorkee" />
            <Card imageSrc="/ritik_ranker.png" title="Ritik Jha" description="IIT Roorkee" />
            

            <Card imageSrc="/ria.jpg" title="Riya Choudhary" description="SKMCH" 
                  
                  />
            <Card imageSrc="/alia.jpg" title="Aliya Hussain" description="..." 
                     
                  />
            
          </div>
        </div> */}


    <div className="container mx-auto p-8 ">
      {sections.map((section, index) => (
        <Section key={index} {...section} />
      ))}
    </div>


        {/* // -----------------------------Our faculties-------------------------------- */}
        {/* <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center py-6">
            <h1 className="text-3xl font-bold"> Faculty Panel </h1>
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6">
            <Card image="/omega.png" title="John doe" subtitle="Physics" details="Physics ranker" href="#"/>
            <Card image="/omega.png" title="Jane Doe" subtitle="Chemistry" details="Chemistry ranker" href="#"/>
            <Card image="/omega.png" title="SOme name" subtitle="Maths" details="Maths ranker" href="#"/>
            <Card image="/omega.png" title="Another name" subtitle="English" details="English ranker" href="#"/>
          </div>
        </div> */}
        
        {/* <ScrollableOptions/> */}
        {/* <PageWithSections/> */}
        <Founders1/>
      </main>
    </>
  );
}
