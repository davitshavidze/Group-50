import { useRef } from "react";

function App() {
  const color = useRef("#000");
  const inpText = useRef("");
  const visible = useRef(true);


  function handleChange() {
    const letters = "0123456789ABCDEF";
    let color_1 = "#";
    for (let i = 0; i < 6; i++) {
      color_1 += letters[Math.floor(Math.random() * 16)];
    }

    color.current.style.color = color_1;
  }

  function handleVisible() {
    visible.current = !visible.current;
    console.log(visible.current)
  }

  return (
    <>
      <p ref={color} className="text-2xl font-medium m-2">
        Click on button to change the color!
      </p>
      <button
        onClick={handleChange}
        className="font-medium border-1 rounded p-1 text-white bg-black hover:text-black hover:bg-white transition-all duration-300 m-2"
      >
        Click me!
      </button>

      <br />
      <input type="text" ref={inpText} className="border-2 rounded m-2 p-0.5" />
      <button
        className="font-medium border-1 rounded p-1 text-white bg-black hover:text-black hover:bg-white transition-all duration-300"
        onClick={() => {
          console.log(inpText.current.value);
          inpText.current.value = "";
        }}
      >
        Click me!
      </button>

      <br />
      <p className={visible.current ? `text-2xl font-medium m-2` : "hidden"} ref={visible}>
        Hello, its homework!
      </p>
      <button className="font-medium border-1 rounded p-1 text-white bg-black hover:text-black hover:bg-white transition-all duration-300 m-2" onClick={handleVisible}>
        Click to hide
      </button>
    </>
  );
}

export default App;

// 1) შექმენით button და ტექსტი. როცა ღილაკს დააწვები, ტექსტის ფერი შეიცვალოს.
// გამოიყენეთ useRef-ი ტექსტის ელემენტზე წვდომისთვის.

// 2) შექმენით input ველი და button. როცა  button დააჭერ, input-ის მნიშვნელობა console-ში დაიბეჭდოს.
// გამოიყენეთ useRef input-ის წვდომისთვის

// 3) შექმენით ტექსტი და button. ღილაკზე დაჭერისას ტექსტი გაჩნდეს და გაქრეს. გამოიყენეთ useRef
