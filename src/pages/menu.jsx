import React from "react";
import MenuImage from "./../images/menu.jpg";

const appetizer = [
  "Whipped Feta with Cucumbers",
  "Greek Salad with Shrimp and Kamut",
  "Saganaki Halloumi",
  "Zeytinyağli Yaprak Sarmasi",
  "Summer Bulgur and Green Bean Salad",
];

function Menu() {
  return (
    <div className="flex flex-row items-center px-[70px] mt-[50px]">
      <div className="apps flex-auto bg-slate-500 max-w-[500px] p-5 mx-10 rounded-lg">
        <div className="relative flex justify-center">
          <img
            className="rounded-[20px] flex-shrink-0 max-h-[300px]"
            src={MenuImage}
            alt="flight bgd"
          />
          <h2 className="absolute bottom-[130px] w-full text-center font-[500] text-[30px] leading-[51px] text-[#FFFFFF] z-10">
            Appetizers
          </h2>
        </div>
        <div className="menu-items flex justify-center">
          <ul>
            {appetizer.map((item, index) => {
              return (
                <li key={index} className="my-[15px]">
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="main flex-auto justify-center">
        <div className="">
          <h2>Appetizers</h2>
        </div>
        <div className="">
          <img
            className="max-h-[350px] rounded-3xl"
            src={MenuImage}
            alt="hero-food"
          />
        </div>
      </div>
    </div>
  );
}

export default Menu;
