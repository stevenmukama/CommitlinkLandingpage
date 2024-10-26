'use client';

import BookNowBtn from './BookNowBtn';

function Banner() {
  return (
    <>
      <div className="bg-[#daa51b]">
        <div className="text-center mx-auto px-8 py-3 items-center justify-center space-x-4 text-white sm:flex md:px-8">
          <p className="py-2 font-medium">
            Contact us to make your dream come true.
          </p>
          <BookNowBtn />
        </div>
      </div>
    </>
  );
}

export default Banner;
