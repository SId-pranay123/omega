import Image from "next/image"

interface ResultDisplayProps {
    title : string
    image? : string
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({title, image}) => {
    return (
        <div className="p-4 ">
            <h1 className="text-3xl">{title} Result-2024</h1>
            <Image src={image? image: ""} alt="result" width={500} height={400} className="p-8"/>
            <button className="bg-orange-500 text-white px-4 py-2 rounded-md">Enroll</button>
        </div>
    )
}

export default ResultDisplay