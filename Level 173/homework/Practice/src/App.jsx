import { useState, useContext, createContext } from "react";
import ComponentA from "./Components/ComponentA";
import ComponentB from "./Components/ComponentB";
import ComponentC from "./Components/ComponentC"
const UserContext = createContext()
function App() {
  const [num, setNum] = useState(0);

  function increase(){
    setNum(num + 1);
  }

  function decrease(){
    setNum(num - 1);
  }
  return (
    <>  
      <UserContext.Provider value={{num, setNum}}>
        <p>{num}</p>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </UserContext.Provider>
    </>
  )
}

export {App, UserContext}


