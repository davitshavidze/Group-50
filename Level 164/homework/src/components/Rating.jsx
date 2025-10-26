function Rating() {
  return (
    <>
      <main className="w-full h-[80vh] relative bottom-[50px]">
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
            <img src="./modify.png" alt="xD" className="w-[48px] h-[48px] hover:cursor-pointer" />
            <div className="flex justify-center items-center gap-3 rounded-4xl bg-[#F0F0F0] w-[120px] hover:cursor-pointer">
              <span>Latest</span>
              <img src="./downImg.png" alt="xD" className="w-[16px] h-[16px]" />
            </div>
            <button className="w-[166px] h-[48px] bg-[#000000] text-white rounded-4xl hover:cursor-pointer hover:text-gray-900 hover:bg-gray-300 transition-all duration-300 font-[500]">
              Write a Review
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-5 w-full h-[800px] justify-center items-center relative top-[20px]">
          <div className="flex flex-row gap-7">
            <div className="w-[620px] h-[245px] border-gray-300 border-1 rounded-3xl flex-col">
              <div className="flex items-center justify-center gap-[400px] relative top-[20px]">
                <img
                  src="./rewStar1.png"
                  alt="xD"
                  className="w-[127px] h-[23px]"
                />

                <img src="./....png" alt="ხდ" className="w-[24px] h-[24px]" />
              </div>

              <div className="flex relative left-[65px] top-[20px]">
                <h1 className="font-bold relative top-2 right-7 text-[18px]">
                  Samantha D.
                </h1>
                <img
                  src="./verify.png"
                  alt="xD"
                  className="w-[24px] h-[24px] relative top-2 right-6"
                />
              </div>

              <div className="flex flex-col relative top-10">
                <p className="relative left-8 mb-6 opacity-75">
                  "I absolutely love this t-shirt! The design is unique and the
                  fabric feels so <br /> comfortable. As a fellow designer, I
                  appreciate the attention to detail. It's <br /> become my
                  favorite go-to shirt."
                </p>
                <p className="relative left-8 opacity-75">
                  Posted on August 14, 2023
                </p>
              </div>
            </div>

            <div className="w-[620px] h-[245px] border-gray-300 border-1 rounded-3xl">
              <div className="flex items-center justify-center gap-[420px] relative top-[20px]">
                <img
                  src="./imgStar2.png"
                  alt="xD"
                  className="w-[109px] h-[23px]"
                />

                <img src="./....png" alt="ხდ" className="w-[24px] h-[24px]" />
              </div>

              <div className="flex relative left-[65px] top-[20px]">
                <h1 className="font-bold relative top-2 right-7 text-[18px]">
                  Alex M.
                </h1>
                <img
                  src="./verify.png"
                  alt="xD"
                  className="w-[24px] h-[24px] relative top-2 right-6"
                />
              </div>

              <div className="flex flex-col relative top-10">
                <p className="relative left-8 mb-6 opacity-75">
                  "The t-shirt exceeded my expectations! The colors are vibrant
                  and the print <br /> quality is top-notch. Being a UI/UX
                  designer myself, I'm quite picky about <br /> aesthetics, and
                  this t-shirt definitely gets a thumbs up from me."
                </p>
                <p className="relative left-8 opacity-75">
                  Posted on August 15, 2023
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-row gap-7">
            <div className="w-[620px] h-[245px] border-gray-300 border-1 rounded-3xl">
              <div className="flex items-center justify-center gap-[400px] relative top-[20px]">
                <img
                  src="./rewStar1.png"
                  alt="xD"
                  className="w-[127px] h-[23px]"
                />

                <img src="./....png" alt="ხდ" className="w-[24px] h-[24px]" />
              </div>

              <div className="flex relative left-[65px] top-[20px]">
                <h1 className="font-bold relative top-2 right-7 text-[18px]">
                  Ethan R.
                </h1>
                <img
                  src="./verify.png"
                  alt="xD"
                  className="w-[24px] h-[24px] relative top-2 right-6"
                />
              </div>

              <div className="flex flex-col relative top-10">
                <p className="relative left-8 mb-6 opacity-75">
                  "This t-shirt is a must-have for anyone who appreciates good
                  design. The <br /> minimalistic yet stylish pattern caught my
                  eye, and the fit is perfect. I can <br /> see the designer's
                  touch in every aspect of this shirt."
                </p>
                <p className="relative left-8 opacity-75">
                  Posted on August 16, 2023
                </p>
              </div>
            </div>

            <div className="w-[620px] h-[245px] border-gray-300 border-1 rounded-3xl">
              <div className="flex items-center justify-center gap-[420px] relative top-[20px]">
                <img
                  src="./imgStar2.png"
                  alt="xD"
                  className="w-[109px] h-[23px]"
                />

                <img src="./....png" alt="ხდ" className="w-[24px] h-[24px]" />
              </div>

              <div className="flex relative left-[65px] top-[20px]">
                <h1 className="font-bold relative top-2 right-7 text-[18px]">
                  Olivia P.
                </h1>
                <img
                  src="./verify.png"
                  alt="xD"
                  className="w-[24px] h-[24px] relative top-2 right-6"
                />
              </div>

              <div className="flex flex-col relative top-10">
                <p className="relative left-8 mb-6 opacity-75">
                  "As a UI/UX enthusiast, I value simplicity and functionality.
                  This t-shirt not <br /> only represents those principles but
                  also feels great to wear. It's evident <br /> that the
                  designer poured their creativity into making this t-shirt
                  stand out."
                </p>
                <p className="relative left-8 opacity-75">
                  Posted on August 17, 2023
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-row gap-7">
            <div className="w-[620px] h-[245px] border-gray-300 border-1 rounded-3xl">
              <div className="flex items-center justify-center gap-[420px] relative top-[20px]">
                <img
                  src="./imgStar2.png"
                  alt="xD"
                  className="w-[109px] h-[23px]"
                />

                <img src="./....png" alt="ხდ" className="w-[24px] h-[24px]" />
              </div>

              <div className="flex relative left-[65px] top-[20px]">
                <h1 className="font-bold relative top-2 right-7 text-[18px]">
                  Liam K.
                </h1>
                <img
                  src="./verify.png"
                  alt="xD"
                  className="w-[24px] h-[24px] relative top-2 right-6"
                />
              </div>

              <div className="flex flex-col relative top-10">
                <p className="relative left-8 mb-6 opacity-75">
                  "This t-shirt is a fusion of comfort and creativity. The
                  fabric is soft, and the <br /> design speaks volumes about the
                  designer's skill. It's like wearing a piece <br /> of art that
                  reflects my passion for both design and fashion."
                </p>
                <p className="relative left-8 opacity-75">
                  Posted on August 18, 2023
                </p>
              </div>
            </div>

            <div className="w-[620px] h-[245px] border-gray-300 border-1 rounded-3xl">
              <div className="flex items-center justify-center gap-[400px] relative top-[20px]">
                <img
                  src="./rewStar1.png"
                  alt="xD"
                  className="w-[127px] h-[23px]"
                />

                <img src="./....png" alt="ხდ" className="w-[24px] h-[24px]" />
              </div>

              <div className="flex relative left-[65px] top-[20px]">
                <h1 className="font-bold relative top-2 right-7 text-[18px]">
                  Ava H.
                </h1>
                <img
                  src="./verify.png"
                  alt="xD"
                  className="w-[24px] h-[24px] relative top-2 right-6"
                />
              </div>

              <div className="flex flex-col relative top-10">
                <p className="relative left-8 mb-6 opacity-75">
                  "I'm not just wearing a t-shirt; I'm wearing a piece of design
                  philosophy. <br /> The intricate details and thoughtful layout
                  of the design make this shirt a <br /> conversation starter."
                </p>
                <p className="relative left-8 opacity-75">
                  Posted on August 19, 2023
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Rating;
