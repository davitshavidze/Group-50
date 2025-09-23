
function Card({children, topMargin = false, marginAmount = 10}) {
  return (
    <div className="card" style={topMargin == true ? {marginTop: `${marginAmount}` + "px"} : {marginTop: "0px"}}>
      <h1>Hello this is card!</h1>
      {children ? children : "No Elements Found"}
    </div>
  )
}

export default Card