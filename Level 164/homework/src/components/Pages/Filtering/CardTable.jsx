import { useState, useEffect, useContext } from "react";
import Card from "../../Small Components/Card";
import { UserContext } from "../../../FullPage";
import { Link } from "react-router-dom";

function CardTable() {
  const data = useContext(UserContext);
  const [filterData, setFilterData] = useState([]);
  const [pages, setPages] = useState([]);
  const [currPage, setCurrPage] = useState(0);

  function getFilteredFata() {
    if (!data) return;

    let lst = [];
    let temp = [];

    for (let i = 0; i < data.data.length; i++) {
      temp.push(data.data[i]);
      if (temp.length === 9) {
        lst.push(temp);
        temp = [];
      }
    }

    if (temp.length > 0) {
      lst.push(temp);
    }

    setFilterData(data.data);
    setPages(lst);

    console.log(lst);
  }

  useEffect(() => {
    if (data) {
      getFilteredFata();
    }
  }, [data]);

  return (
    <section className="w-full flex flex-col gap-4 items-center justify-center">
      <div className="flex justify-around w-full">
        <h3 className="font-[600] text-4xl">Casual</h3>

        <p>
          Showing 1-10 of 100 Products{" "}
          <span>
            Sort By: <span>Most Popular</span>
          </span>
        </p>
      </div>

      <div className="grid grid-cols-3 gap-5 max-lg:grid-cols-[repeat(auto-fit, minmax(300px, 1fr))] justify-center items-center gap-36">
        {pages.length > 0
          ? pages[currPage].map((el, ind) => (
              <Card
                key={ind}
                title={el.title}
                imgList={el.imgList[0]}
                price={el.price}
                rating={el.rate}
              />
            ))
          : null}
      </div>

      <div className="flex justify-between gap-5">
        <button
          onClick={() => setCurrPage((prev) => (prev > 0 ? prev - 1 : 0))}
          className="bg-gray-900 text-white p-4 rounded-2xl font-[500] transition-all duration-300 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
        >
          Previous
        </button>

        <div className="flex gap-4">
          {pages.map((el, ind) => {
            return (
              <p
                key={ind}
                className={`${
                  ind === currPage ? "bg-[#0000000F]" : null
                } cursor-pointer p-4 rounded-lg`}
                onClick={() => setCurrPage(ind)}
              >
                {ind + 1}
              </p>
            );
          })}
        </div>

        <button
          onClick={() =>
            setCurrPage((prev) => (prev < pages.length - 1 ? prev + 1 : prev))
          }
          className="bg-gray-900 text-white p-4 rounded-2xl font-[500] transition-all duration-300 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
        >
          Next
        </button>
      </div>
    </section>
  );
}

export default CardTable;
