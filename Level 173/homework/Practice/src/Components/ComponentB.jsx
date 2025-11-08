import {useState, useContext} from 'react'
import { UserContext } from '../App'
function ComponentB() {
  const {num, setNum} = useContext(UserContext)

  function get100(){
    setNum(num + 100)
  }
  return (
    <>
      <button onClick={get100}>Only in Component B +100</button>
    </>
  )
}
export default ComponentB