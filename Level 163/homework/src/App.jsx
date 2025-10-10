import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <nav className="w-full">
        <div className="w-full flex justify-center items-center gap-[50px] h-[50px] bg-gray-900 text-white">
          <Link
            to="/"
            className="font-bold hover:scale-[1.1] transition-all duration-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="font-bold hover:scale-[1.1] transition-all duration-300"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="font-bold hover:scale-[1.1] transition-all duration-300"
          >
            Contact
          </Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <footer>
        <div className="bg-gray-900 w-full h-[50px] absolute bottom-0 flex justify-end text-white items-center">
          <p className="relative right-[1425px]">Find out contacts here!</p>
          <img
            width="24"
            height="24"
            src="https://img.icons8.com/material-outlined/24/contact-card.png"
            alt="contact-card"
            className="relative right-[1410px] bg-white rounded-2xl p-0.5"
          />
          <img
            width="48"
            height="48"
            src="https://img.icons8.com/color/48/facebook.png"
            alt="facebook"
          />
          <img
            width="50"
            height="64"
            src="https://img.icons8.com/nolan/64/twitterx.png"
            alt="twitterx"
          />
          <img
            width="48"
            height="48"
            src="https://img.icons8.com/fluency/48/instagram-new.png"
            alt="instagram-new"
          />
          <img
            width="48"
            height="48"
            src="https://img.icons8.com/fluency/48/linkedin.png"
            alt="linkedin"
          />
        </div>
      </footer>
    </BrowserRouter>
  );
}

export default App;
