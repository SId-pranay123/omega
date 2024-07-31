import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

interface CourseDescriptionProps {
    title: string
    description: string
    highlights: string[]
}

const CourseDescription : React.FC<CourseDescriptionProps> = ({title, description, highlights}) => {
    return (
        <div  >
            <div className=" p-6">
                <h1 className="text-3xl font-bold mb-4">Course Description of {title}</h1>
                <p className="text-lg mb-4">{description}</p>
                <h2 className="text-2xl font-bold mb-4">Course Highlights</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {highlights.map((highlight, index) => ( 
                        <div key={index} className="bg-white flex text-lg mb-4 rounded-xl min-h-10">
                            <div className="p-4">
                                <span style={{ color: 'green', fontSize: '24px' }}>
                                    <FontAwesomeIcon icon={faCheck} />
                                </span>
                            </div>
                            <div className="p-4">
                                {highlight}
                            </div>
                        </div>
                    ))}
                </div>
                
            </div>
            
        </div>
    )
}


export default CourseDescription