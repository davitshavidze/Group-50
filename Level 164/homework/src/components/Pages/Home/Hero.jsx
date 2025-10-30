function Hero() {
  return (
    <>
      <section className="bg-[url(./image.png)] h-auto sm:h-[90vh] w-full bg-no-repeat bg-cover bg-center flex flex-col sm:block ">
        <div className="flex flex-col gap-6 sm:gap-8 relative sm:top-[90px] sm:ml-[150px] px-6 sm:px-0 py-10 sm:py-0 ">
          <div className="flex flex-col gap-4 mt-7">
            <h1 className="font-[900] w-full sm:w-[600px] text-4xl sm:text-6xl lg:text-7xl leading-tight">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </h1>
            <p className="opacity-80 w-full sm:w-[565px] text-sm sm:text-base">
              Browse through our diverse range of meticulously crafted
              fragments, designed to bring out individuality and cater to your
              sense of style
            </p>
          </div>
          <button className="text-center border-2 border-black rounded-3xl bg-black text-white w-[180px] sm:w-[210px] h-[48px] sm:h-[52px] font-[400] hover:cursor-pointer hover:bg-white hover:text-gray-900 transition-all duration-300">
            Shop Now
          </button>
        </div>

        <div className="w-[90%] sm:w-[600px] mx-auto sm:ml-[150px] sm:relative sm:top-[150px]">
          <img src="./image44.png" alt="xD" className="w-full h-auto" />
        </div>
      </section>
    </>
  );
}

export default Hero;
