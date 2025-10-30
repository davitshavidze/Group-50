function Review(props) {
  return (
    <>
      <div className="w-[620px] border-gray-300 border-1 rounded-3xl flex flex-col p-7 gap-3">
        <div className="flex items-center justify-between">
          <img src="./rewStar1.png" alt="xD" className="w-[127px] h-[23px]" />

          <img src="./....png" alt="image dont work" className="w-[24px] h-[24px]" />
        </div>

        <div className="flex gap-1">
          <h1 className="font-bold text-[18px]">
            {props.name}
          </h1>
          <img
            src="./verify.png"
            alt="image dont work"
            className="w-[24px] h-[24px]"
          />
        </div>

        <div className="flex flex-col gap-4">
          <p className="opacity-75">
            {props.text}
          </p>
          <p className="opacity-[60%] font-[500] text-[#000000]">
            {props.time}
          </p>
        </div>
      </div>
    </>
  );
}
export default Review;
