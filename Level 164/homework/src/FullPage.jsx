import { Outlet } from "react-router-dom";
import { createContext, useState, useEffect } from "react";
import Header from "./components/Big Components/Header";
import Footer from "./components/Big Components/Footer";

const UserContext = createContext();

function FullPage() {
  const [chosenCard, setChosenCard] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch("/clotheData.json");
      const responseData = await response.json();
      setData(await responseData);
    }
    getData();
  }, []);

  const [ready, setReady] = useState(data);
  const [sum, setSum] = useState(0);
  const [active, setActive] = useState(true);

  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem("cart");
      if (!saved) return [];
      const parsed = JSON.parse(saved);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <>
      <UserContext.Provider
        value={{ chosenCard, setChosenCard, data, ready, setReady, sum, setSum, active, setActive, cart, setCart }}
      >
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </UserContext.Provider>
    </>
  );
}

export { FullPage, UserContext };
