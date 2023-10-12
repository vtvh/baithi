import React from "react";
import { Route, Routes, Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <Link className="link" to="/">Home</Link>
      <Link className="link" to="/list">Student List</Link>
      <Link className="link" to="/add">Add New Student</Link>
      <Link className="link" to="/">About us</Link>
    </div>
  );
}

export default Header;
