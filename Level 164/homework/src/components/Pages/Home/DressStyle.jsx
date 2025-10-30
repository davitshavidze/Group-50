import Arrivals from "./Arrivals";
function DressStyle() {
  return (
    <>
      <section className="w-full h-screen flex justify-center items-center mt-15">
        <div className="bg-[#F0F0F0] w-[1400px] h-[900px] rounded-3xl flex flex-col justify-center ">
          <h1 className="font-extrabold text-6xl text-center my-15 relative bottom-[20px]">
            BROWSE BY DRESS STYLE
          </h1>
          <div className="w-full h-[300px] flex justify-center items-center gap-5">
            <div className="w-[410px] h-[290px] bg-[url(./casual.png)] bg-cover bg-center rounded-2xl hover:scale-[1.025] hover:cursor-pointer transition-all duration-300"></div>
            <div className="bg-[url(./Formal.png)] w-[685px] h-[290px] bg-cover bg-center rounded-2xl hover:scale-[1.025] hover:cursor-pointer transition-all duration-300"></div>
          </div>

          <div className="w-full h-[300px] flex justify-center items-center gap-5">
            <div className="bg-[url(./Party.png)] w-[685px] h-[290px] bg-cover bg-center rounded-2xl hover:scale-[1.025] hover:cursor-pointer transition-all duration-300"></div>
            <div className="bg-[url(./Gym.png)] w-[410px] h-[290px] bg-center bg-cover rounded-2xl hover:scale-[1.025] hover:cursor-pointer transition-all duration-300"></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default DressStyle;
