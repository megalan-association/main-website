"use client"
import React, { useState, useEffect } from 'react';


const images = [
    'https://placekitten.com/800/400',
    'https://placekitten.com/800/401',
    'https://placekitten.com/800/402',
  ];
  
  const ImageCarousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 2000); // Change image every 3 seconds
  
      return () => clearInterval(intervalId);
    }, []);
  
    return (
      <div className="relative w-4/5 h-full mx-auto">
        <div className="overflow-hidden rounded-lg">
          <div
            className="w-full h-64 sm:h-96 bg-cover bg-center transition-transform duration-300 ease-in-out"
            style={{ backgroundImage: `url(${images[currentIndex]})` }}
          ></div>
        </div>
      </div>
    );
  };
  

export default ImageCarousel;
