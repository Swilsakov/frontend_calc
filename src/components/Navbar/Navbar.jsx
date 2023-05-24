import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { logoutActionCreator } from "../../redux/reducers/UserReducer";
import { Nav, Navbar } from "react-bootstrap";

const NavbarContainer = () => {
  const isAuth = useSelector((state) => state.user.isAuth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutActionCreator());
  };

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={NavLink} to="/">
        Calculator JWT
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          {!isAuth && (
            <Nav.Link as={NavLink} to="/login">
              Login
            </Nav.Link>
          )}
          {!isAuth && (
            <Nav.Link as={NavLink} to="/registration">
              Registration
            </Nav.Link>
          )}
          {isAuth && (
            <Nav.Item>
              <Nav.Link onClick={handleLogout}>Log Out</Nav.Link>
            </Nav.Item>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarContainer;
