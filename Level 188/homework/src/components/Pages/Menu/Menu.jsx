import { useEffect, useState } from "react";
function Menu() {
  const [data, setData] = useState([]);
  const user = JSON.parse(localStorage.getItem("Found"));
  const allUsers = JSON.parse(localStorage.getItem("userData"));

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch("/public/products.json");
        const resData = await res.json();
        setData(await resData);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);

  function addCart(el){
    let newCart = user.cart.push(el);
    let updated = {...user, newCart}

    for (let i = 0; i < allUsers.length; i++) {
      if (user.email === allUsers[i].email){
        allUsers[i].cart = user.cart;
      }
    }

    console.log(user.cart)

    localStorage.setItem("Found", JSON.stringify(updated));
    localStorage.setItem("userData", JSON.stringify(allUsers));
  }

  return (
    <section className="w-full min-h-screen bg-gray-100 py-10 px-5 flex justify-center items-center">
      {data.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-15">
          {data.map((el, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition hover:scale-102 hover:shadow-2xl duration-300 cursor-pointer"
            >
              <div className="w-full h-48 bg-gray-200 flex items-center justify-center overflow-hidden">
                <img
                  src={el.image}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-5">
                <h1 className="text-lg font-semibold text-gray-800 mb-2">
                  {el.name}
                </h1>
                <p className="text-sm text-gray-500 mb-2">{el.category}</p>
                <p className="text-blue-600 font-bold text-lg">${el.price}</p>

                <button className="bg-gray-900 text-white cursor-pointer transition-all duration-300 hover:bg-white hover:text-gray-900 p-2 rounded-2xl border mt-2" onClick={() => {addCart(el)}}>Add to cart</button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-xl">Loading...</p>
      )}
    </section>
  );
}

export default Menu;
