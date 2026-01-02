import SmallCard from "../../Small Components/smallCard";
function Suggest() {
  return (
    <section className="w-full min-h-[70vh] flex flex-col items-center px-6">
      <h2 className="text-center text-3xl md:text-6xl font-semibold mt-10">
        How You Can Order
      </h2>

      <div className="w-full max-w-8xl flex flex-col md:flex-row flex-wrap justify-center items-center gap-8 mt-3">
        <SmallCard
          title="Select Food!"
          text="Selecting the type of food you want to order"
          img="https://image.shutterstock.com/image-vector/select-all-icon-isolated-sign-250nw-1604345803.jpg"
        />
        <SmallCard
          title="Customization"
          text="You can order online by adding items to your virtual cart and providing your contact"
          img="https://static.vecteezy.com/system/resources/previews/045/838/553/non_2x/customization-icon-editable-stroke-linear-style-sign-for-use-web-design-logo-symbol-illustration-vector.jpg"
        />
        <SmallCard
          title="Placement"
          text="Specify additional ingredients, modifications, or any specific preferences you may have"
          img="./image_3.png"
        />
        <SmallCard
          title="Delivery / Pickup"
          text="You will receive a confirmation message or email with delivery or pickup details"
          img="./image_4.png"
        />
      </div>
    </section>
  );
}

export default Suggest;
