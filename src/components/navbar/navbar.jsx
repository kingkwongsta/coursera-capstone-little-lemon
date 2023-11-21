import React, { useState } from "react";
import Logo from "./../../images/logo.png";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
    console.log(menuOpen);
  };

  return (
    <nav className="flex items-center justify-between px-4 py-2 md:px-6 bg-slate-100">
      <div className="flex items-center">
        <a href="/">
          <img className="max-h-10" src={Logo} alt="little-lemon-logo" />
        </a>
      </div>
      {/* Hamburger menu icon - Responsive Layout */}
      <div className="md:hidden">
        <button
          onClick={handleToggleMenu}
          className="text-gray-500 hover:text-[#f4ce14] focus:outline-none"
        >
          <svg
            className="h-6 w-6 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
        <div className={`${menuOpen ? "flex flex-col" : "hidden"}`}>
          <a href="/" className="text-gray-500 hover:text-[#f4ce14]">
            Home
          </a>
          <a href="/about" className="text-gray-500 hover:text-[#f4ce14]">
            About
          </a>
          <a href="/menu" className="text-gray-500 hover:text-[#f4ce14]">
            Menu
          </a>
          <a
            href="/reservations"
            className="text-gray-500 hover:text-[#f4ce14]"
          >
            Reservations
          </a>
        </div>
      </div>
      {/* Menu Large Screen Display */}
      <div className="flex flex-row space-x-6 max-md:hidden">
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
