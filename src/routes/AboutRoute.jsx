import React from "react";
import About from "./../pages/about";
import NavBar from "./../components/navbar/navbar";
import Footer from "../components/footer/footer";

function AboutRoute() {
  return (
    <>
      <NavBar />
      <About />
      <Footer />
    </>
  );
}

export default AboutRoute;
