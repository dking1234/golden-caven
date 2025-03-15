import React from "react";
import logo from "../../Assets/Logo.png";
import { useNavigate } from "react-router-dom";
import './Logo.css'

function Logo() {
  const navigate = useNavigate();
  
  return (
    <img src={logo} alt="gca" className="header-logo-size" onClick={() => navigate("/")}/>
  );
}

export default Logo;