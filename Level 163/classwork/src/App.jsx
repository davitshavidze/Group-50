import { useState } from "react"
import About from "./components/About"
import Category from "./components/Category"
import Contact from "./components/Contact"
import Home from "./components/Home"

function App() {
  const [active, setActive] = useState("")
  return (
    <>
      <div className="h-screen w-full flex flex-col items-center justify-center text-white text-[32px] bg-gray-900">
        <div className="w-full flex flex-col justify-center items-center">
          <ul className="w-full flex justify-center items-center gap-[20px]" >
            <li className="border-2 border-black rounded-2xl p-2 hover:bg-white hover:text-black transition-all duration-300" onClick={() => setActive("about")}>About</li>
            <li className="border-2 border-black rounded-2xl p-2 hover:text-black hover:bg-white transition-all duration-300" onClick={() => setActive("category")}>Category</li>
            <li className="border-2 border-black rounded-2xl p-2 hover:text-black hover:bg-white transition-all duration-300" onClick={() => setActive("contact")}>Contact</li>
            <li className="border-2 border-black rounded-2xl p-2 hover:text-black hover:bg-white transition-all duration-300" onClick={() => setActive("home")}>Home</li>
          </ul>
        </div>


        <div className="m-[50px]">
          {active === "about" ? <About /> : null}
          {active === "category" ? <Category /> : null}
          {active === "contact" ? <Contact /> : null}
          {active === "home" ? <Home /> : null}
        </div>
      </div>
    </>
  )
}

export default App
