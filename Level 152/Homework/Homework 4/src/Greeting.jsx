import React, { useState } from "react";

function Greeting() {

  const [input, setInput] = useState("")
  const [name, setName] = useState("Undefined")

  function handleChange(e){
    setInput(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault()
    setName(input)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name" className="text-2xl ml-2" >Enter your name:</label>
        <input type="text" value={input} id="name" onChange={handleChange} className="border-black border-2 rounded ml-2"/>
        <input type="submit" className="border-black text-white bg-gray-400 border-2 rounded ml-2 hover:bg-gray-900 transition-all duration-400"/>
      </form> 

      <h1 className="ml-2 mt-5 text-2xl">Hello, {name}</h1>
    </>
  )
}

export default Greeting