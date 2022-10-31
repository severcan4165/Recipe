
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Login from "../pages/login/Login";
import Details from "../pages/details/Details.jsx";
import { useState } from "react";
import PrivateRouter from "./PrivateRouter";
import Logout from "../pages/logout/Logout";


function AppRouter() {
  const [isLogin, setIsLogin] = useState(false);
  console.log(isLogin)
  return (

    <BrowserRouter>

      <Routes>
        <Route path="/login" element={<Login setIsLogin={setIsLogin} />} />
        <Route path="/" element={<PrivateRouter isLogin={isLogin } page={<Home />} />}/>
        <Route path="/about" element={<PrivateRouter isLogin={isLogin} page={<About />} />}/>
        <Route path="/logout" element={<PrivateRouter isLogin={isLogin} setIsLogin={setIsLogin} page={<Logout />} />}/>
        <Route path="/details/:index" element={<PrivateRouter isLogin={isLogin} page={<Details />} />}/>
      </Routes>
      
    </BrowserRouter>
  );
}

export default AppRouter;
