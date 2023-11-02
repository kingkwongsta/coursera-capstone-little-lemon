import React from "react";
import MenuImage from "./../images/menu.jpg";
import MenuCard from "../components/menucard";

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
      <MenuCard
        cardimg={MenuImage}
        menuitems={appetizer}
        category="Appetizers"
      />
      {/* Entrees */}
      <MenuCard cardimg={MenuImage} menuitems={entrees} category="Entrees" />
      {/* DESSERTS */}
      <MenuCard cardimg={MenuImage} menuitems={desserts} category="Desserts" />
    </div>
  );
}

export default Menu;
