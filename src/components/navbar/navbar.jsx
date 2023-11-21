import React from "react";
import Logo from "./../../images/logo.png";

function NavBar() {
  return (
    <nav className="flex items-center justify-between px-[90px] py-2 bg-slate-100">
      <div className="">
        <a href="/">
          <img className="max-h-[50px]" src={Logo} alt="little-lemon-logo" />
        </a>
      </div>
      <div className="flex space-x-6">
        <a href="/" className="text-gray-500 hover:text-[#f4ce14]">
          Home
        </a>
        <a href="/about" className="text-gray-500 hover:text-[#f4ce14]">
          About
        </a>
        <a href="/menu" className="text-gray-500 hover:text-[#f4ce14]">
          Menu
        </a>
        <a href="/reservations" className="text-gray-500 hover:text-[#f4ce14]">
          Reservations
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
