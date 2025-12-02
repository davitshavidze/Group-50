import React, { useCallback, useState, useEffect } from "react"
import Child from "./Child"
function App() {

  const [count, setCount] = useState(0)

  const handleIncrease = useCallback(() => {
    setCount(prev => prev + 1)
  }, [])

  console.log('Parent Render')

  return (
    <>
      <div>
        <h1>count: {count}</h1>

        <Child increase={handleIncrease} />
      </div>
    </>
  )
}

export default App
