import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "./Footer";
import Logo from "./../../images/logo.png";

describe("Footer component", () => {
  test("renders navigation links", () => {
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

  test("renders contact information", () => {
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

  test("renders the logo with correct attributes", () => {
    render(<Footer />);

    const logo = screen.getByAltText(/little-lemon-logo/i);

    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute("src", Logo);
    expect(logo).toHaveAttribute("alt", "little-lemon-logo");
  });
});
