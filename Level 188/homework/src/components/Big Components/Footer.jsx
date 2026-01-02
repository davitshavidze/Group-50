function Footer() {
  return (
    <>
      <footer className="w-full min-h-[50vh] bg-[#191919] flex flex-col justify-center items-center gap-15">
        <div className="flex flex-col justify-center max-sm:text-center gap-8 md:gap-20 md:flex-row">
          <div className="text-white flex flex-col gap-1.5">
            <h2 className="font-bold text-4xl mt-2 md:mt-0">Our Products</h2>
            <p className="opacity-80">Our menus</p>
            <p className="opacity-80">Our burgers</p>
            <p className="opacity-80">Our times sides</p>
            <p className="opacity-80">Our naandwiches</p>
          </div>

          <div className="text-white flex flex-col gap-2">
            <h2 className="font-bold text-4xl">legal information</h2>
            <p className="opacity-80">Legal Notice</p>
          </div>

          <div className="text-white flex flex-col gap-2">
            <h2 className="font-bold text-4xl">Contact us</h2>
            <p className="opacity-80">Contacts</p>
            <p className="opacity-80">Our addresses</p>
            <p className="opacity-80">Become a Times Square franchisee</p>
          </div>

          <div className="text-white flex flex-col gap-3">
            <h2 className="font-bold text-4xl">We Accept</h2>
            <div className="flex md:flex-wrap max-w-50 gap-3 justify-center items-center max-sm:ml-12 mt-2">
              <img src="/masterCard.png" alt="card" className="w-[65px]" />
              <img src="/visaCard.png" alt="card" className="w-[115px]" />
              <img src="American.png" alt="card" className="w-[95px]"/>
            </div>
          </div>
        </div>

        <span className="h-1 w-[63%] bg-white opacity-50 rounded-4xl"></span>
        <div className="flex md:w-[63%] justify-between gap-3">
          <div className="flex gap-2">
            <i className="fa-brands fa-facebook text-white md:text-2xl"></i>
            <i className="fa-brands fa-twitter text-white md:text-2xl"></i>
            <i className="fa-brands fa-discord text-white md:text-2xl"></i>
            <i className="fa-brands fa-linkedin text-white md:text-2xl"></i>
          </div>

          <span className="text-white font-semibold text-sm md:text-base ">
            © 2024 Nayef All rights reserved.
          </span>
        </div>
      </footer>
    </>
  );
}
export default Footer;
