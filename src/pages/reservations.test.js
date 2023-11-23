import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import Reservations from "./Reservations";

describe("Reservations component", () => {
  it("renders correctly and handles form submission", async () => {
    // Render the Reservations component
    const { getByLabelText, getByText, getByAltText } = render(
      <Reservations />
    );

    // Fill in the form
    fireEvent.change(getByLabelText("First Name *"), {
      target: { value: "John" },
    });
    fireEvent.change(getByLabelText("Last Name *"), {
      target: { value: "Doe" },
    });
    fireEvent.change(getByLabelText("Email *"), {
      target: { value: "john@example.com" },
    });
    fireEvent.change(getByLabelText("Phone Number *"), {
      target: { value: "1234567890" },
    });
    fireEvent.change(getByLabelText("Date *"), {
      target: { value: "11/22/2023" },
    });
    fireEvent.change(getByLabelText("Time *"), {
      target: { value: "6:00 PM" },
    });
    fireEvent.change(getByLabelText("Number of Guests *"), {
      target: { value: "2" },
    });
    fireEvent.change(getByLabelText("Occasion"), {
      target: { value: "Birthday" },
    });

    // Submit the form
    fireEvent.click(getByText("Submit"));

    // Use waitFor to wait for the asynchronous validation and submission
    await waitFor(() => {
      // Check if the form data is logged to the console (adjust this part based on your actual logic)
      // For example, you might want to check if a success message is displayed on the screen
      expect(/* your assertion here */).toBe(/* your expected value here */);
    });

    // Check if the image is rendered
    expect(getByAltText("reservation headline")).toBeInTheDocument();
  });
});
