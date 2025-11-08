import { useState } from "react";
function CartCard() {
  const [amount, setAmount] = useState(0);

  function decrease() {
    setAmount(amount - 1);

    if (amount === 0) {
      setAmount(amount);
    }
  }

  function increase() {
    setAmount(amount + 1);
  }
  return (
    <>
      <div className="w-full h-[150px] pb-[20px] flex gap-5 border-b-[1.5px] border-[#0000001A] last:border-b-0">
        <img
          src="./shirt.png"
          alt="product photo"
          className="rounded-lg w-[130px] h-[130px] object-cover"
        />

        <div className="w-full flex flex-col justify-between h-full">
          <div className="flex flex-col gap-1 w-full">
            <div className="w-full flex gap-3 justify-between">
              <h2 className="text-[20px] font-[700]">
                Gradient Graphic T-shirt
              </h2>
              <i className="fa-solid fa-trash-can text-red-600 cursor-pointer"></i>
            </div>
            <p className="text-[13px]">
              Size: <span className="text-[#666666]">Large</span>
            </p>
            <p className="text-[13px]">
              Color: <span className="text-[#666666]">White</span>
            </p>
          </div>

          <div className="flex w-full justify-between">
            <p className="text-[20px] font-[700]">$145</p>

            <div className="flex px-3 py-1 gap-3 rounded-4xl items-center justify-center bg-[#F0F0F0]">
              <img
                src="./minus.png"
                alt="xD"
                className="w-[18px] h-[18px] hover:cursor-pointer transition-all duration-300"
                onClick={decrease}
              />
              <span className="font-semibold text-[16px]">{amount}</span>
              <img
                src="./plus.png"
                alt="xD"
                className="w-[18px] h-[18px] hover:cursor-pointer transition-all duration-300"
                onClick={increase}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default CartCard;
