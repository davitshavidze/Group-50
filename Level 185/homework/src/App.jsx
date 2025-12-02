import React, { useState, useCallback } from "react";
import Child from "./Child";

function App() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  console.log("Parent Render");

  const handleCalculate = useCallback(() => {
    return Number(a) + Number(b);
  }, [a, b]);

  return (
    <>
      <div className="w-full h-screen flex flex-col justify-center items-center bg-[#242424] text-white">
        <h1 className="text-4xl m-2">Calculate numbers</h1>

        <div className="flex flex-col gap-2">
          <input
            type="number"
            placeholder="0"
            onChange={(e) => setA(e.target.value)}
            className="p-2 rounded-4xl border"
          />

          <input
            type="number"
            placeholder="0"
            onChange={(e) => setB(e.target.value)}
            className="p-2 rounded-4xl focus:outline-0 border"
          />
        </div>

        <Child calculate={handleCalculate} />
      </div>
    </>
  );
}

export default App;
