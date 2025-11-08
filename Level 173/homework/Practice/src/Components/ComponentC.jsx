import {useContext} from 'react'
import { UserContext } from '../App'
function ComponentC() {
  const {num, setNum} = useContext(UserContext)

  function get1000(){
    setNum(num + 1000)
  }
  return (
    <>
      <button onClick={get1000}>Only in Component C +1000</button>
    </>
  )
}
export default ComponentC