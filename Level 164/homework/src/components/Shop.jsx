import { useState } from "react";
function Shop() {
  const [num, setNum] = useState(0)

  function increase(){
    setNum(num + 1)
  }

  function decrease(){
    setNum(num - 1)
  }
  return (
    <>
      <main className="w-full h-[80vh]">
        <div className="w-[1400px] h-[75px] flex justify-start items-center gap-2.5 relative left-[300px]">
          <p className="text-gray-500 font-[400] text-[16px]">Home</p>
          <img
            src="./arrow.png"
            alt="xD"
            className="w-[16px] h-[16px] hover:cursor-pointer"
          />

          <p className="text-gray-500 font-[400] text-[16px]">Shop</p>
          <img
            src="./arrow.png"
            alt="xD"
            className="w-[16px] h-[16px] hover:cursor-pointer"
          />

          <p className="text-gray-500 font-[400] text-[16px]">Men</p>
          <img
            src="./arrow.png"
            alt="xD"
            className="w-[16px] h-[16px] hover:cursor-pointer"
          />

          <p className="text-gray-800 font-[400] text-[16px]">T-shirts</p>
        </div>
        <div className="w-[1700px] h-[50vh] flex flex-row gap-[170px] relative left-[100px]">
          <div className="flex flex-col w-[200px] h-[650px] gap-4 relative left-[200px] top-[20px]">
            <div className="w-[155px] h-[170px] bg-[url(./shop1.png)] bg-cover "></div>

            <div className="w-[155px] h-[170px] bg-[url(./shop2.png)] bg-cover object-fit"></div>

            <div className="w-[155px] h-[167px] bg-[url(./shop3.png)] bg-cover"></div>
          </div>

          <div className="w-[450px] h-[680px] bg-[url(./shop4.png)] bg-contain bg-no-repeat relative top-[20px]"></div>

          <div className="flex flex-col gap-5 relative top-[20px] right-[130px]">
            <div className="flex flex-col gap-3">
              <h1 className="font-[900] text-3xl w-[600px]">
                ONE LIFE GRAPHIC T-SHIRT
              </h1>
              <img
                src="./4.5star.png"
                alt="xD"
                className="w-[195px] h-[25px]"
              />
            </div>
            <div className="flex gap-3">
              <h1 className="text-left font-bold text-3xl">$260</h1>
              <h1 className="text-left font-[500] text-3xl line-through text-gray-400 opacity-80">
                $300
              </h1>
              <div className="bg-[#FFEBEB] w-[60px] h-[28px] rounded-[62px] flex flex-col justify-center items-center mt-1.5">
                <p className="text-[#FF5555] font-[500] ">-40%</p>
              </div>
            </div>
            <div>
              <p className="opacity-75">
                This graphic t-shirt which is perfect for any occasion. Crafted
                from a soft and <br /> breathable fabric, it offers superior comfort
                and style.
              </p>
            </div>
            <hr className="opacity-15" />
            <p className="opacity-75">Select Colors</p>
            <div className="flex gap-5 mb-1">
              <div className="w-[35px] h-[35px] rounded-4xl bg-[#4F4631]"></div>
              <div className="w-[35px] h-[35px] rounded-4xl bg-[#314F4A]"></div>
              <div className="w-[35px] h-[35px] rounded-4xl bg-[#31344F]"></div>
            </div>

            <hr className="opacity-15" />

            <p className="opacity-75">Choose Size</p>
            <div className="flex gap-3 mb-1">
              <button className="w-[86px] h-[46px] bg-[#F0F0F0] rounded-[62px] hover:bg-gray-900 hover:text-white transition-all duration-300 cursor-pointer">Small</button>
              <button className="w-[86px] h-[46px] bg-[#F0F0F0] rounded-[62px] hover:bg-gray-900 hover:text-white transition-all duration-300 cursor-pointer">Medium</button>
              <button className="w-[86px] h-[46px] bg-[#F0F0F0] rounded-[62px] hover:bg-gray-900 hover:text-white transition-all duration-300 cursor-pointer">Large</button>
              <button className="w-[86px] h-[46px] bg-[#F0F0F0] rounded-[62px] hover:bg-gray-900 hover:text-white transition-all duration-300 cursor-pointer">X-Large</button>
            </div>

            <hr className="opacity-15" />

            <div className="flex gap-3">
              <div className="w-[170px] h-[50px] bg-[#F0F0F0] flex justify-center items-center gap-10 rounded-4xl">
                <img src="./minus.png" alt="xD" className="w-[24px] h-[24px] hover:cursor-pointer transition-all duration-300" onClick={decrease} />
                <span className="font-semibold text-[16px]">{num}</span>
                <img src="./plus.png" alt="xD" className="w-[24px] h-[24px] hover:cursor-pointer transition-all duration-300" onClick={increase} />
              </div>
              <button className="bg-[#000000] w-[400px] h-[50px] rounded-4xl text-white hover:cursor-pointer hover:text-gray-900 hover:bg-gray-300 transition-all duration-300 font-[500]">Add to Cart</button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Shop;
