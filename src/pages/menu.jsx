import React from "react";
import App from "./../images/apps.jpg";
import Entree from "./../images/entree.jpg";
import Dessert from "./../images/dessert.jpg";
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
    <div className="menu mb-16">
      <h1 className="my-10 text-4xl text-center">Menu</h1>
      <div className="flex flex-row justify-center items-center px-[70px] mt-[50px]">
        {/* APPS */}
        <MenuCard cardimg={App} menuitems={appetizer} category="Appetizers" />
        {/* Entrees */}
        <MenuCard cardimg={Entree} menuitems={entrees} category="Entrees" />
        {/* DESSERTS */}
        <MenuCard cardimg={Dessert} menuitems={desserts} category="Desserts" />
      </div>
    </div>
  );
}

export default Menu;
