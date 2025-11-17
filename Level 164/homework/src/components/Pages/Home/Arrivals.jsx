import { useState, useEffect, useContext } from "react";
import { UserContext } from "../../../FullPage";
import Card from "../../Small Components/Card";
import { Link } from "react-router-dom";

function Arrivals(props) {
  const { data } = useContext(UserContext);
  const [newArrivals, setNewArrivals] = useState([]);
  const { chosenCard, setChosenCard } = useContext(UserContext);

  async function getData() {
    const response = await fetch("/clotheData.json");
    const responseData = await response.json();
    setData(responseData);
  }

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (!chosenCard) {
      return;
    }
  }, [chosenCard]);

  useEffect(() => {
    if (data.length === 0) return;

    const selected = [];
    const usedIndexes = new Set();
    while (selected.length < 4) {
      const random = Math.floor(Math.random() * data.length);
      if (!usedIndexes.has(random)) {
        usedIndexes.add(random);
        selected.push(data[random]);
      }
    }
    setNewArrivals(selected);
  }, [data]);

  return (
    <>
      <section className="h-[80vh] w-full text-center">
        <h1 className="text-6xl font-extrabold mt-[125px]">{props.title}</h1>

        <div className="w-full h-[60vh] flex justify-center mt-20 gap-10">
          {newArrivals.length > 0 &&
            newArrivals.map((el, ind) => (
              <Link
                to="/DetailPage"
                onClick={() => {
                  setChosenCard(data[el.id - 1]);
                }}
                key={ind}
              >
                <Card
                  key={ind}
                  title={el.title}
                  imgList={el.imgList[0]}
                  price={el.price}
                  rating={el.rate}
                />
              </Link>
            ))}
        </div>

        <button className="text-center w-[219px] h-[52px] border-1 border-gray-300 rounded-4xl font-[500] hover:bg-gray-900 hover:text-white transition-all duration-400 hover:scale-3d hover:cursor-pointer">
          View All
        </button>
      </section>
    </>
  );
}

export default Arrivals;
