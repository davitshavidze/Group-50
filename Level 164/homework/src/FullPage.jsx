import { Outlet } from "react-router-dom";
import Header from "./components/Big Components/Header";
import Footer from "./components/Big Components/Footer";
function FullPage() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default FullPage;
