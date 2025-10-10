import { useState, useEffect } from "react";
function App() {
  let [inp, setInp] = useState("");
  let [inp2, setInp2] = useState("");
  let [age, setAge] = useState("");
  let [name, setName] = useState("");

  useEffect(() => {
    if(age > 18){
      console.log("Correct Age!")
    } else {
      console.log("Incorrect Age!")
    }

    if(name.length > 12){
      console.log("Correct name!")
    } else {
      console.log("Incorrect Name!")
    }
  }, [age, name])

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setName(inp);
          setAge(inp2);

          setInp("")
          setInp2("")
        }}
      >
        <input
          type="text"
          value={inp}
          onChange={(e) => {
            setInp(e.target.value);
          }}
        />
        <input
          type="text"
          value={inp2}
          onChange={(e) => {
            setInp2(e.target.value);
          }}
        />
        <button type="submit">submit</button>
      </form>
    </>
  );
}

export default App;
