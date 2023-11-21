import React from "react";
import { render, screen } from "@testing-library/react";
import MenuCard from "./MenuCard";

describe("MenuCard component", () => {
  const mockCard = {
    cardimg: "mock_image_path.jpg",
    menuitems: ["Item 1", "Item 2", "Item 3"],
    category: "Mock Category",
  };

  test("renders MenuCard with correct content", () => {
    render(<MenuCard {...mockCard} />);

    // Check if the category is rendered
    const categoryElement = screen.getByText(/Mock Category/i);
    expect(categoryElement).toBeInTheDocument();

    // Check if the image is rendered with the correct alt text
    const imageElement = screen.getByAltText(/flight bgd/i);
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute("src", "mock_image_path.jpg");

    // Check if menu items are rendered
    mockCard.menuitems.forEach((item) => {
      const menuItemElement = screen.getByText(item);
      expect(menuItemElement).toBeInTheDocument();
    });
  });
});
