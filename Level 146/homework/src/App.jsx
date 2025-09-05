import "./App.css";
import Greeting from "./Greeting";
import Product from "./Product";
import DrawRec from "./DrawRec";

function App() {
  return (
    <>
      <Greeting name="Davit" />
      <Greeting name="Gabriel" />
      <Greeting name="Nika" />
      <Greeting name="Shota" />

      <Product prod="Sweet corn" price="10$" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2kGsHhJ-SNOmA50NPN3TPahKKkCXHlGBhOA&s"
      />

      <Product prod="Hot dog" price="5$" img="https://food.fnr.sndimg.com/content/dam/images/food/plus/fullset/2020/06/08/0/FNM_070120-Grilled-Hot-Dogs_s4x3.jpg.rend.hgtvcom.1280.960.suffix/1591625198177.webp" />

      <Product prod="Burger with salsa" price="8.99$" img="https://images.themodernproper.com/production/posts/2016/ClassicCheeseBurger_9.jpg?w=1200&h=1200&q=60&fm=jpg&fit=crop&dm=1749310239&s=463b18fc3bb51dc5d96e866c848527c4" />

      <DrawRec width="400px" height="200px" color="red" />
      <DrawRec width="300px" height="300px" color="blue" />
      <DrawRec width="350px" height="250px" color="indigo" />
    </>
  );
}

export default App;
