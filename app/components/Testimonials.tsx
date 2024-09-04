"use client";
import { useState, useRef, useEffect } from 'react';

const slides = [
  {
    content: (
      <blockquote className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12">
        <div>
          <div className="flex gap-0.5 text-green-500">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <div className="mt-4">
            <p className="text-2xl font-bold text-rose-600 sm:text-3xl">Stayin' Alive</p>
            <p className="mt-4 leading-relaxed text-gray-700">
              No, Rose, they are not breathing. And they have no arms or legs … Where are they? You
              know what? If we come across somebody with no arms or legs, do we bother resuscitating
              them? I mean, what quality of life do we have there?
            </p>
          </div>
        </div>
        <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
          &mdash; Michael Scott
        </footer>
      </blockquote>
    ),
  },
  {
    content: (
      <blockquote className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12">
        <div>
          <div className="flex gap-0.5 text-green-500">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <div className="mt-4">
            <p className="text-2xl font-bold text-rose-600 sm:text-3xl">Stayin' Alive</p>
            <p className="mt-4 leading-relaxed text-gray-700">
              No, Rose, they are not breathing. And they have no arms or legs … Where are they? You
              know what? If we come across somebody with no arms or legs, do we bother resuscitating
              them? I mean, what quality of life do we have there?
            </p>
          </div>
        </div>
        <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
          &mdash; Michael Scott
        </footer>
      </blockquote>
    ),
  },
  {
    content: (
      <blockquote className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12">
        <div>
          <div className="flex gap-0.5 text-green-500">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <div className="mt-4">
            <p className="text-2xl font-bold text-rose-600 sm:text-3xl">Stayin' Alive</p>
            <p className="mt-4 leading-relaxed text-gray-700">
              No, Rose, they are not breathing. And they have no arms or legs … Where are they? You
              know what? If we come across somebody with no arms or legs, do we bother resuscitating
              them? I mean, what quality of life do we have there?
            </p>
          </div>
        </div>
        <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
          &mdash; Michael Scott
        </footer>
      </blockquote>
    ),
  },
  {
    content: (
      <blockquote className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12">
        <div>
          <div className="flex gap-0.5 text-green-500">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <div className="mt-4">
            <p className="text-2xl font-bold text-rose-600 sm:text-3xl">Stayin' Alive</p>
            <p className="mt-4 leading-relaxed text-gray-700">
              No, Rose, they are not breathing. And they have no arms or legs … Where are they? You
              know what? If we come across somebody with no arms or legs, do we bother resuscitating
              them? I mean, what quality of life do we have there?
            </p>
          </div>
        </div>
        <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
          &mdash; Michael Scott
        </footer>
      </blockquote>
    ),
  },
  {
    content: (
      <blockquote className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12">
        <div>
          <div className="flex gap-0.5 text-green-500">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <div className="mt-4">
            <p className="text-2xl font-bold text-rose-600 sm:text-3xl">Stayin' Alive</p>
            <p className="mt-4 leading-relaxed text-gray-700">
              No, Rose, they are not breathing. And they have no arms or legs … Where are they? You
              know what? If we come across somebody with no arms or legs, do we bother resuscitating
              them? I mean, what quality of life do we have there?
            </p>
          </div>
        </div>
        <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
          &mdash; Michael Scott
        </footer>
      </blockquote>
    ),
  },
  {
    content: (
      <blockquote className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12">
        <div>
          <div className="flex gap-0.5 text-green-500">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <div className="mt-4">
            <p className="text-2xl font-bold text-rose-600 sm:text-3xl">Stayin' Alive</p>
            <p className="mt-4 leading-relaxed text-gray-700">
              No, Rose, they are not breathing. And they have no arms or legs … Where are they? You
              know what? If we come across somebody with no arms or legs, do we bother resuscitating
              them? I mean, what quality of life do we have there?
            </p>
          </div>
        </div>
        <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
          &mdash; Michael Scott
        </footer>
      </blockquote>
    ),
  },
];

const Testimonials = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideRef = useRef<HTMLDivElement | null>(null);
    const spacing = 16;
  
  
    const nextSlide = () => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    };
  
    const prevSlide = () => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };
  
  
    useEffect(() => {
      if (slideRef.current) {
        slideRef.current.style.transform = `translateX(-${currentSlide * 100}%)`;
      }
    }, [currentSlide]);
  
    return (
      <section className="bg-gray-50" id='reviews'>
        <div className="mx-auto max-w-[1340px] px-4 py-12 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center lg:gap-16">
            <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Don't just take our word for it...
              </h2>
              <p className="mt-4 text-gray-700">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas veritatis illo
                placeat harum porro optio fugit a culpa sunt id!
              </p>
              <div className="flex md:justify-center items-center  mt-6 space-x-4 sm:justify-start">
                <button
                  aria-label="Previous slide"
                  onClick={prevSlide}
                  className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                  </svg>
                </button>
                <button
                  aria-label="Next slide"
                  onClick={nextSlide}
                  className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="-mx-6 lg:col-span-2 lg:mx-0 relative overflow-hidden">
              <div
                className="flex transition-transform ease-in-out duration-300"
                ref={slideRef}
                style={{ gap: `${spacing}px` }}
              >
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0"
                    style={{ width: `100%` }}
                  >
                    {slide.content}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Testimonials;
  