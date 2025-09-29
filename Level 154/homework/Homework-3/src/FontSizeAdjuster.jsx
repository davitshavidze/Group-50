// 3) შექმენით FontSizeAdjuster კომპონენტი.
// გამოაჩინეთ ერთი input, submit და p ტეგი რაიმე ტექსტით
// --> input ტეგში მომხმარებელმა უნდა შემოიყვანოს რიცხბი 10 დან 100 ჩათვლით
// --> თქვენ კი p ტეგს უნდა შეუცვალოთ fontSize
// --> თუ მომხმარებლის მიერ შემოყვანილი რიხვი არ არის 10-100 შუალედში მაშინ ამოაგდეთ 1 დავალების შესაბამისი Toast 
// Bonus დაამატეთ reset ღილაკი

import { useState } from "react"

function FontSizeAdjuster() {
  const [inp, setInp] = useState("")
  const [font, setFont] = useState("")

  function handleSubmit(e){
    e.preventDefault()
    setFont(inp)
    setInp("")
  }

  return (
    <>
        <form onSubmit={handleSubmit} className="w-[400px] h-[150px] bg-gray-400 rounded-2xl flex flex-col justify-center items-center" >
          <input type="text" value={inp} onChange={(e) => {setInp(e.target.value)}} className="pt-1 rounded border-1 border-black" />
          <input type="submit" className="mt-2 rounded bg-gray-500 text-white p-0.5 hover:bg-gray-900 transiiton-all duration-400" />

          <p style={{fontSize: font}}>Hello world!</p>
        </form>
    </>
  )
}

export default FontSizeAdjuster