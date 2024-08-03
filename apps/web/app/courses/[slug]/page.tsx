import CourseDescription from "../../../components/CourseDescription";
import CourseFee from "../../../components/CourseFee";
import Frontview from "../../../components/FrontView";
import ResultDisplay from "../../../components/ResultDisplay";
import ScrollableOptions from "../../../components/ScrollableOptions";
import TestCarousel from "../../../components/TestCarousel";


export default function Page({ params }: { params: { slug: string } }) {

    const descriptions: {[key: string]: string} = {
        'iit-jee': 'Our JEE (Mains + Advance)  courses are designed to help students achieve excellent results and high ranks in the Joint Entrance Examination. We focus on building a strong foundation of concepts and knowledge, ensuring that each student gains a better understanding of the subjects. With our expert faculty and comprehensive study materials, we guide students through a structured learning path that enhances their problem-solving skills and prepares them for success in the JEE exams along with boards.',
        'neet': ' Our NEET courses aim to provide students with the knowledge and skills necessary to excel in the National Eligibility cum Entrance Test. We emphasize a deep understanding of key concepts in biology, chemistry, and physics, helping students achieve outstanding results and top ranks. Our experienced instructors and well-organized curriculum ensure that students have a better understanding of the subjects, enabling them to confidently tackle the challenges of the NEET exam.',
        // Add more slug-description mappings as needed
    };

    const currentYear = new Date().getFullYear();

    const neetHighlights: string[] = [`Structured Academic Planner for ${(params.slug).toUpperCase()} ${currentYear}.`, "Printed Study Material & Daily Practice Sheets.", "One on One doubt solving support & Regular Test facility.", "Complete Syllabus Coverage."]
    return (
        <>
        <Frontview slug={params.slug}/>
    <div className="m-14">

            <div className="bg-[#FEFAF3] px-12 py-8 rounded-3xl">
                <ScrollableOptions/>
                <section id="section1" className="pt-12">
                    <CourseDescription title={(params.slug).toUpperCase()} description={`${descriptions[params.slug]}`}
                    highlights={neetHighlights} />
                </section>
                <section id="section2" className="pt-14">
                    <ResultDisplay image="/result.jpeg" title={`${(params.slug).toUpperCase()} `}/>  
                </section>
                <section id="section3" >
                    <CourseFee />
                </section>
                <section id="section4" className="pt-10">
                    <TestCarousel slug={params.slug}/>
                </section>
            </div>

    </div>
    </>
    )
  }