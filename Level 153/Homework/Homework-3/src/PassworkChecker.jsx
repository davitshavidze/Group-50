import { useState } from "react";

function PassworkChecker() {
  let [isClicked, setClicked] = useState(false)

  function handleSubmit(e){
    e.preventDefault()

    setClicked(!isClicked)
  }
  return (
    <>
      
      <form onSubmit={handleSubmit} className="w-[400px] h-[400px] flex justify-center items-center bg-gray-200 rounded border-2 border-black">
        <input type={isClicked ? "password" : "text"} className="border-2 border-black rounded ml-5 p-0.5" />
        <input type="submit" className="border-black border-2 rounded p-0.5 ml-2 bg-gray-400 text-white hover:bg-gray-900 transition-all duration-400" />
      </form>
    </>
  )
}

export default PassworkChecker;
