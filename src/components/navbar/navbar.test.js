import React from "react";
import {
  render,
  fireEvent,
  getByText,
  getAllByText,
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import NavBar from "./NavBar";

test("NavBar renders correctly", () => {
  const { getByAltText, getAllByText } = render(<NavBar />);

  // Check if the logo is rendered
  const logo = getByAltText("little-lemon-logo");
  expect(logo).toBeInTheDocument();

  // Check if the menu items are rendered
  const homeLinks = getAllByText("Home");
  expect(homeLinks.length).toBeGreaterThan(0);

  const aboutLink = getByText("About");
  const menuLink = getByText("Menu");
  const reservationsLink = getByText("Reservations");

  expect(aboutLink).toBeInTheDocument();
  expect(menuLink).toBeInTheDocument();
  expect(reservationsLink).toBeInTheDocument();
});

test("Toggle menu button works correctly", () => {
  const { getByText, getByTestId } = render(<NavBar />);

  // Check if the menu is initially hidden
  const menu = getByTestId("menu");
  expect(menu).toHaveClass("hidden");

  // Click the toggle menu button
  const toggleMenuButtons = getAllByText(document.body, "Menu");
  fireEvent.click(toggleMenuButtons[0]);

  // Check if the menu is now visible
  expect(menu).toHaveClass("flex flex-col");
});
