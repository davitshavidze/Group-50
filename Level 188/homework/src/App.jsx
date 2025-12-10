import { BrowserRouter, Route, Routes } from "react-router";
import FullPage from "./FullPage";
import Authorization from "./components/Pages/Login/Authorization";
import Register from "./components/Pages/Registration/Register";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<FullPage />}>
            <Route path="Login" element={<Authorization />}></Route>
            <Route element={<Register />} index />
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
