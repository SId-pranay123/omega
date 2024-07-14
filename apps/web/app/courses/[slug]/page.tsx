import CourseDescription from "../../../components/CourseDescription";
import CourseFee from "../../../components/CourseFee";
import Frontview from "../../../components/FrontView";
import ResultDisplay from "../../../components/ResultDisplay";
import ScrollableOptions from "../../../components/ScrollableOptions";
import TestCarousel from "../../../components/TestCarousel";


export default function Page({ params }: { params: { slug: string } }) {

    const neetHighlights: string[] = ["Structured Academic Planner for NEET 2026.", "Printed Study Material & Daily Practice Sheets.", "One on One doubt solving support & Regular Test facility.", "Complete Syllabus Coverage of Class 11th."]
    return (
        <>
        <Frontview />
    <div className="m-14">

            <div className="bg-[#FEFAF3] px-12 py-8 rounded-3xl">
                <ScrollableOptions/>
                <section id="section1" className="pt-12">
                    <CourseDescription title={(params.slug).toUpperCase()} description="MOTION has long been distinguished for providing the Best Classroom Coaching, Online Learning Facility and getting excellent results. The curriculum is specifically designed for the NEET 2026 aspirants along with their 11th & Board preparations. To strengthen the foundation, conceptual knowledge and enhance the academic skills this course is the best option. The course helps the aspirants with better understanding of the examination pattern and ensure their success in the NEET with ease through a year-long curriculum."
                    highlights={neetHighlights} />
                </section>
                <section id="section2" className="pt-14">
                    <ResultDisplay /*image="/omega.png"*/ title={`${(params.slug).toUpperCase()} `}/>  
                </section>
                <section id="section3" >
                    <CourseFee />
                </section>
                <section id="section4" className="pt-10">
                    <TestCarousel />
                </section>
            </div>

    </div>
    </>
    )
  }