"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const defaultImages = [
    'https://placekitten.com/800/400',
    'https://placekitten.com/800/401',
    'https://placekitten.com/800/402',
  ];
  
export default function ImageCarousel({ images } : {images: string[] | undefined}) {
  let display;
  if (images) { 
    display = images;
  } else {
    display = defaultImages;
  }

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % display.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative w-4/5 h-full mx-auto">
      <div className="overflow-hidden rounded-lg">
        {images ? 
          <Image className="w-full h-64 sm:h-96 object-cover transition-transform duration-300 ease-in-out" src={display[currentIndex]} alt="Event image"></Image>
        :
        <div
          className="w-full h-64 sm:h-96 bg-cover bg-center transition-transform duration-300 ease-in-out"
          style={{ backgroundImage: `url(${display[currentIndex]})` }}
        ></div>
        }
      </div>
    </div>
  );
};