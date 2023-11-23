import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import "jest-matcher-one-of"; // Import the library for date comparison
import ReservationForm from "./ReservationForm";

describe("ReservationForm component", () => {
  // Mock console.log to spy on the log messages
  const consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});

  // Restore the original console.log after all tests
  afterAll(() => {
    consoleSpy.mockRestore();
  });

  it("renders correctly and handles form submission", async () => {
    // Render the ReservationForm component
    const { getByLabelText, getByText, getByTestId } = render(
      <ReservationForm />
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
      // Check if the form data is logged to the console
      expect(consoleSpy).toHaveBeenCalledWith(
        "Form data submitted:",
        expect.objectContaining({
          firstName: "John",
          lastName: "Doe",
          email: "john@example.com",
          phoneNumber: "1234567890",
          date: expect.any(Date), // Use expect.any(Date) for the date comparison
          time: "6:00 PM",
          numberOfGuests: "2",
          occasion: "Birthday",
        })
      );
    });
  });
});
