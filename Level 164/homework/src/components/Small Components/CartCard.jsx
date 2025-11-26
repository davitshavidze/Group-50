import { useState, useContext, useEffect } from "react";
import { UserContext } from "../../FullPage";

function CartCard() {
  const { chosenCard, setChosenCard, sum, setSum, active, setActive } = useContext(UserContext);
  const [amount, setAmount] = useState(chosenCard.quantity);

  function decrease() {
    if (amount > 1) {
      setAmount(amount - 1);
      setChosenCard({ ...chosenCard, quantity: amount - 1 });
    }
  }

  function increase() {
    setAmount(amount + 1);
    setChosenCard({ ...chosenCard, quantity: amount + 1 });
  }

  function removeItem() {
    setActive(!active)
    setSum(0);
  }

  useEffect(() => {
    setSum(chosenCard.price * chosenCard.quantity);
  }, [chosenCard.quantity]);

  return (
    <div className="w-full h-[150px] pb-[20px] flex gap-5 border-b-[1.5px] border-[#0000001A]">
      <img
        src={`/clothes/${chosenCard.img}`}
        alt="product photo"
        className="rounded-lg w-[130px] h-[130px] object-cover"
      />

      <div className="w-full flex flex-col justify-between h-full">
        <div className="flex flex-col gap-1 w-full">
          <div className="w-full flex gap-3 justify-between">
            <h2 className="text-[20px] font-[700]">{chosenCard.title}</h2>
            <i className="fa-solid fa-trash-can text-red-600 cursor-pointer" onClick={removeItem}></i>
          </div>

          <p className="text-[13px]">
            Size: <span className="text-[#666]">{chosenCard.size}</span>
          </p>
          <p className="text-[13px]">
            Color: <span className="text-[#666]">{chosenCard.color}</span>
          </p>
        </div>

        <div className="flex w-full justify-between">
          <p className="text-[20px] font-[700]">${chosenCard.price}</p>

          <div className="flex px-3 py-1 gap-3 rounded-4xl items-center justify-center bg-[#F0F0F0]">
            <img
              src="./minus.png"
              className="w-[18px] h-[18px] cursor-pointer"
              onClick={decrease}
            />
            <span className="font-semibold text-[16px]">{amount}</span>
            <img
              src="./plus.png"
              className="w-[18px] h-[18px] cursor-pointer"
              onClick={increase}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartCard;
