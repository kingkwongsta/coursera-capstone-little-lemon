import React from "react";
import AboutImage from "./../images/about.jpg";

function About() {
  return (
    <div className="flex flex-row items-center bg-slate-400 mt-5 px-16">
      <div className="w-2/5 flex justify-center p-4 pr-[70px]">
        <img
          className="max-h-[350px] rounded-3xl"
          src={AboutImage}
          alt="hero-food"
        />
      </div>
      <div className="w-3/5 justify-center p-8 mx-5 pl-[70px] pr-[100px]">
        <h2 className="text-5xl text-[#f4ce14] font-medium mb-8">
          About Little Lemon
        </h2>
        <p className="text-lg text-white font-light">
          Little Lemon is owned by two Italian brothers, Mario and Adrian, who
          moved to the United States to pursue their shared dream of owning a
          restaurant. To craft the menu, Mario relies on family recipes and his
          experience as a chef in Italy. Adrian does all the marketing for the
          restaurant and led the effort to expand the menu beyond classic
          Italian to incorporate additional cuisines from the Mediterranean
          region.
        </p>
        <button className="w-[300px] h-[30px] bg-[#f4ce14] rounded-lg my-6">
          Reservations
        </button>
      </div>
    </div>
  );
}

export default About;
