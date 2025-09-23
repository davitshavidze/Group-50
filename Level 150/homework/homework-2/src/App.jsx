import { useState } from "react"

function App() {

  let [text, useCase] = useState("hello this is text!")

  return (
    <>
      <p>{text}</p>
      <button onClick={() => {
        useCase(text.toUpperCase() === text ? text.toLowerCase() : text.toUpperCase())
      }}>Click Me!</button>
    </>
  )
}

export default App
