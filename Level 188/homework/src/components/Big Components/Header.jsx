import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("Found"));
  console.log(user);

  return (
    <>
      <header className="w-full h-[70px] bg-black flex justify-around gap-15 items-center fixed z-1">
        <Link to="/">
          <h2 className="font-bold text-3xl">
            <b className="text-[#F1C74E]">Asian</b>
            <b className="text-[#ffffff]">f</b>
            <b className="text-[#767676]">ood</b>
          </h2>
        </Link>

        <div className="flex gap-10 text-white font-bold max-sm:hidden">
          <Link to="/">
            <p className="cursor-pointer hover:scale-102 transition-all duration-100">
              Home
            </p>
          </Link>

          <Link to="/BlogPage">
            <p className="cursor-pointer hover:scale-102 transition-all duration-100">
              Blog
            </p>
          </Link>

          <Link to="/Menu">
            <p className="cursor-pointer hover:scale-102 transition-all duration-100">
              Menu
            </p>
          </Link>

          <p className="cursor-pointer hover:scale-102 transition-all duration-100">
            Contact Us
          </p>
        </div>

        <div className="flex gap-5 justify-center items-center">
          <i className="fa-solid fa-magnifying-glass cursor-pointer text-white text-[20px]"></i>

          <Link to="/CartPage">
            {user?.status === "User" ? (
              <i className="fa-solid fa-basket-shopping cursor-pointer text-white text-[20px]"></i>
            ) : (
              ""
            )}
          </Link>

          <i className="fa-solid fa-bell cursor-pointer text-white text-[20px]"></i>

          <Link to="/Register">
            <button
              className={
                user
                  ? `hidden`
                  : `border border-[#F1C74E] rounded-[10px] p-1 text-center font-medium hover:bg-[#F1C74E] text-white transition-all duration-300 cursor-pointer`
              }
            >
              Sign Up
            </button>
          </Link>

          {user && (
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
              alt="dont work"
              className="rounded-full w-[30px] bg-white cursor-pointer"
              onClick={() => {
                if (user.status === "Admin") {
                  navigate("/Admin");
                } else {
                  navigate("/UserPage");
                }
              }}
            />
          )}

          <div className="md:flex md:flex-col hidden">
            <span className="text-white font-bold pr-2">{user?.name}</span>
            <span className="text-white font-semibold pr-2 opacity-80">
              {user?.status}
            </span>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
