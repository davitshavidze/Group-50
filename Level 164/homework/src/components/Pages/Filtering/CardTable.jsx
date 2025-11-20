import { useState, useEffect, useContext } from "react";
import Card from "../../Small Components/Card";
import { UserContext } from "../../../FullPage";
import { Link } from "react-router-dom";

function CardTable() {
  const data = useContext(UserContext);
  const [filterData, setFilterData] = useState(data);
  const [pages, setPages] = useState([]);
  const [currPage, setCurrPage] = useState(0);
  const { ready, setReady } = useContext(UserContext);

  console.log(ready);

  function getFilteredFata() {
    if (!ready) return;

    let lst = [];
    let temp = [];

    for (let i = 0; i < ready.length; i++) {
      temp.push(ready[i]);
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
  }

  useEffect(() => {
    if (data) {
      getFilteredFata();
    }
  }, [data]);

  return (
    <section className="w-full flex flex-col gap-4 items-center mt-18">
      <div className="flex w-full justify-between flex-wrap gap-3 px-5">
        <h3 className="font-[600] text-3xl sm:text-4xl">Casual</h3>

        <p className="text-sm sm:text-base">
          Showing 1-9 of 20 Products Sort By:
          <span className="ml-1 font-[600]">Most Popular</span>
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 w-full px-5 mt-3">
        {pages.length > 0
          ? pages[currPage].map((el, ind) => (
              <Card
                key={ind}
                title={el.title}
                imgList={el.selectedImg ? el.selectedImg : el.imgList[0]}
                price={el.price}
                rating={el.rate}
              />
            ))
          : null}
      </div>

      <div className="flex flex-wrap justify-center gap-5 mt-5">
        <button
          onClick={() => setCurrPage((prev) => (prev > 0 ? prev - 1 : 0))}
          className="bg-gray-900 text-white p-4 rounded-2xl font-[500] transition-all duration-300 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
        >
          Previous
        </button>

        <div className="flex gap-4 flex-wrap justify-center">
          {pages.map((el, ind) => {
            return (
              <p
                key={ind}
                className={`${
                  ind === currPage ? "bg-[#0000000F]" : ""
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
