import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

jest.mock("./pages/hero", () => () => <div data-testid="hero-component" />);
// jest.mock("./components/navbar", () => () => (
//   <div data-testid="navbar-component" />
// ));
jest.mock("./components/footer/footer", () => () => (
  <div data-testid="footer-component" />
));
jest.mock("./pages/menu", () => () => <div data-testid="menu-component" />);
jest.mock("./pages/about", () => () => <div data-testid="about-component" />);
jest.mock("./pages/reservations", () => () => (
  <div data-testid="reservations-component" />
));

describe("App component", () => {
  test("renders all components", () => {
    render(<App />);

    // Use getByTestId to query elements based on the "data-testid" attribute
    // expect(screen.getByTestId("navbar-component")).toBeInTheDocument();
    expect(screen.getByTestId("hero-component")).toBeInTheDocument();
    expect(screen.getByTestId("menu-component")).toBeInTheDocument();
    expect(screen.getByTestId("about-component")).toBeInTheDocument();
    expect(screen.getByTestId("reservations-component")).toBeInTheDocument();
    expect(screen.getByTestId("footer-component")).toBeInTheDocument();
  });
});
