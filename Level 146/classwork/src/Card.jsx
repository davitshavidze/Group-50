
import "./card.css"

function Card(props) {
  return (
      <div className="card">
        <img src={props.img} alt="Dont work" />
        <h1>{props.title}</h1>
        <button>click to buy</button>
      </div>
  )
}

export default Card