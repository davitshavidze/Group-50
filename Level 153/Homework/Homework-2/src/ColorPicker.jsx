
import { useState } from "react"

function ColorPicker() {
  const [inp, setInp] = useState("")
  const [color, setColor] = useState("")

  function handleChange(e){
    setInp(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault()
    setColor(inp)
  }

  function handleColor(e){
    setColor(e.target.style.backgroundColor = color)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Choose your color: </label>
        <input type="color" value={inp} onChange={handleChange}/>
        <input type="submit" className="border-2 border-black p-0.5 rounded bg-gray-400 text-white hover:bg-gray-900 transition-all duration-400"/>

        <div className="border-2 rounded border-black w-[100px] h-[50px] flex justify-center items-center" style={{backgroundColor: {color}}}>
          This is DIV
        </div>
      </form>
    </>
  )
}

export default ColorPicker