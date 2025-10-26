function Selling() {
  return (
    <>
      <main className="h-[80vh] w-full text-center">
        <h1 className="text-6xl font-extrabold mt-[125px]">TOP SELLING</h1>
        <div className="flex justify-center items-center h-[60vh] gap-20">
          <div className="flex flex-col gap-2">
            <div className="bg-[url(./shirt.png)] w-[295px] h-[298px] bg-center bg-cover hover:scale-[1.025] transition-all duration-300 hover:cursor-pointer"></div>
            <h2 className="font-bold text-[18px] text-left">
              Vertical Striped Shirt
            </h2>
            <img src="./5star.png" className="w-[180px] h-[22px]" />
            <div className="flex gap-3">
              <h1 className="text-left font-bold text-2xl">$212</h1>
              <h1 className="text-left font-[500] text-2xl line-through text-gray-400 opacity-80">
                $232
              </h1>
              <div className="bg-[#FFEBEB] w-[60px] h-[28px] rounded-[62px] flex flex-col justify-center items-center mt-1">
                <p className="text-[#FF5555] font-[500]">-20%</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="bg-[url(./maika.png)] w-[295px] h-[298px] bg-center bg-cover hover:scale-[1.025] transition-all duration-300 hover:cursor-pointer"></div>
            <h2 className="font-bold text-[18px] text-left">
              Courage Graphic T-shirt
            </h2>
            <img src="./4star.png" className="w-[150px] h-[22px]" />
            <h1 className="text-left font-bold text-2xl">$145</h1>
          </div>

          <div className="flex flex-col gap-2">
            <div className="bg-[url(./shorti.png)] w-[295px] h-[298px] bg-center bg-cover hover:scale-[1.025] transition-all duration-300 hover:cursor-pointer"></div>
            <h2 className="font-bold text-[18px] text-left">Loose Fit Bermuda Shorts</h2>
            <img src="./3star.png" className="w-[130px] h-[22px]" />
            <h1 className="text-left font-bold text-2xl">$80</h1>
          </div>

          <div className="flex flex-col gap-2">
            <div className="bg-[url(./blackJean.png)] w-[295px] h-[298px] bg-center bg-cover hover:scale-[1.025] transition-all duration-300 hover:cursor-pointer"></div>
            <h2 className="font-bold text-[18px] text-left">
              Faded Skinny Jeans
            </h2>
            <img src="./4.5star.png" className="w-[170px] h-[22px]" />
            <h1 className="text-left font-bold text-2xl">$210</h1>
          </div>
        </div>

        <button className="text-center w-[219px] h-[52px] border-1 border-gray-300 rounded-4xl font-[500] hover:bg-gray-900 hover:text-white transition-all duration-400 hover:scale-3d hover:cursor-pointer">
          View All
        </button>
      </main>
    </>
  );
}

export default Selling;
