import { useState } from "react";
import Card from "./Card";

function App() {
  return (
    <>
      <div id="container" >
        <Card
          img="https://upload.wikimedia.org/wikipedia/commons/8/8e/BMW_M5_Competition_IMG_0799.jpg"
          title="BMW M5 F90"
        />
        <Card img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3Vm6OnlXIni2hItHqBuie4MRoFmMkL75IYA&s" title="M-Benz CLS 63" />

        <Card img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQetVfgprEW6kmSDJIGdchKNJEV7hCH1ACrCe5ubSTMa54GtMavOk7Ameceq_3AZrrPc2M&usqp=CAU" title="Audi Q7" />

        <Card img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3cmFP-emLkiblH1EiIn6lMG2aOl0zSJsAgA&s" title="Ferari F50" />
      </div>
    </>
  );
}

export default App;
