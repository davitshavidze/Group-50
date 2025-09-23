import { useState } from "react";

function App() {
  let [name, setName] = useState("");

  function nameHandler() {
    setName("Davit Shavidze")
  }

  return (
    <>
      <button className="bg-gray-400 text-white border-2 border-black rounded m-2 cursor-pointer" onClick={nameHandler}>Click Me!</button>
      <p className="m-2 text-xl font-[Poppins]">Hello, its me {name}</p>
    </>
  );
}

export default App;
