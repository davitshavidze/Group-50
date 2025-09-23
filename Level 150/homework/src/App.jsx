
import { useState } from "react"

function App() {

  let[num, useNum] = useState(0)

  function increase(){
    useNum(num * 2)
  }

  return (
    <>
      <p>{num}</p>
      <button onClick={increase}>Click to increase!</button>
    </>
  )
}

export default App
