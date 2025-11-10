import {useState, useEffect, useContext} from 'react'
import Card from '../../Small Components/Card'
import { UserContext } from '../../../FullPage'


function CardTable() {
  const data = useContext(UserContext)
  const [filterData, setFilterData] = useState(data)



  return (
    <div>CardTable</div>
  )
}

export default CardTable