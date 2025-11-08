import Shop from "./Shop";
import Rating from "./Rating";
import Arrivals from "../Home/Arrivals";
import { UserContext } from "../../../FullPage";
import { useContext } from "react";
function Details() {
  return (
    <>
      <Shop />
      <Rating />
      <Arrivals title="YOU MIGHT ALSO LIKE" />
    </>
  );
}

export default Details;
