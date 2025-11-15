import Home from "./components/Pages/Home/Home";
import Details from "./components/Pages/Product Details/Details";
import {FullPage} from "./FullPage";
import Cart from "./components/Pages/Cart/Cart";
import CardTable from "./components/Pages/Filtering/CardTable";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Filtering from "./components/Pages/Filtering/Filtering";
function App() {
  return (
    <>
      <BrowserRouter>

        <Routes>

          <Route path="/" element={<FullPage />}>
            <Route index element={<Home />}></Route>
            <Route path="DetailPage" element={<Details />}></Route>
            <Route path="Cart" element={<Cart />}></Route>
            <Route path="Filter" element={<Filtering />} />
          </Route>

        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
