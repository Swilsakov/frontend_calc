import React, { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";
import { useDispatch, useSelector } from "react-redux";
import { checkSession } from "./api/authAPI";
import Calculator from "./components/Calculator/Calculator";

const App = () => {
  const isAuth = useSelector((state) => state.user.isAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(checkSession());
    }
  }, [dispatch]);

  return (
    <BrowserRouter>
      <div>
        <Navbar />
        {!isAuth && (
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
          </Routes>
        )}
        {isAuth && <Calculator />}
      </div>
    </BrowserRouter>
  );
};

export default App;
