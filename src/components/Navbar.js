import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ isLoggedIn }) => {
  return (
    <nav>
      <h2>Eiyo eats</h2>
      <Link to="/">Home</Link>
      {!isLoggedIn && (
        <Link to="/signin">Signin</Link>
      )}
      {isLoggedIn && (
        <Link to="/search">Search</Link>
      )}
    </nav>
  );
};

export default Navbar;
