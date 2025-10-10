
// 6) შექმენით ორი state: temperature (რიცხვი), city (სტრინგი)
// შექმენით ორი input -> ერთში ტემპერატურას შევიყვანთ მეორეში ქალაქის სახელს
// შექმენით useEffect, რომელიც ორიცე state ს თვალს ადევნებს
// თუ temperature > 35 და city.length >= 3 -> console.log("Heat Alert in", city)
// თუ temperature < 5 -> console.log("Cold Alert in", city)
// სხვა შემთხვევაში -> console.log("Weather normal")

import { useState, useEffect } from "react"
function App() {
  let [inp, setInp] = useState("")
  let [inp2, setInp2] = useState("")
  let [temp, setTemp] = useState(0)
  let [city, setCity] = useState("")

  useEffect(() => {
    if(temp > 35 && city.length >= 3){
      console.log("Heat Alert in", city)
    } else if (temp < 5 && city.length >= 3){
      console.log("Cold Alert in", city)
    } else {
      console.log("Weather normal in", city)
    }
  }, [temp, city])

  return (
    <>
      <form onSubmit={(e) => {
        e.preventDefault()

        setTemp(inp2)
        setCity(inp)

        setInp("")
        setInp2("")
      }} >
        <label>Enter city name: </label>
        <input type="text" value={inp} onChange={(e) => {setInp(e.target.value)}} required />
        <br />
        <br />
        <label>Enter temperature: </label>
        <input type="text" value={inp2} onChange={(e) => {setInp2(e.target.value)}} required />
        <button style={{marginLeft: "10px"}} type="submit">Submit</button>
      </form>
    </>
  )
}

export default App
