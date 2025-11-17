function Footer() {
  return (
    <>
      <footer className="w-full bg-[#F0F0F0] mt-25">
        <div className="flex justify-center px-4">
          <div className="bg-black w-full max-w-[1240px] h-auto lg:h-[180px] rounded-3xl flex flex-col lg:flex-row justify-around items-center p-6 lg:p-0 lg:relative lg:bottom-[50px] mt-20 ml-40">
            <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-[900] text-center lg:text-left">
              STAY UPTO DATE ABOUT <br /> OUR LATEST OFFERS
            </h1>

            <div className="flex flex-col gap-4 mt-6 lg:mt-0 w-full max-w-[350px]">
              <div className="flex gap-3 w-full h-[50px] rounded-4xl bg-white items-center pl-5">
                <img src="./email.png" className="w-[26px] h-[22px]" />
                <input
                  type="text"
                  placeholder="Enter your email address"
                  className="w-full bg-transparent outline-none"
                />
              </div>

              <button className="w-full h-[47px] bg-white rounded-4xl font-[500] hover:cursor-pointer hover:scale-[1.025] transition-all duration-300">
                Subscribe to Newsletter
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-10 justify-evenly px-4 mt-10 text-center lg:text-left">
          <div className="flex flex-col gap-10 w-full sm:w-auto">
            <h1 className="text-5xl font-[900]">SHOP.CO</h1>
            <p className="opacity-75 text-[17px]">
              We have clothes that suits your style <br /> and which you’re
              proud to wear. From <br /> women to men.
            </p>
            <div className="flex gap-4 justify-center lg:justify-start">
              <img
                src="./twitter.png"
                className="w-[28px] h-[28px] hover:cursor-pointer"
              />
              <img
                src="./facebook.png"
                className="w-[28px] h-[28px] hover:cursor-pointer"
              />
              <img
                src="./instagram.png"
                className="w-[28px] h-[28px] hover:cursor-pointer"
              />
              <img
                src="./github.png"
                className="w-[28px] h-[28px] hover:cursor-pointer"
              />
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <h2 className="text-2xl font-[450]">COMPANY</h2>
            <div className="flex flex-col gap-5 text-[18px] opacity-75">
              <p>About</p>
              <p>Features</p>
              <p>Works</p>
              <p>Career</p>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <h2 className="text-2xl font-[450]">HELP</h2>
            <div className="flex flex-col gap-5 text-[18px] opacity-75">
              <p>Customer Support</p>
              <p>Delivery Details</p>
              <p>Terms & Conditions</p>
              <p>Privacy Policy</p>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <h2 className="text-2xl font-[450]">FAQ</h2>
            <div className="flex flex-col gap-5 text-[18px] opacity-75">
              <p>Account</p>
              <p>Manage Deliveries</p>
              <p>Orders</p>
              <p>Payments</p>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <h2 className="text-2xl font-[450]">RESOURCES</h2>
            <div className="flex flex-col gap-5 text-[18px] opacity-75">
              <p>Free eBooks</p>
              <p>Development Tutorial</p>
              <p>How to - Blog</p>
              <p>Youtube Playlist</p>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center items-center mt-10 px-4">
          <hr className="w-full max-w-[1620px] opacity-20" />
        </div>

        <div className="flex flex-col lg:flex-row justify-around items-center gap-8 px-4 mt-10">
          <h3 className="opacity-75 text-center lg:text-left">
            Shop.co © 2000-2023, All Rights Reserved
          </h3>

          <div className="flex gap-3">
            <img src="./visa.png" className="w-[50px] h-[35px]" />
            <img src="./master.png" className="w-[50px] h-[35px]" />
            <img src="./paypal.png" className="w-[50px] h-[35px]" />
            <img src="./apple.png" className="w-[50px] h-[35px]" />
            <img src="./google.png" className="w-[50px] h-[35px]" />
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
