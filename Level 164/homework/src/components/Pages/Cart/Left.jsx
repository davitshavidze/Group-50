import CartCard from "../../Small Components/CartCard";
import { useContext } from "react";
import { UserContext } from "../../../FullPage";
function Left() {
  const { cart } = useContext(UserContext);
  return (
    <div className="border border-[#0000001A] rounded-[20px] px-6 py-5 flex-7 flex flex-col items-start justify-start gap-10 mt-5">
      {cart.length > 0 ? (
        cart.map((item) => <CartCard key={item.id} itemInfo={item} />)
      ) : (
        <p className="font-bold text-2xl">Cart is Empty!</p>
      )}
    </div>
  );
}

export default Left;
