import CourseDescription from "../../../components/CourseDescription";
import CourseFee from "../../../components/CourseFee";
import ResultDisplay from "../../../components/ResultDisplay";


export default function Page({ params }: { params: { slug: string } }) {

    const neetHighlights: string[] = ["Structured Academic Planner for NEET 2026.", "Printed Study Material & Daily Practice Sheets.", "One on One doubt solving support & Regular Test facility.", "Complete Syllabus Coverage of Class 11th."]
    return <div className="m-14">
        {params.slug === "neet" && 
            <div className="bg-[#FEFAF3] rounded-3xl">
                <CourseDescription title={(params.slug).toUpperCase()} description="MOTION has long been distinguished for providing the Best Classroom Coaching, Online Learning Facility and getting excellent results. The curriculum is specifically designed for the NEET 2026 aspirants along with their 11th & Board preparations. To strengthen the foundation, conceptual knowledge and enhance the academic skills this course is the best option. The course helps the aspirants with better understanding of the examination pattern and ensure their success in the NEET with ease through a year-long curriculum."
                    highlights={neetHighlights} />
                
                <ResultDisplay title="NEET"/>    

                <CourseFee />
            </div>
        
        }

        {params.slug === "iit-jee" && 

            <div className="bg-[#FEFAF3] rounded-3xl">
                <CourseDescription title="JEE(Main + Advanced)" description="MOTION has long been distinguished for providing the Best Classroom Coaching, Online Learning Facility and getting excellent results. The curriculum is specifically designed for the NEET 2026 aspirants along with their 11th & Board preparations. To strengthen the foundation, conceptual knowledge and enhance the academic skills this course is the best option. The course helps the aspirants with better understanding of the examination pattern and ensure their success in the NEET with ease through a year-long curriculum."
                    highlights={neetHighlights} />
                <ResultDisplay title="IIT-JEE"/>    
                <CourseFee />
                
            </div>    
            }
    </div>
  }