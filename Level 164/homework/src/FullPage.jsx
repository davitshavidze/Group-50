import { Outlet } from "react-router-dom";
import { useContext, createContext, useState, useEffect } from "react";
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
    getData()
  }, []);

  return (
    <>
      <UserContext.Provider value={{ chosenCard, setChosenCard, data}}>
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
