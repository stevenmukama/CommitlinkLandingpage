'use client';
import React, { useEffect, useRef } from 'react';
import KeenSlider, { KeenSliderInstance } from 'keen-slider';
import 'keen-slider/keen-slider.min.css';

const Testimonials = () => {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const keenSliderInstance = useRef<KeenSliderInstance | null>(null);

  useEffect(() => {
    if (sliderRef.current) {
      keenSliderInstance.current = new KeenSlider(sliderRef.current, {
        loop: true,
        slides: {
          origin: 'center',
          perView: 1.25,
          spacing: 16,
        },
        breakpoints: {
          '(min-width: 1024px)': {
            slides: {
              origin: 'auto',
              perView: 2.5,
              spacing: 32,
            },
          },
        },
      });

      return () => {
        if (keenSliderInstance.current) {
          keenSliderInstance.current.destroy();
        }
      };
    }
  }, []);

  const handlePrevClick = () => {
    keenSliderInstance.current?.prev();
  };

  const handleNextClick = () => {
    keenSliderInstance.current?.next();
  };

  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-[1340px] px-4 py-12 sm:px-6 lg:py-16 lg:px-8 xl:py-24">
        <div className="max-w-7xl flex items-end justify-between sm:px-6 lg:px-8">
          <h2 className="max-w-xl text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Read trusted reviews from our customers
          </h2>

          <div className="mt-8 flex gap-4 lg:mt-0">
            <button
              aria-label="Previous slide"
              onClick={handlePrevClick}
              className="rounded-full border border-[#daa51b] p-3 text-[#daa51b]  transition hover:bg-[#daa51b]  hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 rtl:rotate-180">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>

            <button
              aria-label="Next slide"
              onClick={handleNextClick}
              className="rounded-full border border-[#daa51b] p-3 text-[#daa51b]  transition hover:bg-[#daa51b]  hover:text-white">
              <svg
                className="w-5 h-5 rtl:rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9 5l7 7-7 7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="-mx-6 mt-8">
          <div ref={sliderRef} className="keen-slider">
            <div className="keen-slider__slide">
              <blockquote className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12">
                <div>
                  <div className="flex gap-0.5 text-green-500">
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                  </div>
                  <div className="mt-4">
                    <p className="text-2xl font-bold text-[#daa51b]  sm:text-3xl">
                      Stayin' Alive
                    </p>
                    <p className="mt-4 leading-relaxed text-gray-700">
                      No, Rose, they are not breathing. And they have no arms or
                      legs … Where are they? You know what? If we come across
                      somebody with no arms or legs, do we bother resuscitating
                      them? I mean, what quality of life do we have there?
                    </p>
                  </div>
                </div>
                <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                  &mdash; Michael Scott
                </footer>
              </blockquote>
            </div>
            <div className="keen-slider__slide">
              <blockquote className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12">
                <div>
                  <div className="flex gap-0.5 text-green-500">
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                  </div>
                  <div className="mt-4">
                    <p className="text-2xl font-bold text-[#daa51b] -600 sm:text-3xl">
                      Stayin' Alive
                    </p>
                    <p className="mt-4 leading-relaxed text-gray-700">
                      No, Rose, they are not breathing. And they have no arms or
                      legs … Where are they? You know what? If we come across
                      somebody with no arms or legs, do we bother resuscitating
                      them? I mean, what quality of life do we have there?
                    </p>
                  </div>
                </div>
                <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                  &mdash; Michael Scott
                </footer>
              </blockquote>
            </div>
            <div className="keen-slider__slide">
              <blockquote className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12">
                <div>
                  <div className="flex gap-0.5 text-green-500">
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                  </div>
                  <div className="mt-4">
                    <p className="text-2xl font-bold text-[#daa51b] -600 sm:text-3xl">
                      Stayin' Alive
                    </p>
                    <p className="mt-4 leading-relaxed text-gray-700">
                      No, Rose, they are not breathing. And they have no arms or
                      legs … Where are they? You know what? If we come across
                      somebody with no arms or legs, do we bother resuscitating
                      them? I mean, what quality of life do we have there?
                    </p>
                  </div>
                </div>
                <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                  &mdash; Michael Scott
                </footer>
              </blockquote>
            </div>
            <div className="keen-slider__slide">
              <blockquote className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12">
                <div>
                  <div className="flex gap-0.5 text-green-500">
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                  </div>
                  <div className="mt-4">
                    <p className="text-2xl font-bold text-[#daa51b] -600 sm:text-3xl">
                      Stayin' Alive
                    </p>
                    <p className="mt-4 leading-relaxed text-gray-700">
                      No, Rose, they are not breathing. And they have no arms or
                      legs … Where are they? You know what? If we come across
                      somebody with no arms or legs, do we bother resuscitating
                      them? I mean, what quality of life do we have there?
                    </p>
                  </div>
                </div>
                <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                  &mdash; Michael Scott
                </footer>
              </blockquote>
            </div>
            <div className="keen-slider__slide">
              <blockquote className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12">
                <div>
                  <div className="flex gap-0.5 text-green-500">
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                  </div>
                  <div className="mt-4">
                    <p className="text-2xl font-bold text-[#daa51b] -600 sm:text-3xl">
                      Stayin' Alive
                    </p>
                    <p className="mt-4 leading-relaxed text-gray-700">
                      No, Rose, they are not breathing. And they have no arms or
                      legs … Where are they? You know what? If we come across
                      somebody with no arms or legs, do we bother resuscitating
                      them? I mean, what quality of life do we have there?
                    </p>
                  </div>
                </div>
                <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                  &mdash; Michael Scott
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const StarIcon = () => (
  <svg
    className="w-5 h-5"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

export default Testimonials;
