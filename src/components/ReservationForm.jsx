// ReservationForm.js
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const timeOptions = [
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
  "6:00 PM",
  "7:00 PM",
  "8:00 PM",
  "9:00 PM",
];

const occasionOptions = ["Birthday", "Anniversary", "Celebration", "Other"];

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    date: null,
    time: "",
    numberOfGuests: "",
    occasion: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleDateChange = (date) => {
    setFormData((prevData) => ({ ...prevData, date }));
  };

  const handleTimeChange = (e) => {
    setFormData((prevData) => ({ ...prevData, time: e.target.value }));
  };

  const handleOccasionChange = (e) => {
    setFormData((prevData) => ({ ...prevData, occasion: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm(formData);
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      // Form is valid, you can submit the data or perform any other action
      console.log("Form data submitted:", formData);
    } else {
      console.error("Form has errors. Please fix them.");
    }
  };

  const validateForm = (data) => {
    let errors = {};

    if (!data.firstName.trim()) {
      errors.firstName = "First name is required";
    }

    if (!data.lastName.trim()) {
      errors.lastName = "Last name is required";
    }

    if (!data.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(data.email)) {
      errors.email = "Invalid email address";
    }

    if (!data.phoneNumber.trim()) {
      errors.phoneNumber = "Phone number is required";
    } else if (!/^\d{10}$/.test(data.phoneNumber)) {
      errors.phoneNumber = "Invalid phone number";
    }

    if (!data.date) {
      errors.date = "Date is required";
    }

    if (!data.time) {
      errors.time = "Time is required";
    }

    if (!data.numberOfGuests.trim()) {
      errors.numberOfGuests = "Number of guests is required";
    } else if (!/^\d+$/.test(data.numberOfGuests)) {
      errors.numberOfGuests = "Invalid number";
    }

    if (!data.occasion) {
      errors.occasion = "Occasion is required";
    }

    return errors;
  };

  return (
    <form
      className="min-w-[400px] bg-white p-6 rounded-md shadow-md mt-10"
      onSubmit={handleSubmit}
    >
      {/* FIRST AND LAST NAME */}
      <div className="flex flex-row space-x-7">
        <div className="mb-4">
          <label
            htmlFor="firstName"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            First Name<span className="text-red-500"> *</span>
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="border border-gray-300 p-2 w-full rounded-md"
          />
          {formErrors.firstName && (
            <span className="text-red-500 text-sm">{formErrors.firstName}</span>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="lastName"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Last Name<span className="text-red-500"> *</span>
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="border border-gray-300 p-2 w-full rounded-md"
          />
          {formErrors.lastName && (
            <span className="text-red-500 text-sm">{formErrors.lastName}</span>
          )}
        </div>
      </div>

      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Email<span className="text-red-500"> *</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="border border-gray-300 p-2 w-full rounded-md"
        />
        {formErrors.email && (
          <span className="text-red-500 text-sm">{formErrors.email}</span>
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="phoneNumber"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Phone Number<span className="text-red-500"> *</span>
        </label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          className="border border-gray-300 p-2 w-full rounded-md"
        />
        {formErrors.phoneNumber && (
          <span className="text-red-500 text-sm">{formErrors.phoneNumber}</span>
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="date"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Date<span className="text-red-500"> *</span>
        </label>
        <DatePicker
          id="date"
          selected={formData.date}
          onChange={handleDateChange}
          className="border border-gray-300 p-2 w-full rounded-md"
        />
        {formErrors.date && (
          <span className="text-red-500 text-sm">{formErrors.date}</span>
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="time"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Time<span className="text-red-500"> *</span>
        </label>
        <select
          id="time"
          name="time"
          value={formData.time}
          onChange={handleTimeChange}
          className="border border-gray-300 p-2 w-full rounded-md"
        >
          <option value="" disabled>
            Select Time
          </option>
          {timeOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {formErrors.time && (
          <span className="text-red-500 text-sm">{formErrors.time}</span>
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="numberOfGuests"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Number of Guests<span className="text-red-500"> *</span>
        </label>
        <input
          type="number"
          id="numberOfGuests"
          name="numberOfGuests"
          value={formData.numberOfGuests}
          onChange={handleChange}
          className="border border-gray-300 p-2 w-full rounded-md"
        />
        {formErrors.numberOfGuests && (
          <span className="text-red-500 text-sm">
            {formErrors.numberOfGuests}
          </span>
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="occasion"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Occasion
        </label>
        <select
          id="occasion"
          name="occasion"
          value={formData.occasion}
          onChange={handleOccasionChange}
          className="border border-gray-300 p-2 w-full rounded-md"
        >
          <option value="" disabled>
            Select Occasion
          </option>
          {occasionOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {formErrors.occasion && (
          <span className="text-red-500 text-sm">{formErrors.occasion}</span>
        )}
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
      >
        Submit
      </button>
    </form>
  );
};

export default ReservationForm;
