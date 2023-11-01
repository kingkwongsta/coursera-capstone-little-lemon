import React from "react";
import HeroImage from "./../images/hero.jpg";

function Hero() {
  return (
    <div className="flex flex-row items-center">
      <div className="w-3/5 border-solid border-2 border-sky-500 justify-center p-8">
        <h2>Little Lemon</h2>
        <p>
          Based in Chicago, Illinois, Little Lemon is a family-owned
          Mediterranean restaurant, focused on traditional recipes served with a
          modern twist. The chefs draw inspiration from Italian, Greek, and
          Turkish culture and have a menu of 12–15 items that they rotate
          seasonally. The restaurant has a rustic and relaxed atmosphere with
          moderate prices, making it a popular place for a meal any time of the
          day.
        </p>
      </div>
      <div className="w-2/5 border-solid border-2 border-sky-500 flex justify-center p-4">
        <img
          className="max-h-[400px] rounded-3xl"
          src={HeroImage}
          alt="hero-food"
        />
      </div>
    </div>
  );
}

export default Hero;
