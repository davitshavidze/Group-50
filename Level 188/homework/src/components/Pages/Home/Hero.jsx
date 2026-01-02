function Hero() {
  return (
    <section className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center md:justify-evenly px-6 text-center md:text-left">

      <video autoPlay muted loop className="md:w-[850px] rounded-3xl bg-white text-white">
        <source src="./FullVideo.mp4" className="w-[220px] md:w-[550px] rounded-3xl" />
      </video>

      <div className="flex flex-col gap-6 max-w-xl">
        <h1 className="text-3xl md:text-6xl font-bold">
          Happy with <span className="text-[#F1C74E]">delicious</span> <br />
          <span className="text-[#F1C74E]">food</span> and get new <br />
          experiences with asian food
        </h1>

        <p className="opacity-50 text-sm md:text-base">
          Exploring new food with different transition form all Asian country
          especially from Cambodia that you can try at this place and get a good
          price from us as well we will make a good impact to our customers
        </p>

        <div className="flex gap-3 justify-center md:justify-start">
          <button className="bg-[#F1C74E] text-white font-medium px-4 py-2 rounded transition-all duration-300 hover:bg-white hover:text-[#F1C74E] border border-[#F1C74E] cursor-pointer">
            Order Food
          </button>

          <button className="border-[#F1C74E] border font-medium px-4 py-2 rounded transition-all duration-300 hover:bg-[#F1C74E] hover:text-white cursor-pointer">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
