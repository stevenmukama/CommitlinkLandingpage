"use client"
import { useState, useRef, useEffect } from 'react';

interface Slide {
  content: JSX.Element;
}

interface CustomSliderProps {
  slides: Slide[];
  currentSlide: number;
  spacing?: number;
}

const CustomSlider: React.FC<CustomSliderProps> = ({ slides, currentSlide, spacing = 16 }) => {
  const slideRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (slideRef.current) {
      slideRef.current.style.transform = `translateX(-${currentSlide * (100 + spacing)}%)`;
    }
  }, [currentSlide, spacing]);

  return (
    <div className="relative overflow-hidden">
      <div className="flex transition-transform ease-in-out duration-300" ref={slideRef}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className="flex-shrink-0"
            style={{ width: `calc(100% + ${spacing}px)` }}
          >
            {slide.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomSlider;
