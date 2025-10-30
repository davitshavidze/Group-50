import Review from "../../Small Components/Review";
function Rating() {
  return (
    <>
      <section className="w-full">
        <div className="flex w-full h-[200px] justify-center items-center gap-60">
          <p className="font-[500] text-2xl ">Product Details</p>
          <p className="font-[500] text-2xl ">Rating & Reviews</p>
          <p className="font-[500] text-2xl ">FAQs</p>
        </div>
        <hr className="w-[1300px] relative left-[300px] bottom-[50px]" />

        <div className="w-full flex justify-center gap-200">
          <div className="flex gap-2 hustify-center items-center">
            <h1 className="text-2xl font-[500]">All Reviews</h1>
            <p className="opacity-75 relative top-[2px]">(451)</p>
          </div>

          <div className="flex gap-2">
            <img
              src="./modify.png"
              alt="xD"
              className="w-[48px] h-[48px] hover:cursor-pointer"
            />
            <div className="flex justify-center items-center gap-3 rounded-4xl bg-[#F0F0F0] w-[120px] hover:cursor-pointer">
              <span>Latest</span>
              <img src="./downImg.png" alt="xD" className="w-[16px] h-[16px]" />
            </div>
            <button className="w-[166px] h-[48px] bg-[#000000] text-white rounded-4xl hover:cursor-pointer hover:text-gray-900 hover:bg-gray-100 transition-all duration-300 font-[500]">
              Write a Review
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-5 w-full justify-center items-center mt-[20px]">
          <div className="flex flex-row gap-7">
            <Review name="Samantha D." text="I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt." time="Posted on August 14, 2023"/>
          </div>
        </div>
        <button className="text-center w-[219px] h-[50px] border-1 border-gray-300 rounded-4xl font-[500] hover:bg-gray-900 hover:text-white transition-all duration-400 hover:scale-3d hover:cursor-pointer relative left-[850px] top-[50px]">
          Load More Reviews
        </button>
      </section>
    </>
  );
}

export default Rating;
