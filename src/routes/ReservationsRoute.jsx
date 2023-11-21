import React from "react";
import NavBar from "../components/navbar/navbar";
import Footer from "./../components/footer/footer";
import Reservations from "../pages/reservations";

function ReservationsRoute() {
  return (
    <>
      <NavBar />
      <Reservations />
      <Footer />
    </>
  );
}

export default ReservationsRoute;
