import { useState } from "react";

function Mood() {

  const [inp, setInp] = useState("")
  const [mood, setMood] = useState("")

  function handleChange(e){
    setInp(e.target.value.toLowerCase())
  }
 
  function handleSubmit(e){
    e.preventDefault()
    setInp("")

    if(inp === "happy"){
      setMood(`Your Mood: 😀`)
    } else if (inp === "sad") {
      setMood(`Your Mood: 🙁`)
    } else if (inp === "scared") {
      setMood(`Your Mood: 😰`)
    } else if (inp === "angry"){
      setMood(`Your Mood: 😡`)
    } else {
      setMood('Your Mood: Unknown 🤷‍♂️')
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="w-[400px] h-[200px] bg-gray-300 rounded border-black border-2">
        <input type="text" value={inp} onChange={handleChange} className="border-2 border-black rounded mt-7 ml-14 mr-2 p-0.5"/>
        <input type="submit" className="border-2 border-black rounded bg-gray-400 text-white p-0.5 hover:bg-gray-900 transition-all duration-400"/>

        <p className="mt-10 text-2xl text-center">{mood}</p>
      </form>
    </>
  )
}

export default Mood