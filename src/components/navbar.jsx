import React from "react";
import Logo from "./../images/logo.png";

function NavBar() {
  return (
    <nav className="flex items-center justify-between px-[90px] py-2">
      <div className="">
        <img className="max-h-[50px]" src={Logo} alt="little-lemon-logo" />
      </div>
      <div className="flex space-x-4">
        <a href="#" className="text-gray-500 hover:text-gray-900">
          Home
        </a>
        <a href="#" className="text-gray-500 hover:text-gray-900">
          About
        </a>
        <a href="/menu" className="text-gray-500 hover:text-gray-900">
          Menu
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
