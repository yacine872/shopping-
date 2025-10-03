import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Navbar() {
  const itemCount = useSelector((state) => state.cart.totalItems);
  const navbarStyle = {
    display: "flex",
    justifyContent: "space-around",
    backgroundColor: "#060047",
    padding: "10px",
  };

  return (
    <nav style={navbarStyle}>
      <Link to="/" className="single-link">
        <h2>Home</h2>
      </Link>
      <Link to="/shopping" className="single-link">
        <h2>Shopping</h2>
      </Link>
      <Link to="/cart" className="single-link">
        <h2>Cart : {itemCount} items</h2>
      </Link>
    </nav>
  );
}

export default Navbar;
