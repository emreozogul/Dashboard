import React from "react";

const Navbar = () => (
  <nav className="flex flex-row justify-between bg-green-300 items-center px-10  ">
    <div className="flex flex-row">
      <h1 className="">Logo</h1>
    </div>
    <ul className="flex flex-row justify-between items-center gap-10">
      <li>
        <a href="#home" style={{ color: "black", textDecoration: "none" }}>
          Home
        </a>
      </li>
      <li>
        <a href="#services" style={{ color: "black", textDecoration: "none" }}>
          Services
        </a>
      </li>
      <li>
        <a href="#about" style={{ color: "black", textDecoration: "none" }}>
          About
        </a>
      </li>
      <li>
        <a href="#contact" style={{ color: "black", textDecoration: "none" }}>
          Contact
        </a>
      </li>
    </ul>
  </nav>
);

export default Navbar;
