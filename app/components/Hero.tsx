function Hero() {
  return (
    <>
      <section className="mt-24 mx-auto max-w-screen-xl pb-4 px-4 sm:px-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl text-gray-800 font-extrabold mx-auto md:text-5xl">
            Design your projects faster with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#E114E5]">
              the largest figma UI kit
            </span>
          </h1>
          <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum
          </p>
        </div>
        <div className="mt-12 justify-center items-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex">
          <a className="px-10 py-3.5 w-full bg-indigo-600 text-white text-center rounded-md shadow-md block sm:w-auto">
            Get started
          </a>
          <a className="px-10 py-3.5 w-full text-gray-500 text-center border rounded-md duration-300 hover:text-indigo-600 hover:shadow block sm:w-auto">
            Try it out
          </a>
        </div>
      </section>
    </>
  );
}

export default Hero;
