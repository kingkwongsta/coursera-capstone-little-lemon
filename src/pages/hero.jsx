import React from "react";

function Hero() {
  return (
    <div className="flex flex-row">
      <div className="w-3/5 border-solid border-2 border-sky-500">
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
      <div className="w-2/5 border-solid border-2 border-sky-500">2</div>
    </div>
  );
}

export default Hero;
