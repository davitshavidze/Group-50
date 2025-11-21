// 1) შექმენით ინფუთი რომელშიც ინფორმაციის შეტანის დროს ეგ ინფორმაცია გამოჩნდება სხვა პარაგრაფში, პლიუს ერთი ქაუნთერიც გააკეთეთ გვერძე, ორივეში გამოიყენეთ useRef

import { useState, useRef, useEffect } from "react";
function App() {
  const textRef = useRef("");
  const countRef = useRef(0);

  function handleChange(e) {
    textRef.current.textContent = `Input Value: ${e.target.value}`;

    console.log(textRef.current);
  }

  return (
    <>
      <main>
        <input type="text" onChange={handleChange} />
        <p ref={textRef}>Input Value: {textRef.current}</p>

        <p ref={countRef}>{countRef.current}</p>
        <button
          onClick={() => {
            countRef.current.textContent =
              Number(countRef.current.textContent) + 1;
          }}
        >
          Increase
        </button>

        <button
          onClick={() => {
            countRef.current.textContent =
              Number(countRef.current.textContent) - 1;
          }}
        >
          Decrease
        </button>
      </main>
    </>
  );
}

export default App;
