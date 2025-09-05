
import "./App.css"

function Product(props) {
  return (
    <div id="card">
      <h1>Product: {props.prod}</h1>
      <p>Price: {props.price}</p>
      <img src={props.img} alt="dont work" />
    </div>
  )
}

export default Product