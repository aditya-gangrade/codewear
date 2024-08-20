"use client";
import React, { useState, useEffect } from "react";

const Carousel = ({ images, autoplayInterval = 2000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handlePrevSlide = () => {
    const newSlideIndex =
      currentSlide === 0 ? images.length - 1 : currentSlide - 1;
    setCurrentSlide(newSlideIndex);
  };

  const handleNextSlide = () => {
    const newSlideIndex =
      currentSlide === images.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(newSlideIndex);
  };

  useEffect(() => {
    // Only autoplay when the carousel is not hovered
    if (!isHovered) {
      const interval = setInterval(() => {
        handleNextSlide();
      }, autoplayInterval);

      return () => {
        clearInterval(interval);
      };
    }
  }, [currentSlide, autoplayInterval, isHovered]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="carousel relative w-full max-w-lg mx-auto">
      <div className="carousel-track overflow-hidden">
        <div
          className="carousel-content flex transition-transform duration-300"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full object-cover"
            />
          ))}
        </div>
      </div>
      {/* Previous and Next Buttons */}
      <button
        onClick={handlePrevSlide}
        className="carousel-button absolute top-1/2 left-0 transform -translate-y-1/2 bg-white text-gray-800 p-2 rounded-full shadow-md"
      >
        &#8249; Prev
      </button>
      <button
        onClick={handleNextSlide}
        className="carousel-button absolute top-1/2 right-0 transform -translate-y-1/2 bg-white text-gray-800 p-2 rounded-full shadow-md"
      >
        Next &#8250;
      </button>
      {/* Indicators */}
      <div className="carousel-indicators absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`indicator w-2.5 h-2.5 bg-white rounded-full ${
              index === currentSlide ? "opacity-100" : "opacity-50"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
