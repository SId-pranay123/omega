
interface CourseDescriptionProps {
    title: string
    description: string
    highlights: string[]
}

const CourseDescription : React.FC<CourseDescriptionProps> = ({title, description, highlights}) => {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-4">Course Description of {title}</h1>
            <p className="text-lg mb-4">{description}</p>
            <h2 className="text-2xl font-bold mb-4">Course Highlights</h2>
            {highlights.map((highlight, index) => (
                <p key={index} className="text-lg mb-4">{highlight}</p>
            ))}
        </div>
    )
}


export default CourseDescription