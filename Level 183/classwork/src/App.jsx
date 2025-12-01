import { useReducer } from "react"

function App() {

  function reducer(state, action){
    if(action.type === 'increment'){
      return {count: state.count + 1}
    }

    if(action.type === 'decrement'){
      return {count: state.count - 1}
    }

    if(action.type === 'zero'){
      return {count: state.count = 0}
    }

    if(action.type === 'double'){
      return {count: state.count * 2}
    }
  }

  const [state, dispatch] = useReducer(reducer, {count: 0})

  return (
    <>
      <div>
        <p>{state.count}</p>

        <button className="p-2 border-2 rounded-4xl bg-gray-900 text-white hover:text-gray-900 hover:bg-white transition cursor-pointer m-2" onClick={() => {dispatch({type: "increment"})}}>Increment</button>
        <button className="p-2 border-2 rounded-4xl bg-gray-900 text-white hover:text-gray-900 hover:bg-white transition cursor-pointer m-2" onClick={() => {dispatch({type: "decrement"})}}>Decrement</button>
        <button className="p-2 border-2 rounded-4xl bg-gray-900 text-white hover:text-gray-900 hover:bg-white transition cursor-pointer m-2" onClick={() => {dispatch({type: "zero"})}}>Set Zero</button>
        <button className="p-2 border-2 rounded-4xl bg-gray-900 text-white hover:text-gray-900 hover:bg-white transition cursor-pointer m-2" onClick={() => {dispatch({type: "double"})}}>value x2</button>
      </div>
    </>
  )
}

export default App
