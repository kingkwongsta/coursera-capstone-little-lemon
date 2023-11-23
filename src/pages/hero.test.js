// Hero.test.js
import React from "react";
import { render } from "@testing-library/react";
import Hero from "./Hero";

describe("Hero component", () => {
  it("renders correctly", () => {
    const { getByText, getByAltText, queryByText, debug } = render(<Hero />);

    // Check if the component renders the "Little Lemon" heading
    expect(getByText("Little Lemon")).toBeInTheDocument();

    // Check if the component renders the "Reservations" button
    expect(getByText("Reservations")).toBeInTheDocument();

    // Check if the component renders the HeroImage
    expect(getByAltText("hero-food")).toBeInTheDocument();

    // Debug: Print the component structure to the console for inspection
    debug();

    // Check if the component renders the text content using queryByText with regular expression
    const textContentRegex =
      /Based in Chicago, Illinois, Little Lemon is a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist/;
    const textElement = queryByText(textContentRegex);

    // Split the assertion to identify which part of the content is causing the issue
    expect(textElement).toBeInTheDocument();
  });
});
