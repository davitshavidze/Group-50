// 4) შექმენით ორი state: email და password
// შექმენით ორი input -> ერთი მეილის მეორე პაროლის
// შექმენით useEffect, რომელიც ორიცე state ს თვალს ადევნებს
// თუ email შეიცავს "@" და password.length >= 6 -> console.log("Valid Credentials")
// სხვა შემთხვევაში -> console.log("Invalid email or password")


import { useState, useEffect } from "react";

function App() {
  let [inp, setInp] = useState("")
  let [inp2, setInp2] = useState("")
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  useEffect(() => {
    if (email.includes("@") && password.length >= 6) {
      console.log("Valid Credentials");
    } else {
      console.log("Invalid email or password");
    }
  }, [email, password]);

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setEmail(inp)
          setPassword(inp2)

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
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;
