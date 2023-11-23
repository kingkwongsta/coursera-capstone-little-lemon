import React from "react";
import {
  render,
  fireEvent,
  getByText,
  getAllByText,
  waitFor,
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

  const aboutLink = getByTestId("About");
  const menuLink = getByTestId("Menu");
  const reservationsLink = getByTestId("Reservations");

  expect(aboutLink).toBeInTheDocument();
  expect(menuLink).toBeInTheDocument();
  expect(reservationsLink).toBeInTheDocument();
});

test("Toggle menu button works correctly", async () => {
  const { getByText, queryByText, getByTestId } = render(<NavBar />);

  // Check if the menu is initially hidden
  const menu = getByTestId("menu");
  expect(menu).toHaveClass("hidden");

  // Find the toggle menu button using queryByText
  const toggleMenuButton = queryByText("Menu");
  expect(toggleMenuButton).toBeInTheDocument();

  // Click the toggle menu button
  fireEvent.click(toggleMenuButton);

  // Use waitFor to wait for the menu state to update
  await waitFor(() => {
    expect(menu).toHaveClass("flex flex-col");
  });
});
