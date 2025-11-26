import CartCard from "../../Small Components/CartCard";
import { useContext, useState } from "react";
import { UserContext } from "../../../FullPage";
function Left() {
  const { active, setActive } = useContext(UserContext);
  return (
    <div className="border border-[#0000001A] rounded-[20px] px-[24px] py-[20px] flex-7 flex flex-col items-start justify-start gap-10 mt-5">
      {active ? <CartCard /> : <p className="font-bold text-2xl">Cart is Empty!</p>}
    </div>
  );
}
export default Left;
