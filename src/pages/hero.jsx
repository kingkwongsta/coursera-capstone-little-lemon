import React from "react";
import HeroImage from "./../images/hero.jpg";

function Hero() {
  return (
    <div className="flex flex-row items-center bg-lime-800">
      <div className="w-3/5 justify-center p-8 mx-5 pl-[70px] pr-[100px]">
        <h2 className="text-5xl text-[#f4ce14] font-medium mb-8">
          Little Lemon
        </h2>
        <p className="text-lg text-white font-light">
          Based in Chicago, Illinois, Little Lemon is a family-owned
          Mediterranean restaurant, focused on traditional recipes served with a
          modern twist. The chefs draw inspiration from Italian, Greek, and
          Turkish culture and have a menu of 12–15 items that they rotate
          seasonally. The restaurant has a rustic and relaxed atmosphere with
          moderate prices, making it a popular place for a meal any time of the
          day.
        </p>
        <button className="w-[300px] h-[30px] bg-[#f4ce14] rounded-lg my-6">
          Reservations
        </button>
      </div>
      <div className="w-2/5 flex justify-center p-4 pr-[70px]">
        <img
          className="max-h-[350px] rounded-3xl"
          src={HeroImage}
          alt="hero-food"
        />
      </div>
    </div>
  );
}

export default Hero;
