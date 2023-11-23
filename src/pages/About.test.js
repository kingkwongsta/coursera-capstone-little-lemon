// About.test.js
import React from "react";
import { render } from "@testing-library/react";
import About from "./About";

describe("About component", () => {
  it("renders correctly", () => {
    const { getByText, getByAltText } = render(<About />);

    // Check if the component renders the "About Little Lemon" heading
    expect(getByText("About Little Lemon")).toBeInTheDocument();

    // Check if the component renders the "Reservations" button
    expect(getByText("Reservations")).toBeInTheDocument();

    // Check if the component renders the AboutImage
    expect(getByAltText("hero-food")).toBeInTheDocument();

    // Check if the component renders the text content using a custom matcher function
    const textContentMatcher = (content) =>
      expect(document.body.textContent).toContain(content);

    textContentMatcher(
      "Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant."
    );
  });
});
