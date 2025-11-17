function Card({ title, imgList, price, discountPrice, rating }) {
  return (
    <div className="flex flex-col max-w-[300px] rounded-4xl hover:scale-[1.025] transition-all duration-300 hover:cursor-pointer">
      <img
        src={`/clothes/${imgList}`}
        alt="clothe photo"
        className="w-[300px] h-[400px] object-cover rounded-2xl"
      />
      <div className="flex flex-col gap-1">
        <h2 className="font-[700] text-left mt-2">{title}</h2>
        <p className="flex gap-2 items-center">
          ⭐⭐⭐⭐⭐
          <span>
            {rating}/<span className="text-[#666666]">5</span>
          </span>
        </p>
        <p className="font-[700] text-left text-2xl">${price}</p>
      </div>
    </div>
  );
}

export default Card