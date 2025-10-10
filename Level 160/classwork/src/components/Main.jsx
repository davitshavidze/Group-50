import { useState, useEffect } from "react";
function Main() {
  const [date, setDate] = useState(new Date());
  setInterval(() => {
    setDate(new Date());
  }, 1000);

  const [color, setColor] = useState("")
  const [isTime, setIsTime] = useState(true)

  function changeColor(e){
    setColor(e.target.id)
    console.log(color)
  }

  return (
    <>
      <div className="w-full h-screen flex justify-center items-center gap-[150px] max-sm:flex-col max-sm:justify-start max-sm:items-start max-sm:gap-[50px] max-sm:pl-[30px]">
        <div className="flex flex-col justify-center items-center relative w-[200px]">
          <div className="w-[13px] h-[35px] bg-[#D4D7D8] absolute -right-[20px] rounded-[50%] border-r-[#BCBEBE] border-r-[7px] top-[210px]"></div>
          <div className="flex flex-row justify-center items-center relative top-[50px] -z-10">
            <div className="w-[100px] h-[150px] bg-white rounded-[40%] relative left-[20px] bottom-[30px]"></div>
            <div className={`${color === "orange" ? `bg-[#CA3D22]` : color === "blue" ? `bg-[#565681]` : color === "purple" ? `bg-[#8A5362]` : `bg-[#23211F]`} h-[140px] w-[175px] rounded-t-[60px]`}></div>
            <div className="w-[100px] h-[150px] bg-white rounded-[40%] relative right-[20px] bottom-[30px]"></div>
          </div>
          <div className="w-[220px] h-[250px] bg-black rounded-[35px] border-[12px] border-[#D4D7D8]"></div>
          <div className="flex flex-row justify-center items-center relative rotate-180 bottom-[50px] -z-10">
            <div className="w-[100px] h-[150px] bg-white rounded-[40%] relative left-[20px] bottom-[30px]"></div>
            <div className={`${color === "orange" ? `bg-[#CA3D22]` : color === "blue" ? `bg-[#565681]` : color === "purple" ? `bg-[#8A5362]` : `bg-[#23211F]`} h-[140px] w-[175px] rounded-t-[60px]`}></div>
            <div className="w-[100px] h-[150px] bg-white rounded-[40%] relative right-[20px] bottom-[30px]"></div>
          </div>
          <p className={`${isTime ? "visible" : "hidden"} absolute text-white font-bold text-4xl`}>
            {date.getHours()}:
            {date.getMinutes() < 10
              ? `0${date.getMinutes()}`
              : date.getMinutes()}
            :
            {date.getSeconds() < 10
              ? `0${date.getSeconds()}`
              : date.getSeconds()}
          </p>
          <img src="./heart.png" alt="" className={`${!isTime ? "visible" : "hidden"} absolute animate-pulse w-[175px]`} />
        </div>

        <div className="flex flex-col gap-[23px]">
          <h1 className="text-4xl font-bold" >FitBit 19 - The Smartest Watch</h1>

          <p className="opacity-75" >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            numquam omnis ut commodi dolorum ex, neque molestias perspiciatis
            eum
          </p>

          <h2 className="font-bold text-[22px] relative top-[10px]" >Select Color</h2>
          <div className="flex gap-[15px]" >
            <div className={`bg-[#23211F] w-[80px] h-[55px] rounded-lg cursor-pointer`} id="#23211F" onClick={changeColor}></div>
            <div className="bg-[#CA3D22] w-[80px] h-[55px] rounded-lg cursor-pointer" id="orange" onClick={changeColor}></div>
            <div className="bg-[#565681] w-[80px] h-[55px] rounded-lg cursor-pointer" id="blue" onClick={changeColor}></div>
            <div className="bg-[#8A5362] w-[80px] h-[55px] rounded-lg cursor-pointer" id="purple" onClick={changeColor}></div>
          </div>

          <h2 className="font-bold text-[22px] relative top-[10px]" >Features</h2>
          <div className="flex gap-[20px]" >
            <button className="w-[70px] h-[40px] bg-[#EDEBEB] rounded-lg font-bold cursor-pointer" onClick={() => {setIsTime(true)}}>Time</button>
            <button className="w-[140px] h-[40px] bg-[#EDEBEB] rounded-lg font-bold cursor-pointer " onClick={() => {setIsTime(false)}}>Heart Rate</button>
          </div>
          <div>
            <button className="w-[160px] h-[55px] bg-[#FFA500] rounded-lg font-bold" >BUY NOW</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
