import React from "react";
import logo from "./assets/contact.png";
import { Link, useNavigate } from "react-router-dom";
import "./css/header.scss";
import "./css/button.scss";

function Header() {
  const navigate = useNavigate();

  return (
    <div className="header">
      <div className="header__left-side">
        <Link to={"/"}>
          <img src={logo} alt="logo" />
          <h2>See our current users and think about becoming one!</h2>
        </Link>
      </div>
      <div className="header__right-side">
        <button className="btn btn-green" onClick={() => navigate("/login")}>
          Login
        </button>
        <button className="btn btn-blue" onClick={() => navigate("/signup")}>
          Sign up
        </button>
      </div>
    </div>
  );
}

export default Header;
