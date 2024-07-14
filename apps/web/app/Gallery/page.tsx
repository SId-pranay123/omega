import PhotoGallery from "../../components/PhotoGallery"

const page = () => {

    const photos = [
        { src: '/abhishek.jpeg', alt: 'Photo 1' },
        { src: '/manas.jpeg', alt: 'Photo 2' },
        { src: '/neet.jpg', alt: 'Photo 3' },
        // Add more photos here
      ];


    return (
        <div className="py-20 flex flex-col justify-center items-center p-20">
            <h1 className="text-3xl font-bold py-12">Gallery</h1>
            <PhotoGallery photos={photos} />
        </div>
    )
}

export default page