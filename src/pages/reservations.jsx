import React from "react";
import ResyImage from "./../images/resy.jpg";
import ResyForm from "../components/ReservationForm";

function Reservations() {
  return (
    <div className="flex flex-row justify-around mt-12">
      <div>
        <ResyForm />
      </div>
      <div>
        <img
          className="max-h-[400px] rounded-xl"
          src={ResyImage}
          alt="reservation headline"
        />
      </div>
    </div>
  );
}

export default Reservations;
