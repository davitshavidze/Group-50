import Home from "./components/Pages/Home/Home";
import Details from "./components/Pages/Product Details/Details";
import FullPage from "./FullPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>

        <Routes>

          <Route path="/" element={<FullPage />}>
            <Route index element={<Home />}></Route>
            <Route path="DetailPage" element={<Details />}></Route>
            {/* <Route path="filter" ></Route>
            <Route path="cart" ></Route> */}
          </Route>

        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
