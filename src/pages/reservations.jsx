import React from "react";
import ResyImage from "./../images/resy.jpg";
import ResyForm from "../components/reservationform";

function Reservations() {
  return (
    <div className="flex flex-row max-md:flex-col justify-around align-middle mt-12">
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
