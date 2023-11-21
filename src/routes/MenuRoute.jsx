import React from "react";
import Menu from "./../pages/menu";
import NavBar from "./../components/navbar/navbar";
import Footer from "../components/footer/footer";

function MenuRoute() {
  return (
    <>
      <NavBar />
      <Menu />
      <Footer />
    </>
  );
}

export default MenuRoute;
