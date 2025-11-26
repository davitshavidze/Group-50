import { useState, useContext, useEffect } from "react";
import { UserContext } from "../../../FullPage";
import { Link } from "react-router-dom";
function Shop() {
  const { chosenCard, setChosenCard } = useContext(UserContext);
  const [num, setNum] = useState(1);
  const [card, setCard] = useState(chosenCard ? chosenCard : undefined);
  const [active, setActive] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  useEffect(() => {
    if (chosenCard) {
      localStorage.setItem("chosenCard", JSON.stringify(chosenCard));
      setCard(chosenCard);
      setSelectedColor(chosenCard.colorList[0]);
    } else {
      const saved = localStorage.getItem("chosenCard");
      if (saved) {
        const parsed = JSON.parse(saved);
        setCard(parsed);
        setSelectedColor(parsed.colorList[0]);
      }
    }
  }, [chosenCard]);

  useEffect(() => {
    setSelectedColor(card.colorList[active]);
  }, [active, card]);

  function increase() {
    setNum(num + 1);
  }

  function decrease() {
    if (num > 0) setNum(num - 1);
  }

  const cartItem = {
    title: chosenCard.title,
    price: chosenCard.price,
    size: selectedSize,
    color: selectedColor,
    quantity: num,
    img: chosenCard.imgList[0],
    disc: chosenCard.discount
  };

  return (
    <main className="max-w-7xl mx-auto px-6 py-10">
      <div className="flex items-center gap-2 text-gray-600 text-sm mb-8">
        <p className="text-gray-500 text-[16px]">Home</p>
        <img src="./arrow.png" className="w-4 h-4" />
        <p className="text-gray-500 text-[16px]">Shop</p>
        <img src="./arrow.png" className="w-4 h-4" />
        <p className="text-gray-500 text-[16px]">Men</p>
        <img src="./arrow.png" className="w-4 h-4" />
        <p className="text-gray-800 text-[16px]">T-shirts</p>
      </div>
      <div className="flex flex-col lg:flex-row items-start gap-10">
        <div className="flex flex-wrap justify-center gap-4 w-full lg:w-[300px]">
          {card?.imgList?.map((item, index) => (
            <img
              key={index}
              src={`/clothes/${item}`}
              className="w-36 h-40 object-cover rounded-2xl shadow-md hover:scale-[1.025] transition cursor-pointer"
              onClick={() => setActive(index)}
            />
          ))}
        </div>
        <div>
          <img
            src={`/clothes/${card?.imgList[active]}`}
            className="w-[550px] h-[520px] rounded-4xl object-cover hover:scale-[1.025] transition"
          />
        </div>
        <div className="flex flex-col gap-7">
          <div>
            <h1 className="font-bold text-3xl mb-2">{card?.title}</h1>
            <img src="./4.5star.png" className="w-44 h-6" />
          </div>
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-bold">${card?.price}</h1>
            <span className="text-2xl text-gray-400 line-through">$300</span>
            <div className="bg-red-100 text-red-500 text-sm px-3 py-1 rounded-full">
              -40%
            </div>
          </div>
          <p className="text-gray-600">{card?.desc}</p>
          <hr className="border-gray-200" />
          <div>
            <p className="text-gray-700 font-medium mb-2">Select Colors</p>
            <div className="flex items-center gap-3">
              {card?.colorList.map((color, id) => (
                <button
                  key={id}
                  onClick={() => setActive(id)}
                  className={`relative w-10 h-10 rounded-full shadow-md transition hover:scale-105 hover:cursor-pointer border-2 ${
                    selectedColor === color
                      ? "border-black"
                      : "border-transparent"
                  }`}
                  style={{ backgroundColor: color }}
                >
                  <i
                    className={`fa-solid fa-check text-white absolute inset-x-[7px] inset-y-[9px] text-lg transition-opacity ${
                      selectedColor === color ? "opacity-100" : "opacity-0"
                    }`}
                  ></i>
                </button>
              ))}
            </div>
          </div>
          <hr className="border-gray-200" />
          <div>
            <p className="text-gray-700 font-medium mb-2">Choose Size</p>
            <div className="flex flex-wrap gap-3">
              {card?.sizeList.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-5 py-2 rounded-full transition cursor-pointer ${
                    selectedSize === size
                      ? "bg-gray-900 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-900 hover:text-white"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          <hr className="border-gray-200" />
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center justify-between w-[140px] bg-gray-100 px-4 py-2 rounded-full">
              <button
                onClick={decrease}
                className="hover:scale-105 transition  hover:cursor-pointer"
              >
                <img src="./minus.png" className="w-5 h-5" />
              </button>
              <span className="font-semibold">{num}</span>
              <button
                onClick={increase}
                className="hover:scale-105 transition hover:cursor-pointer"
              >
                <img src="./plus.png" className="w-5 h-5" />
              </button>
            </div>
            <Link
              to="/Cart"
              onClick={() => {
                setChosenCard(cartItem);
                console.log(cartItem);
              }}
            >
              <button className="w-[300px] bg-black text-white py-3 rounded-full font-medium hover:bg-gray-900 transition hover:cursor-pointer">
                Add to Cart
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Shop;
