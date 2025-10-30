import { useState, useRef } from "react";
function Customers() {
  const testimonials = [
    {
      name: "Sarah M.",
      text: "I'm blown away by the quality and style of the clothes I received from Shopco. Every piece I've bought has exceeded my expectations.",
    },
    {
      name: "Alex K.",
      text: "Finding clothes that align with my personal style used to be a challenge until I discovered Shopco. Their range is remarkable!",
    },
    {
      name: "James L.",
      text: "As someone who’s always on the lookout for unique fashion pieces, I’m thrilled to have stumbled upon Shopco. Stylish and trendy!",
    },
    {
      name: "Monica R.",
      text: "The customer service and product quality are outstanding. I get compliments every time I wear their clothes!",
    },
  ];

  return (
    <>
      <section className="w-full h-[85vh]">
        <div className="w-full flex h-[150px] justify-around mt-[100px] gap-[450px]">
          <h1 className="text-6xl font-extrabold">OUR HAPPY CUSTOMERS</h1>
          <div className="flex h-[50px] justify-center items-center mt-2 gap-2">
            <img
              src="./left.png"
              alt="xD"
              className="w-[25px] h-[25px] hover:cursor-pointer"
            />
            <img
              src="./right.png"
              alt="xD"
              className="w-[25px] h-[25px] hover:cursor-pointer"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Customers;
