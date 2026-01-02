import { Outlet } from "react-router-dom";
import Header from "./components/Big Components/Header";
import Footer from "./components/Big Components/Footer";
import SnowFall from "react-snowfall";
function FullPage() {
  return (
    <>
      <SnowFall color="#82D3D9" />
      <SnowFall color="#82D3D9" />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default FullPage;
