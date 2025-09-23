import { useState } from "react";

function Description() {
  const [inp, setInp] = useState("");
  const [desc, setDesc] = useState("No Description");

  function handleChange(e) {
    setInp(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setInp("");

    if(inp === ""){
      setDesc("Empty! Write description.")
    } else {
      setDesc(inp)
    }
  }


  return (
    <>
      <form onSubmit={handleSubmit} className="border-2 border-black h-[185px] w-[400px] rounded">
        <textarea
          value={inp}
          onChange={handleChange}
          className="border-2 rounded m-5 relative top-10 left-20 text-sm p-0.5"
        ></textarea>
        <input
          type="submit"
          className="rounded bg-gray-400 text-white border-2 border-black p-0.5 hover:bg-gray-900 transition-all duration-400 relative top-1 left-17"
        />

        <p className="m-5 relative">{`Your description is: ${desc}`}</p>
      </form>
    </>
  );
}

export default Description;
