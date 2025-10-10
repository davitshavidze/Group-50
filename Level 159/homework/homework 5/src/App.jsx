// 5) შექმენით ორი state: count და isActive (boolean)
// ერთი ღილაკით გაზარდეთ count, მეორე ღილაკით შეცვალეთ isActive
// შექმენით useEffect, რომელიც რეაგირებს ორივე state-ზე
// თუ count > 10 და isActive === true -> console.log("High activity")
// თუ count <= 10 და isActive === false -> console.log("Low activity")
// სხვა შემთხვევაში -> console.log("Normal state")

import { useState, useEffect } from "react"
function App() {
  let [count, setCount] = useState(0)
  let [active, setActive] = useState(false)

  function handleIncrease(){
    setCount(count + 1)
    console.log(count)
  }

  function handleActive(){
    setActive(!active)
  }

  useEffect(() => {
    if(count > 10 && active === true){
      console.log("High activity")
    } else if (count <= 10 && active === false) {
      console.log("Low activity")
    } else {
      console.log("Normal state")
    }
  }, [count, active])

  return (
    <>
      <button onClick={handleIncrease} >Increase</button>
      <button onClick={handleActive} >Active</button>
    </>
  )
}

export default App
