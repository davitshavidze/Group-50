import { useState, useEffect } from "react";
let rendered = false;
import Card from "./Card";
function Arrivals() {
  const [data, setData] = useState([]);
  const [newArrivals, setNewArrivals] = useState([]);

  async function getData() {
    const response = await fetch("/clotheData.json");
    const responseData = await response.json();
    setData(responseData);
    rendered = true;

    const selected = [];
    const usedIndexes = new Set();

    while (selected.length < 4) {
      const random = Math.floor(Math.random() * responseData.length);
      if (!usedIndexes.has(random)) {
        usedIndexes.add(random);
        selected.push(responseData[random]);
      }
    }

    setNewArrivals(selected);
  }

  useEffect(() => {
    if (!rendered) getData();
  }, []);

  return (
    <>
      <header className="w-full bg-black flex flex-wrap justify-center sm:justify-evenly items-center gap-4 sm:gap-0 h-auto sm:h-[110px] py-4 sm:py-0">
        <img
          src="./versace.png"
          alt="xD"
          className="w-[120px] sm:w-[175px] h-[30px] sm:h-[35px]"
        />
        <img
          src="./zara.png"
          alt="xD"
          className="w-[70px] sm:w-[91px] h-[30px] sm:h-[38px]"
        />
        <img
          src="./gucci.png"
          alt="xD"
          className="w-[120px] sm:w-[156px] h-[30px] sm:h-[36px]"
        />
        <img
          src="./prada.png"
          alt="xD"
          className="w-[150px] sm:w-[194px] h-[30px] sm:h-[32px]"
        />
        <img
          src="./klein.png"
          alt="xD"
          className="w-[160px] sm:w-[206px] h-[30px] sm:h-[34px]"
        />
      </header>

      <main className="h-[80vh] w-full text-center">
        <h1 className="text-6xl font-extrabold mt-[125px]">NEW ARRIVALS</h1>

        <div className="w-full h-[60vh] flex justify-center mt-20 gap-10">
          {newArrivals.length > 0 &&
            newArrivals.map((el, ind) => (
              <Card
                key={ind}
                title={el.title}
                imgList={el.imgList[0]}
                price={el.price}
                rating={el.rate}
              />
            ))}
        </div>

        <button className="text-center w-[219px] h-[52px] border-1 border-gray-300 rounded-4xl font-[500] hover:bg-gray-900 hover:text-white transition-all duration-400 hover:scale-3d hover:cursor-pointer">
          View All
        </button>

        <div className="h-[150px] w-full flex justify-center items-center">
          <div className="h-[1px] w-[1400px] border-gray-200 border-2 rounded-4xl"></div>
        </div>
      </main>
    </>
  );
}

export default Arrivals;
