function Hero() {
  return (
    <>
      <section className="mt-24 mx-auto max-w-screen-xl pb-4 px-4 sm:px-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl text-gray-800 font-extrabold mx-auto md:text-5xl">
            Bring Your Ideas to Life{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#cf8f08] to-[#b15704]">
              with Stunning Digital Experiences{' '}
            </span>
          </h1>
          <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
            We craft impactful designs that connect your vision to the world,
            turning concepts into captivating realities
          </p>
        </div>
        <div className="mt-12 justify-center items-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex">
          <a className="px-10 py-3.5 w-full bg-[#daa51b] text-white text-center rounded-md shadow-md block sm:w-auto">
            Get started
          </a>
          <a className="px-10 py-3.5 w-full text-gray-500 text-center border rounded-md duration-300 hover:text-[#daa51b] hover:shadow block sm:w-auto">
            Contact us{' '}
          </a>
        </div>
      </section>
    </>
  );
}

export default Hero;
