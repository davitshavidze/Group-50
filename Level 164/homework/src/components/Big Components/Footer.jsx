function Footer() {
  return (
    <>
      <footer className="w-full bg-[#F0F0F0] h-[65vh]">
        <div className="bg-[#000000] w-[1240px] h-[180px] rounded-3xl flex justify-around relative left-[360px] bottom-[85px] mt-20">
          <h1 className="text-white text-5xl relative top-[30px] font-[900]">
            STAY UPTO DATE ABOUT <br /> OUR LATEST OFFERS
          </h1>

          <div className="flex flex-col gap-4 relative top-[30px]">
            <div className="flex gap-3 w-[349px] h-[50px] rounded-4xl bg-white items-center pl-5">
              <img
                src="./email.png"
                className="text-white bg-white rounded w-[26px] h-[22px]"
              />
              <input
                type="text"
                placeholder="Enter your email address"
                className="w-[175px] h-[25px] hover:outline-0 active:border-none hover:border-none focus:border-none focus:outline-0 ml-1 bg-transparent"
              />
            </div>

            <button className="w-[350px] h-[47px] bg-white rounded-4xl font-[500] hover:cursor-pointer hover:scale-[1.025] transition-all duration-300">
              Subscribe to Newsletter
            </button>
          </div>
        </div>

        <div className="flex gap-10 justify-evenly">
          <div className="flex flex-col gap-10">
            <h1 className="text-5xl font-[900]">SHOP.CO</h1>
            <p className="opacity-75 text-[17px]">
              We have clothes that suits your style <br /> and which you’re
              proud to wear. From <br /> women to men.
            </p>

            <div className="flex gap-4">
              <img
                src="./twitter.png"
                className="w-[28px] h-[28px] hover:cursor-pointer"
              />
              <img
                src="./facebook.png"
                className="w-[28px] h-[28px] hover:cursor-pointer"
              />
              <img
                src="instagram.png"
                className="w-[28px] h-[28px] hover:cursor-pointer"
              />
              <img
                src="./github.png"
                className="w-[28px] h-[28px]  hover:cursor-pointer"
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

        <div className="w-full h-[100px] flex justify-center items-center">
          <hr className="w-[1620px] opacity-20" />
        </div>

        <div className="flex justify-around gap-200">
          <h3 className="opacity-75">Shop.co © 2000-2023, All Rights Reserved</h3>

          <div className="flex">
            <img src="./visa.png" alt=""   className="w-[50px] h-[35px]" />
            <img src="./master.png" alt="" className="w-[50px] h-[35px]" />
            <img src="./paypal.png" alt="" className="w-[50px] h-[35px]" />
            <img src="./apple.png" alt=""  className="w-[50px] h-[35px]" />
            <img src="./google.png" alt="" className="w-[50px] h-[35px]" />
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
