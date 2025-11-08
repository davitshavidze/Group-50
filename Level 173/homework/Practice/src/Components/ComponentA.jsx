import { useState, useContext } from "react";
import { UserContext } from "../App";
function ComponentA() {
  const { num, setNum } = useContext(UserContext);

  function get50(){
    setNum(num + 50)
  }
  return (
    <>
      <button onClick={get50}>Only in Component A +50</button>
    </>
  );
}

export default ComponentA;
