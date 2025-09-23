import { useState } from "react";

function AgeChekcer() {
  const [inp, setInp] = useState("");
  const [age, setAge] = useState("Undefined");

  function handleChange(e) {
    setInp(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setAge(inp);
  }

  function handleReset(){
    setInp("");
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="w-[400px] h-[200px] bg-gray-300 rounded border-black  border-2">
        <label className="ml-7 text-[20px]">Enter your age: </label>
        <input type="text" onChange={handleChange} value={inp} className="border-black rounded border-2 mt-5"/>
        <br />
        <input type="submit" className="ml-34.5 mt-5 border-2 border-black rounded text-white p-0.5 bg-gray-400 hover:bg-gray-900 transition-all duration-400" />
        <button onClick={handleReset} className="m-2 border-2 border-black rounded text-white p-0.5 bg-gray-400 hover:bg-gray-900 transition-all duration-400">Reset</button>

        <h1 className={`${age >= 18 ? "bg-green-500 transition-all duration-500" : "bg-red-600 transition-all duration-500" } text-center text-2xl mt-2 w-50 rounded border-black border-2 ml-25`}>{age > 18 ? `You Are Allowed` : 'You Are Not Allowed'}</h1>
      </form>
    </>
  );
}

export default AgeChekcer;
