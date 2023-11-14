import React from "react";
import Logo from "./../images/logo.png";

function Footer() {
  return (
    <nav className="flex items-center justify-evenly px-[90px] py-5 mt-12 bg-zinc-400">
      <div className="flex flex-col space-y-2">
        <a href="/" className="text-gray-500 hover:text-[#f4ce14]">
          Home
        </a>
        <a href="/about" className="text-gray-500 hover:text-[#f4ce14]">
          About
        </a>
        <a href="/menu" className="text-gray-500 hover:text-[#f4ce14]">
          Menu
        </a>
      </div>
      <div className="flex flex-col space-y-2 text-gray-500">
        <h2>Contact</h2>
        <p>123 Lemon Street</p>
        <p>Chicago, Illinois 60007 </p>
        <p>littlelemon_contact@littlelemon.com</p>
      </div>
      <div className="">
        <img className="max-h-[50px]" src={Logo} alt="little-lemon-logo" />
      </div>
    </nav>
  );
}

export default Footer;
