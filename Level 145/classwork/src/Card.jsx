
import "./card.css"
import img from "../src/imgs/phone.png"

function Card() {
  return (
    <div className='iphoneDiv'>
      <img src={img} alt="Dont work!" />
      <p>Iphone 16 Pro Max</p>
    </div>
  )
}
export default Card