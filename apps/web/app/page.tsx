// import {Card } from "@repo/ui/card";
"use client";
import Card from "../components/Card";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Achievements from "../components/Acievements";
import Founders1 from "../components/Founders1";
import { useRouter } from "next/navigation";
export default function Page(): JSX.Element {

  const router = useRouter();



  return (
    <>
      <main >
        <Hero />

        {/* -----------------------------Courses-------------------------------- */}

        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center py-6">
            <h1 className="text-3xl font-bold"> Courses</h1>
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6">
            {/* <Card image="/abhishek.jpeg" title="IIT JEE" details="Best coaching in North Bihar" href="#"/>
            <Card image="/neet.jpg" title="NEET" details="Best coaching in North Bihar" href="#"/>
            <Card image="/omega.png" title="FOUNDATION" details="Best coaching in North Bihar" href="#"/>
            <Card image="/omega.png" title="Class 6-10" details="Best coaching in North Bihar" href="#"/> */}

            <Card imageSrc="/abhishek.jpeg" title="IIT-JEE" description="We offer the best online coaching for IIT-JEE exam preparation, making it an ideal choice for aspirants." 
                      buttonText="Know More"
                    onButtonClick={() => router.push("/courses/iit-jee")}
                  />
            <Card imageSrc="/neet.jpg" title="NEET" description="We offer the best online coaching for NEET exam preparation, making it an ideal choice for aspirants." 
                      buttonText="Know More"
                    onButtonClick={() => router.push("/courses/neet")}
                  />
            <Card imageSrc="/omega.png" title="Prenuture and Foundation" description="We offer the best online coaching for IIT-JEE exam preparation, making it an ideal choice for aspirants." 
                      buttonText="Know More"
                    // onButtonClick={handleKnowMoreClick}
                  />
            <Card imageSrc="/abhishek.jpeg" title="IIT-JEE" description="We offer the best online coaching for IIT-JEE exam preparation, making it an ideal choice for aspirants." 
                      buttonText="Know More"
                    // onButtonClick={handleKnowMoreClick}
                  />
            
          </div>
        </div>

        <Achievements />
        <Stats />

        {/* // -----------------------------Top Rankers-------------------------------- */}
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center py-6">
            <h1 className="text-3xl font-bold"> Top Rankers </h1>
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6">
            {/* <Card image="/omega.png" title="John doe" details="AIR 1 ranker" href="#"/>
            <Card image="/omega.png" title="Jane Doe" details="AIR 2 ranker" href="#"/>
            <Card image="/omega.png" title="SOme name" details="AIR 3 ranker" href="#"/>
            <Card image="/omega.png" title="Another name" details="AIR 4 ranker" href="#"/> */}
            <Card imageSrc="/omega.png" title="John doe" description="AIR 1 ranker" 
                      // buttonText="Know More"
                    // onButtonClick={handleKnowMoreClick}
                  />
            <Card imageSrc="/abhishek.jpeg" title="IIT-JEE" description="We offer the best online coaching for IIT-JEE exam preparation, making it an ideal choice for aspirants." 
                      // buttonText="Know More"
                    // onButtonClick={handleKnowMoreClick}
                  />
            <Card imageSrc="/abhishek.jpeg" title="IIT-JEE" description="We offer the best online coaching for IIT-JEE exam preparation, making it an ideal choice for aspirants." 
                      // buttonText="Know More"
                    // onButtonClick={handleKnowMoreClick}
                  />
            <Card imageSrc="/abhishek.jpeg" title="IIT-JEE" description="We offer the best online coaching for IIT-JEE exam preparation, making it an ideal choice for aspirants." 
                      // buttonText="Know More"
                    // onButtonClick={handleKnowMoreClick}
                  />
            
          </div>
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


        <Founders1/>
      </main>
    </>
  );
}
