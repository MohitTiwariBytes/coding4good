import React, { useEffect } from "react";
import "./Navbar.css";
import gsap from "gsap";
import Link from "../Link/LinkText";
import Button from "../Buttons/Button";

export default function Navbar() {
  return (
    <div className="main-navbar">
      <div className="navbar">
        <div className="logo">
          <h1>Coding4Good</h1>
        </div>
        <div className="navigation">
          <Link to={"/"} text={"Home"}></Link>
          <Link to={"/"} text={"About"}></Link>
          <Link to={"/"} text={"Team"}></Link>
          <Link to={"/"} text={"Contact"}></Link>
          <Button
            text="Donate"
            buttonColor="#EC5212"
            buttonHoverColor="#FFD37D"
            textColor="white"
            textHoverColor="black"
            onClick={() => {
              window.location.replace("/about");
            }}
          />
        </div>
      </div>
    </div>
  );
}
