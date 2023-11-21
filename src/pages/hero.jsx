import React from "react";
import HeroImage from "./../images/hero.jpg";

function Hero() {
  return (
    <div className="flex max-md:flex-col flex-row items-center bg-lime-800">
      <div className="justify-center p-8 mx-5 pl-5 pr-5">
        <h2 className="text-3xl lg:text-5xl text-[#f4ce14] font-medium mb-4 lg:mb-8">
          Little Lemon
        </h2>
        <p className="text-base lg:text-lg text-white font-light mb-4 lg:mb-8">
          Based in Chicago, Illinois, Little Lemon is a family-owned
          Mediterranean restaurant, focused on traditional recipes served with a
          modern twist. The chefs draw inspiration from Italian, Greek, and
          Turkish culture and have a menu of 12–15 items that they rotate
          seasonally. The restaurant has a rustic and relaxed atmosphere with
          moderate prices, making it a popular place for a meal any time of the
          day.
        </p>
        <button className="w-full lg:w-[300px] h-[30px] lg:h-[40px] bg-[#f4ce14] rounded-lg mb-6 lg:mb-0">
          Reservations
        </button>
      </div>
      <div className="w-full flex justify-center p-4 pr-5">
        <img
          className="max-h-[300px] lg:max-h-[350px] rounded-3xl"
          src={HeroImage}
          alt="hero-food"
        />
      </div>
    </div>
  );
}

export default Hero;
