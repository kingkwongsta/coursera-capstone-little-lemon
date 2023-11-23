// reservationform.test.js
import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import ReservationForm from "./ReservationForm";

describe("ReservationForm component", () => {
  it("renders correctly and handles form submission", async () => {
    // Mock the console.log function
    const consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});

    render(<ReservationForm />);

    // Fill in the form
    fireEvent.change(screen.getByLabelText("First Name *"), {
      target: { value: "John" },
    });
    fireEvent.change(screen.getByLabelText("Last Name *"), {
      target: { value: "Doe" },
    });
    fireEvent.change(screen.getByLabelText("Email *"), {
      target: { value: "john@example.com" },
    });
    fireEvent.change(screen.getByLabelText("Phone Number *"), {
      target: { value: "1234567890" },
    });
    fireEvent.change(screen.getByLabelText("Number of Guests *"), {
      target: { value: "2" },
    });

    // Select date
    const today = new Date();
    fireEvent.change(screen.getByLabelText("Date *"), {
      target: { value: today },
    });

    // Select time
    fireEvent.change(screen.getByLabelText("Time *"), {
      target: { value: "6:00 PM" },
    });

    // Select occasion
    fireEvent.change(screen.getByLabelText("Occasion"), {
      target: { value: "Birthday" },
    });

    // Submit the form
    fireEvent.click(screen.getByText("Submit"));

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
          date: today, // Adjust the comparison based on your actual logic
          time: "6:00 PM",
          numberOfGuests: "2",
          occasion: "Birthday",
        })
      );
    });

    // Restore the original console.log function
    consoleSpy.mockRestore();

    // Optional: Check if the form errors are displayed correctly
    expect(
      screen.queryByText("First name is required")
    ).not.toBeInTheDocument();
    expect(screen.queryByText("Last name is required")).not.toBeInTheDocument();
    expect(screen.queryByText("Email is required")).not.toBeInTheDocument();
    expect(
      screen.queryByText("Phone number is required")
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText("Number of guests is required")
    ).not.toBeInTheDocument();
    expect(screen.queryByText("Date is required")).not.toBeInTheDocument();
    expect(screen.queryByText("Time is required")).not.toBeInTheDocument();
    expect(screen.queryByText("Occasion is required")).not.toBeInTheDocument();
  });
});
