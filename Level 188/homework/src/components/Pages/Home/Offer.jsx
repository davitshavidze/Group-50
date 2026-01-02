function Offer() {
  return (
    <section className="w-full min-h-[65vh] flex flex-col items-center gap-10 px-6">
      <h1 className="text-4xl md:text-6xl font-semibold text-center mt-10">
        Special Offer
      </h1>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 w-full max-w-6xl">
        <div className="bg-gray-900 flex items-center justify-center rounded-3xl shadow-[20px_20px_0_0_#d1d5db] p-6 mt-10">
          <img
            src="./soup.png"
            alt="Soup"
            className="w-60 h-60 md:w-80 md:h-80 object-contain pr-5" 
          />
        </div>

        <div className="flex flex-col gap-5 text-center lg:text-left">
          <h2 className="text-2xl md:text-4xl font-semibold">
            Get <span className="text-yellow-500">50%</span> Off On Curry
          </h2>

          <p className="text-gray-600 text-sm md:text-xl max-w-xl">
            We offer 50% off on this food, we want you all to try Khmer food
            which has a good taste that everyone should try.
          </p>

          <button className="bg-yellow-500 text-black px-6 py-3 rounded-md font-semibold border border-yellow-500 hover:bg-white transition-all duration-300 w-fit mx-auto lg:mx-0 cursor-pointer">
            Order Now
          </button>
        </div>
      </div>
    </section>
  );
}

export default Offer;
