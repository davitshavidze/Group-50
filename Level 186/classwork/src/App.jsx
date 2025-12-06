import { sortBy } from "lodash";
import { useState, useMemo } from "react";
function App() {
  const [count, setCount] = useState(1);
  const [result, setResult] = useState(1);

  const factorial = useMemo(() => {
    console.log("rendered");
    let res = 1;

    for (let i = 1; i <= count; i++) {
      res *= i;
    }

    return res;
  }, [count]);


  return (
    <>
      <p>Count: {count}</p>

      <button onClick={() => setCount((prev) => prev + 1)}>
        Increment
      </button>

      <p>Calculation Result: {factorial}</p>

      <p>Count 2: {result}</p>

      <button onClick={() => setResult((prev) => prev + 1)}>
        Increment
      </button>
    </>
  );
}

export default App;

// გააკეთეთ 2 ქაუნთერ ფუნქცია.
// 1  შეეძლოს მხოლოდ COUNT  მნიშვნელობის გაზრდა,
// 2 ფუნქციას შეეძლოს მხოლოდ RESULT მნიშვნელობის გაზრდა
// ერთ-ერთის გაზრდის დროს მეორე არ დარენდერდეს, მხოლოდ ერთი.
// გამოიყენეთ useMemo
