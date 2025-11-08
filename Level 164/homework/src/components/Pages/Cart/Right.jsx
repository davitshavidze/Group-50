function Right() {
  return (
    <div className="border border-[#0000001A] rounded-[20px] px-[24px] py-[20px] h-[440px] flex-5 flex flex-col gap-5 mt-5">
      <h2 className="text-[20px] font-[700]">Order Summary</h2>

      <div className="flex flex-col gap-5">
        <div className="flex justify-between items-center gap-2">
          <p className="text-black opacity-80">Subtotal</p>
          <p className="font-[700] text-[20px]">$565</p>
        </div>

        <div className="flex justify-between items-center gap-2">
          <p className="text-black opacity-80">Discount </p>
          <p className="text-red-500 font-[700] text-[20px]">-$113</p>
        </div>

        <div className="flex justify-between items-center gap-2">
          <p className="text-black opacity-80">Delivery Fee</p>
          <p className="font-[700] text-[20px]">$15</p>
        </div>

        <div className="w-full bg-[#0000001A] h-[1.5px]"></div>

        <div className="flex justify-between items-center gap-2">
          <p>Total</p>
          <p className="font-[700] text-[24px]">$467</p>
        </div>
      </div>

      <form className="flex gap-4">
        <div className="flex gap-4 bg-[#F0F0F0] rounded-full items-center px-4 py-2 flex-3">
          <img src="./label.png" alt="dont work" className="w-[24px] h-[24px]" />
          <input
            type="text"
            placeholder="Add promo code"
            className="active:border-none hover:border-none focus:border-none focus:outline-0 w-full bg-transparent"
          />
        </div>
        <button className="flex-1 bg-black text-white py-2 rounded-full cursor-pointer">
          Apply
        </button>
      </form>

      <button className="w-full rounded-full py-4 flex items-center gap-5 justify-center bg-black text-white cursor-pointer">
        Go To Checkout
      </button>
    </div>
  );
}
export default Right;
