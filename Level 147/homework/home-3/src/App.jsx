import Card from "./Card"
function App() {

  return (
    <>
      <Card />
      <Card topMargin={true} marginAmount={50}>
        <p>This is me davit!</p>
      </Card>
    </>
  )
}

export default App
