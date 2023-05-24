import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { logoutActionCreator } from "../../redux/reducers/UserReducer";

const Navbar = () => {
  const isAuth = useSelector((state) => state.user.isAuth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutActionCreator());
  };

  return (
    <div>
      <div>
        {!isAuth && <NavLink to={"/login"}>Login</NavLink>}
        <br />
        {!isAuth && <NavLink to={"/registration"}>Registration</NavLink>}
        {isAuth && <button onClick={handleLogout}>Log Out</button>}
      </div>
    </div>
  );
};

export default Navbar;
