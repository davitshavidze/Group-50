import { BrowserRouter, Route, Routes } from "react-router-dom";
import FullPage from "./FullPage";
import Authorization from "./components/Pages/Login/Authorization";
import Register from "./components/Pages/Registration/Register";
import Home from "./components/Pages/Home/Home";
import UserPage from "./components/Pages/User/UserPage";
import Menu from "./components/Pages/Menu/Menu";
import AdminPage from "./components/Pages/User/AdminPage";
import BlogPage from "./components/Pages/Blog/BlogPage";
import CartPage from "./components/Pages/Cart/CartPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<FullPage />}>
            <Route element={<Home />} index></Route>
            <Route path="Login" element={<Authorization />}></Route>
            <Route path="Register" element={<Register />} ></Route>
            <Route path="UserPage" element={<UserPage />} ></Route>
            <Route path="Menu" element={<Menu />}></Route>
            <Route path="Admin" element={<AdminPage />}></Route>
            <Route path="BlogPage" element={<BlogPage />}></Route>
            <Route path="CartPage" element={<CartPage />}></Route>
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
