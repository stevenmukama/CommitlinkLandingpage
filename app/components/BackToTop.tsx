'use client';
import { useEffect, useState } from 'react';
import { ArrowUpIcon } from '@heroicons/react/24/solid';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-[#daa51b] text-white shadow-lg hover:bg-[#24330c] focus:outline-none">
          <ArrowUpIcon className="h-6 w-6" />
        </button>
      )}
    </>
  );
}
