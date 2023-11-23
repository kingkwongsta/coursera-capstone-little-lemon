import React from "react";
import { render, screen } from "@testing-library/react";
import Menu from "./Menu";

test("Menu renders correctly", () => {
  render(<Menu />);

  // Check if the main menu title is rendered
  const menuTitle = screen.getByRole("heading", { name: "Menu" });
  expect(menuTitle).toBeInTheDocument();

  // Check if the Appetizers section is rendered
  const appetizersSection = screen.getByText("Appetizers");
  expect(appetizersSection).toBeInTheDocument();

  // Check if all appetizer items are rendered
  const appetizerItems = screen.getAllByText("Whipped Feta with Cucumbers");
  expect(appetizerItems.length).toBeGreaterThan(0);

  // Check if the Entrees section is rendered
  const entreesSection = screen.getByText("Entrees");
  expect(entreesSection).toBeInTheDocument();

  // Check if all entree items are rendered
  const entreeItems = screen.getAllByText(
    "Chicken Breasts with Artichoke-Olive Sauce"
  );
  expect(entreeItems.length).toBeGreaterThan(0);

  // Check if the Desserts section is rendered
  const dessertsSection = screen.getByText("Desserts");
  expect(dessertsSection).toBeInTheDocument();

  // Check if all dessert items are rendered
  const dessertItems = screen.getAllByText("Baklava");
  expect(dessertItems.length).toBeGreaterThan(0);
});
