import Hero from "./Hero";
import Suggest from "./Suggest";
import Offer from "./Offer";
import Quality from "./Quality";
import Discover from "./Discover";
import FeedBack from "./FeedBack";
import Advertise from "./Advertise";
function Home() {
  return (
    <>
      <Hero />
      <Advertise />
      <Suggest />
      <Offer />
      <Quality />
      <FeedBack />
      <Discover />
    </>
  )
}

export default Home