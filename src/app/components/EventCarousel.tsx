// Carousel.tsx
import React, { useState } from 'react';
import Image from 'next/image';

export default function EventCarousel({ images } : {images: string[]}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full mx-auto">
      <div className="overflow-hidden rounded-lg">
        <Image className="w-full h-64 sm:h-96 object-cover transition-transform duration-300 ease-in-out" src={images[currentIndex]} alt="Event image"></Image>
      </div>

      <div className="mt-4 flex justify-between">
        <button
          onClick={prevSlide}
          className="bg-gray-800 text-white px-4 py-2 rounded-md"
        >
          Previous
        </button>
        <button
          onClick={nextSlide}
          className="bg-gray-800 text-white px-4 py-2 rounded-md"
        >
          Next
        </button>
      </div>
    </div>
  );
};