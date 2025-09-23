import { use } from "react";
import { useState } from "react";

function App() {
  let [counter, useCounter] = useState(0);

  function increase() {
    useCounter(counter + 1);
  }

  function decrease() {
    useCounter(counter - 1);
  }

  function reset() {
    useCounter(counter - counter);
  }

  return (
    <>
      <div
        className={`w-[350px] h-[300px] bg-gray-100 flex flex-col gap-1 p-0.5 border-2 border-black rounded ${
          counter > 0
            ? "text-green-500"
            : counter === 0
            ? "text-black"
            : "text-red-600"
        }`}
      >
        <p className="text-8xl text-center relative top-5" id="par">
          {counter}
        </p>
        <button
          className="bg-gray-400 rounded text-center p-1 border-black border-1 m-1 mt-15 cursor-pointer hover:bg-white text-black transiiton-all duration-500"
          onClick={increase}
        >
          Increase
        </button>
        <button
          className="bg-gray-400 rounded text-center p-1 border-black border-1 m-1 cursor-pointer hover:bg-white text-black transiiton-all duration-500"
          onClick={decrease}
        >
          Decrease
        </button>
        <button
          className="bg-gray-400 rounded text-center p-1 border-black border-1 m-1 cursor-pointer hover:bg-white text-black transiiton-all duration-500"
          onClick={reset}
        >
          Reset
        </button>
      </div>
    </>
  );
}

export default App;
