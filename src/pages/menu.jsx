import React from "react";
import MenuImage from "./../images/menu.jpg";

const appetizer = [
  "Whipped Feta with Cucumbers",
  "Greek Salad with Shrimp and Kamut",
  "Saganaki Halloumi",
  "Zeytinyağli Yaprak Sarmasi",
  "Summer Bulgur and Green Bean Salad",
];
const entrees = [
  "Chicken Breasts with Artichoke-Olive Sauce",
  "Sea Bass with Tomato and Black Olive Salsa",
  "Greek Fish Stew",
  "Spiced Pork Tenderloin with Hazelnut Vinaigrette",
];
const desserts = [
  "Baklava",
  "Tiramisu",
  "Loukoumades",
  "Galaktoboureko",
  "Pastéis de Nata",
];

function Menu() {
  return (
    <div className="flex flex-row items-center px-[70px] mt-[50px]">
      {/* APPS */}
      <div className="apps flex-auto bg-slate-200 max-w-[450px] p-5 mx-10 rounded-[20px] min-h-[566px]">
        <div className="relative flex justify-center">
          <img
            className="rounded-[20px] flex-shrink-0 max-h-[300px]"
            src={MenuImage}
            alt="flight bgd"
          />
          <h2 className="absolute bottom-[110px] w-full text-center font-[500] text-[25px] leading-[51px] text-[#FFFFFF] z-10">
            Appetizers
          </h2>
        </div>
        <div className="menu-items flex justify-center">
          <ul className="mt-5">
            {appetizer.map((item, index) => {
              return (
                <li key={index} className="text-[18px] my-[15px]">
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {/* MAINS */}
      <div className="main flex-auto bg-slate-200 max-w-[450px] p-5 mx-10 rounded-[20px] min-h-[566px]">
        <div className="relative flex justify-center">
          <img
            className="rounded-[20px] flex-shrink-0 max-h-[300px]"
            src={MenuImage}
            alt="flight bgd"
          />
          <h2 className="absolute bottom-[110px] w-full text-center font-[500] text-[25px] leading-[51px] text-[#FFFFFF] z-10">
            Entrees
          </h2>
        </div>
        <div className="menu-items flex justify-center">
          <ul className="mt-5">
            {entrees.map((item, index) => {
              return (
                <li key={index} className="text-[18px] my-[15px]">
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {/* DESSERTS */}
      <div className="dessert flex-auto bg-slate-200 max-w-[450px] p-5 mx-10 rounded-[20px] min-h-[566px]">
        <div className="relative flex justify-center">
          <img
            className="rounded-[20px] flex-shrink-0 max-h-[300px]"
            src={MenuImage}
            alt="flight bgd"
          />
          <h2 className="absolute bottom-[110px] w-full text-center font-[500] text-[25px] leading-[51px] text-[#FFFFFF] z-10">
            Desserts
          </h2>
        </div>
        <div className="menu-items flex justify-center">
          <ul className="mt-5">
            {desserts.map((item, index) => {
              return (
                <li key={index} className="text-[18px] my-[15px]">
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Menu;
