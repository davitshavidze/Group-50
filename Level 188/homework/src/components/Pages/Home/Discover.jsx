function Discover() {
  return (
    <section className="w-full min-h-[70vh] bg-[#0D0D0D] flex items-center px-6">
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row gap-12 items-center">
        
        <div className="text-white flex flex-col gap-6 text-center lg:text-left">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Our Restaurants.
            <br />
            Where to Find Us?
          </h2>

          <p className="text-gray-300 text-sm md:text-lg">
            Want to have a superb meal in an exceptional setting with family,
            friends or work colleagues, here are the addresses of our
            restaurants.
          </p>

          <button className="mx-auto lg:mx-0 w-fit px-6 py-3 bg-white text-black rounded-full font-medium transition-all duration-300 hover:bg-gray-800 hover:text-white cursor-pointer">
            Find The Nearest Cheffest
          </button>
        </div>

        <div className="w-full h-[260px] md:h-[360px] lg:h-[420px] rounded-2xl overflow-hidden shadow-2xl">
          <iframe
            title="restaurant-map"
            src="https://www.google.com/maps?q=Tbilisi,%20Georgia&z=13&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

export default Discover;
