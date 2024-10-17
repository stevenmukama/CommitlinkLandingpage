'use client';
function Banner() {
  return (
    <>
      <div className="bg-[#daa51b]">
        <div className="text-center mx-auto px-8 py-3 items-center justify-center space-x-4 text-white sm:flex md:px-8">
          <p className="py-2 font-medium">
            Contact us to make your dream come true.
          </p>
          <a
            href="#"
            className="flex-none inline-block w-full mt-3 py-2 px-8 text-center text-black font-medium bg-white duration-150 hover:bg-gray-100 active:bg-gray-200 rounded-lg sm:w-auto sm:mt-0 sm:text-sm">
            (+260)-968-555518
          </a>
        </div>
      </div>
    </>
  );
}

export default Banner;
