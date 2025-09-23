import { useState } from "react";

function CharCounter() {
  const [inp, setInp] = useState("");
  const [sum, setSum] = useState("");

  function handleChange(e) {
    setInp(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSum(inp.length);

    if(inp.length >= 100){
      setSum(`You Reached Character Limit!`)
    }
  }

  function handleReset() {
    setInp("");
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className={`bg-gray-400 w-[400px] h-[150px] text-center border-black rounded border-2`}
      >
        <textarea
          value={inp}
          onChange={handleChange}
          className={`mt-5 border-black border-1 rounded text-center`}
        ></textarea>
        <input
          type="submit"
          className="bg-gray-400 text-white p-0.5 border-1 relative bottom-4 border-black rounded hover:bg-gray-900 tranisition-all duration-400 ml-2"
        />
        <button
          className="bg-gray-400 text-white p-0.5 border-1 relative bottom-4 border-black rounded hover:bg-gray-900 tranisition-all duration-400 ml-2"
          onClick={handleReset}
        >
          Reset
        </button>

        <h1>Total Characters: {sum}</h1>
      </form>
    </>
  );
}

export default CharCounter;
