
import "./App.css"

function DrawRec(props) {

  const myStyle = {
    width: props.width,
    height: props.height,
    backgroundColor: props.color
  }

  return (
    <div style={myStyle} id="another">

    </div>
  )
}

export default DrawRec