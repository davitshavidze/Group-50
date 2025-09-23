import { useState } from "react";

function MyForm() {
  const [input, setInput] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const [input4, setInput4] = useState("");

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [country, setCountry] = useState("");
  const [favCar, setFavCar] = useState("");

  function handleChange(e) {
    setInput(e.target.value);
    console.log(e.target.value);
  }

  function handleChange2(e) {
    setInput2(e.target.value);
    console.log(e.target.value);
  }

  function handleChange3(e) {
    setInput3(e.target.value);
    console.log(e.target.value);
  }

  function handleChange4(e) {
    setInput4(e.target.value);
    console.log(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Clicked");
    setName(input)
    setAge(input2)
    setCountry(input3)
    setFavCar(input4)
    setInput("")
    setInput2("")
    setInput3("")
    setInput4("")
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name" className="text-2xl ml-2">
          Enter your name:
        </label>
        <input
          type="text"
          id="name"
          className="m-2 border-black rounded border-2"
          value={input}
          onChange={handleChange}
        />
        <br />

        <label htmlFor="age" className="text-2xl ml-2">
          Enter your age:{" "}
        </label>
        <input
          type="text"
          id="age"
          className="m-2 border-black rounded border-2"
          value={input2}
          onChange={handleChange2}
        />
        <br />

        <label htmlFor="country" className="text-2xl ml-2">
          Enter your country:
        </label>
        <input
          type="text"
          id="country"
          className="m-2 border-black rounded border-2"
          value={input3}
          onChange={handleChange3}
        />
        <br />

        <label htmlFor="favCar" className="text-2xl ml-2">
          Enter your favorite car:{" "}
        </label>
        <input
          type="text"
          id="favCar"
          className="m-2 border-black rounded border-2"
          value={input4}
          onChange={handleChange4}
        />

        <input type="submit" className="bg-gray-400 text-white border-black border-2 rounded p-0.5 hover:bg-gray-900 transition-all duration-400"/>
        <br />
        <br />
      </form>

      <h1 className="m-2 text-2xl text-red-400">Name: {name}</h1>
      <h1 className="m-2 text-2xl text-yellow-400">Age: {age}</h1>
      <h1 className="m-2 text-2xl text-green-400">Country: {country}</h1>
      <h1 className="m-2 text-2xl text-gray-400">Favourite car: {favCar}</h1>
    </>
  );
}

export default MyForm;
