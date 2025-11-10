import { useState, useContext, useEffect } from "react";
import { UserContext } from "../../../FullPage";

function Shop() {
  const { chosenCard, setChosenCard } = useContext(UserContext);
  const [num, setNum] = useState(0);
  const [card, setCard] = useState(chosenCard || null);
  const [active, setActive] = useState(0)
  const [currColor, setCurrColor] = useState(chosenCard.colorList[0])

  useEffect(() => {
    if (chosenCard) {
      localStorage.setItem("chosenCard", JSON.stringify(chosenCard));
      setCard(chosenCard);
    } else {
      const saved = localStorage.getItem("chosenCard");
      if (saved) setCard(JSON.parse(saved));
    }
  }, [chosenCard]);

  function increase() {
    setNum(num + 1);
  }

  function decrease() {
    if (num > 0) {
      setNum(num - 1);
    }
  }

  console.log(card);

  return (
    <main className="max-w-7xl mx-auto px-6 py-10">
      <div className="flex items-center gap-2 text-gray-600 text-sm mb-8">
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

      <div className="flex flex-col lg:flex-row items-start gap-10">
        <div className="flex flex-wrap justify-center gap-4 w-full lg:w-[300px] items-center relative left-15">
          {card?.imgList?.map((item, index) => (
            <img
              key={index}
              alt="Not work"
              src={`/clothes/${item}`}
              className="w-36 h-40 object-cover rounded-2xl shadow-md hover:scale-[1.025] transition-transform duration-300 cursor-pointer"
              onClick={() => {setActive(index); setCurrColor(product.colorList[id])}}
            />
          ))}
        </div>

        <div>
          {
            <img src={`/clothes/${chosenCard.imgList[active]}`} className="w-[550px] h-[520px] rounded-4xl hover:cursor-pointer hover:scale-[1.025] transition-all duration-300 object-cover bg-center" />
          }
        </div>

        <div className="flex flex-col gap-7">
          <div>
            <h1 className="font-bold text-3xl mb-2">{card?.title}</h1>
            <img src="./4.5star.png" alt="stars" className="w-44 h-6" />
          </div>

          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-bold text-gray-900">${card?.price}</h1>
            <span className="text-2xl text-gray-400 line-through">$300</span>
            <div className="bg-red-100 text-red-500 text-sm font-[500] px-3 py-1 rounded-full">
              -40%
            </div>
          </div>

          <p className="text-gray-600 leading-relaxed">{card?.desc}</p>

          <hr className="border-gray-200" />

          <div>
            <p className="text-gray-700 font-medium mb-2">Select Colors</p>
            <div className="flex gap-3">
              {card?.colorList.map((color, id) => (
                <div
                  key={id}
                  className="w-9 h-9 rounded-full shadow-inner cursor-pointer hover:scale-[1.025] transition-transform"
                  style={{ backgroundColor: color }}
                  onClick={() => setCurrColor(color)}
                />
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
                  className="px-5 py-2 bg-gray-100 rounded-full text-gray-700 hover:bg-gray-900 hover:text-white transition-all cursor-pointer"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <hr className="border-gray-200" />

          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center justify-between w-[140px] bg-gray-100 px-4 py-2 rounded-full">
              <button
                onClick={decrease}
                className="hover:scale-110 transition-transform"
              >
                <img
                  src="./minus.png"
                  alt="-"
                  className="w-5 h-5 cursor-pointer"
                />
              </button>
              <span className="font-semibold">{num}</span>
              <button
                onClick={increase}
                className="hover:scale-110 transition-transform"
              >
                <img
                  src="./plus.png"
                  alt="+"
                  className="w-5 h-5 cursor-pointer"
                />
              </button>
            </div>

            <button className="w-[300px] bg-black text-white py-3 rounded-full font-medium hover:bg-gray-900 transition-all duration-300 hover:cursor-pointer">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Shop;
