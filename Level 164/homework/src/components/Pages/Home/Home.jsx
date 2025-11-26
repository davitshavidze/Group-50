import Hero from "./Hero";
import Arrivals from "./Arrivals";
import Customers from "./Customers";
import DressStyle from "./DressStyle";
import Brands from "./Brands";
import Footer from "../../Big Components/Footer";
function Home() {
  return (
    <>
      <Hero />
      <Brands />
      <Arrivals title="NEW ARRIVALS" />
      <Arrivals title="TOP SELLING" />
      <DressStyle />
      {/* <Customers /> */}
    </>
  );
}

export default Home;
