import Home from "./components/Home";
import Arrivals from "./components/Arrivals";
import Selling from "./components/Selling";
import DressStyle from "./components/DressStyle";
import Customers from "./components/Customers";
import Shop from "./components/Shop";
import Rating from "./components/Rating";
function App() {
  return (
    <>
      <div className="w-full bg-[#000000] h-[50px] flex flex-wrap text-white items-center justify-center gap-[5px] text-[14px] sm:text-[16px] px-2 sm:px-0">
        <p className="text-center">
          Sign up and get 20% off to your first order.
        </p>
        <a href="#" className="font-semibold underline">
          Sign Up Now
        </a>

        <img
          src="./x.png"
          alt="xD"
          className="w-[14px] h-[14px] relative sm:left-[600px] hover:cursor-pointer hidden sm:block"
        />
      </div>
      <header className="bg-[#FFFFFF] h-auto sm:h-[100px] w-full flex flex-wrap justify-evenly sm:justify-between items-center gap-[20px] px-4 sm:px-10 py-4">
        <h1 className="font-extrabold text-3xl sm:text-5xl relative sm:left-[50px]">
          SHOP.CO
        </h1>

        <div>
          <ul className="flex flex-wrap justify-center gap-[20px] sm:gap-[40px] text-[16px] sm:text-[20px] items-center">
            <li>
              <select className="active:border-0 focus:border-0 active:outline-0 focus:outline-0 bg-transparent hover:cursor-pointer hover:scale-[1.025] transition-all duration-300">
                <option >Shop</option>
                <option>xD</option>
              </select>
            </li>
            <li className="hover:cursor-pointer hover:scale-[1.025] transition-all duration-300">On Sale</li>
            <li className="hover:cursor-pointer hover:scale-[1.025] transition-all duration-300">New Arrivals</li>
            <li className="hover:cursor-pointer hover:scale-[1.025] transition-all duration-300">Brands</li>
          </ul>
        </div>

        <div className="bg-[#F0F0F0] rounded-4xl flex justify-start items-center w-[90%] sm:w-[575px] pl-[10px] h-[40px]">
          <span className="material-symbols-outlined opacity-70">search</span>
          <input
            type="text"
            placeholder="Search for products..."
            className="p-[5px] active:border-none hover:border-none focus:border-none focus:outline-0 ml-2 w-full bg-transparent"
          />
        </div>

        <div className="flex gap-4 justify-center sm:justify-start">
          <img
            src="./cart.png"
            alt="xD"
            className="w-[24px] h-[24px] hover:cursor-pointer"
          />
          <img
            src="./profile.png"
            alt="xD"
            className="w-[24px] h-[24px] hover:cursor-pointer"
          />
        </div>
      </header>

      <Home />
      <Arrivals />
      <Selling />
      <DressStyle />
      <Customers />
      <Shop />
      <Rating />
    </>
  );
}

export default App;
