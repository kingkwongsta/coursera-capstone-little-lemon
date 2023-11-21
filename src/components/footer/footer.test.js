import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer component", () => {
  test("renders the navigation links", () => {
    render(<Footer />);

    const homeLink = screen.getByText(/home/i);
    const aboutLink = screen.getByText(/about/i);
    const menuLink = screen.getByText(/menu/i);
    const reservationsLink = screen.getByText(/reservations/i);

    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(menuLink).toBeInTheDocument();
    expect(reservationsLink).toBeInTheDocument();
  });

  test("renders the contact information", () => {
    render(<Footer />);

    const contactHeading = screen.getByText(/contact/i);
    const address = screen.getByText(/123 Lemon Street/i);
    const city = screen.getByText(/Chicago, Illinois 60007/i);
    const email = screen.getByText(/littlelemon_contact@littlelemon.com/i);

    expect(contactHeading).toBeInTheDocument();
    expect(address).toBeInTheDocument();
    expect(city).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  });

  test("renders the logo", () => {
    render(<Footer />);

    const logo = screen.getByAltText(/little-lemon-logo/i);

    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute("src", expect.stringContaining("logo.png"));
    expect(logo).toHaveAttribute("alt", "little-lemon-logo");
  });
});
