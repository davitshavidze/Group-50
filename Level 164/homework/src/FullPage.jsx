import { Outlet } from "react-router-dom";
import { useContext, createContext, useState } from "react";
import Header from "./components/Big Components/Header";
import Footer from "./components/Big Components/Footer";

const UserContext = createContext();

function FullPage() {
  const [chosenCard, setChosenCard] = useState("");
  return (
    <>
      <UserContext.Provider value={{ chosenCard, setChosenCard }}>
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
