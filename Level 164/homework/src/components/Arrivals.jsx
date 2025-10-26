function Arrivals() {
  return (
    <>
      <header className="w-full bg-black flex flex-wrap justify-center sm:justify-evenly items-center gap-4 sm:gap-0 h-auto sm:h-[110px] py-4 sm:py-0">
        <img
          src="./versace.png"
          alt="xD"
          className="w-[120px] sm:w-[175px] h-[30px] sm:h-[35px]"
        />
        <img
          src="./zara.png"
          alt="xD"
          className="w-[70px] sm:w-[91px] h-[30px] sm:h-[38px]"
        />
        <img
          src="./gucci.png"
          alt="xD"
          className="w-[120px] sm:w-[156px] h-[30px] sm:h-[36px]"
        />
        <img
          src="./prada.png"
          alt="xD"
          className="w-[150px] sm:w-[194px] h-[30px] sm:h-[32px]"
        />
        <img
          src="./klein.png"
          alt="xD"
          className="w-[160px] sm:w-[206px] h-[30px] sm:h-[34px]"
        />
      </header>

      <main className="h-[80vh] w-full text-center">
        <h1 className="text-6xl font-extrabold mt-[125px]">NEW ARRIVALS</h1>
        <div className="flex justify-center items-center h-[60vh] gap-20">
          <div className="flex flex-col gap-2">
            <div className="bg-[url(./shirt2.png)] w-[295px] h-[298px] bg-center bg-cover hover:scale-[1.025] transition-all duration-300 hover:cursor-pointer"></div>
            <h2 className="font-bold text-[18px] text-left">
              T-shirt with tape details
            </h2>
            <img src="./4.5star.png" className="w-[170px] h-[22px]" />
            <h1 className="text-left font-bold text-2xl">$120</h1>
          </div>

          <div className="flex flex-col gap-2">
            <div className="bg-[url(./jinsi.png)] w-[295px] h-[298px] bg-center bg-cover hover:scale-[1.025] transition-all duration-300 hover:cursor-pointer"></div>
            <h2 className="font-bold text-[18px] text-left">
              Skinny Fit Jeans
            </h2>
            <img src="./3.5star.png" className="w-[170px] h-[22px]" />
            <div className="flex gap-3">
              <h1 className="text-left font-bold text-2xl">$240</h1>
              <h1 className="text-left font-[500] text-2xl line-through text-gray-400 opacity-80">
                $260
              </h1>
              <div className="bg-[#FFEBEB] w-[60px] h-[28px] rounded-[62px] flex flex-col justify-center items-center mt-1">
                <p className="text-[#FF5555] font-[500]">-20%</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="bg-[url(./sarochka.png)] w-[295px] h-[298px] bg-center bg-cover hover:scale-[1.025] transition-all duration-300 hover:cursor-pointer"></div>
            <h2 className="font-bold text-[18px] text-left">Checkered Shirt</h2>
            <img src="./4.5star.png" className="w-[170px] h-[22px]" />
            <h1 className="text-left font-bold text-2xl">$180</h1>
          </div>

          <div className="flex flex-col gap-2">
            <div className="bg-[url(./maisuri.png)] w-[295px] h-[298px] bg-center bg-cover hover:scale-[1.025] transition-all duration-300 hover:cursor-pointer"></div>
            <h2 className="font-bold text-[18px] text-left">
              Sleeve Striped T-shirt
            </h2>
            <img src="./4.5star.png" className="w-[170px] h-[22px]" />
            <div className="flex gap-3">
              <h1 className="text-left font-bold text-2xl">$130</h1>
              <h1 className="text-left font-[500] text-2xl line-through text-gray-400 opacity-80">
                $160
              </h1>
              <div className="bg-[#FFEBEB] w-[60px] h-[28px] rounded-[62px] flex flex-col justify-center items-center mt-1">
                <p className="text-[#FF5555] font-[500]">-30%</p>
              </div>
            </div>
          </div>
        </div>

        <button className="text-center w-[219px] h-[52px] border-1 border-gray-300 rounded-4xl font-[500] hover:bg-gray-900 hover:text-white transition-all duration-400 hover:scale-3d hover:cursor-pointer">View All</button>

        <div className="h-[150px] w-full flex justify-center items-center">
          <div className="h-[1px] w-[1400px] border-gray-200 border-2 rounded-4xl">
            
          </div>
        </div>
      </main>
    </>
  );
}

export default Arrivals;
