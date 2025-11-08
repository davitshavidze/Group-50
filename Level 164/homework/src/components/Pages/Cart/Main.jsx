import Left from "./Left";
import Right from "./Right";
function Main() {
  return (
    <>
      <main className="w-full h-full flex items-center justify-center">
        <section className="max-w-[1390px] w-full flex flex-col justify-between">
          <div className="w-[1400px] h-[75px] flex justify-start items-center gap-2.5 ">
            <p className="text-gray-500 font-[400] text-[18px]">Home</p>
            <img
              src="./arrow.png"
              alt="xD"
              className="w-[16px] h-[16px] hover:cursor-pointer"
            />

            <p className="text-gray-800 font-[400] text-[18px]">Cart</p>
          </div>

          <h1 className="uppercase text-[38px] font-[900]">Your cart</h1>

          <div className="flex justify-between gap-10">
            <Left />
            <Right />
          </div>
        </section>
      </main>
    </>
  );
}
export default Main;
