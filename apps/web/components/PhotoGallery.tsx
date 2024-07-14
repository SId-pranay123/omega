import React from 'react';

interface Photo {
  src: string;
  alt: string;
}

interface GalleryProps {
  photos: Photo[];
}

const PhotoGallery: React.FC<GalleryProps> = ({ photos }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {photos.map((photo, index) => (
        <div key={index} className="overflow-hidden rounded-lg shadow-lg">
          <img src={photo.src} alt={photo.alt} className="object-cover w-full h-full" />
        </div>
      ))}
    </div>
  );
};

export default PhotoGallery;
