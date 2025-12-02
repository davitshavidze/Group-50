import { useState, useContext, useEffect } from "react";
import { UserContext } from "../../FullPage";

function CartCard({ itemInfo }) {
  const { setChosenCard, sum, setSum, active, setActive, cart, setCart } =
    useContext(UserContext);

  const [amount, setAmount] = useState(itemInfo.quantity || 1);
  const imgList = itemInfo.imgList || [];

  function decrease() {
    if (amount > 1) {
      const newAmount = amount - 1;
      setAmount(newAmount);
      setChosenCard({ ...itemInfo, quantity: newAmount });

      setCart((prev) => {
        const arr = Array.isArray(prev) ? prev : [];
        return arr.map((item) =>
          item.id === itemInfo.id ? { ...item, quantity: newAmount } : item
        );
      });
    }
  }

  function increase() {
    const newAmount = amount + 1;
    setAmount(newAmount);
    setChosenCard({ ...itemInfo, quantity: newAmount });

    setCart((prev) => {
      const arr = Array.isArray(prev) ? prev : [];
      return arr.map((item) =>
        item.id === itemInfo.id ? { ...item, quantity: newAmount } : item
      );
    });
  }

  function removeItem() {
    setActive(!active);
    setSum(0);

    setCart((prev) => {
      const arr = Array.isArray(prev) ? prev : [];
      return arr.filter((item) => item.id !== itemInfo.id);
    });
  }

  useEffect(() => {
    setSum((prevSum) => {
      const itemTotal = (itemInfo.price || 0) * amount;
      return prevSum + itemTotal;
    });
  }, [amount, itemInfo.price]);

  return (
    <div className="w-full h-[150px] pb-5 flex gap-5 border-b-[1.5px] border-[#0000001A]">
      <img
        src={imgList[0] ? `/clothes/${imgList[0]}` : "/placeholder.png"}
        alt={itemInfo.title || "product photo"}
        className="rounded-lg w-[130px] h-[130px] object-cover"
      />

      <div className="w-full flex flex-col justify-between h-full">
        <div className="flex flex-col gap-1 w-full">
          <div className="w-full flex gap-3 justify-between">
            <h2 className="text-[20px] font-bold">{itemInfo.title || ""}</h2>
            <i
              className="fa-solid fa-trash-can text-red-600 cursor-pointer"
              onClick={removeItem}
            ></i>
          </div>

          <p className="text-[13px]">
            Size: <span className="text-[#666]">{itemInfo.size || ""}</span>
          </p>
          <p className="text-[13px]">
            Color: <span className="text-[#666]">{itemInfo.color || ""}</span>
          </p>
        </div>

        <div className="flex w-full justify-between">
          <p className="text-[20px] font-bold">${itemInfo.price || 0}</p>

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
