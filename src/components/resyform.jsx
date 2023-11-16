// ReservationForm.js
import React, { useState } from "react";

const ResyForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    date: "",
    time: "",
    numberOfGuests: "",
    occasion: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
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

    if (!data.date.trim()) {
      errors.date = "Date is required";
    }

    if (!data.time.trim()) {
      errors.time = "Time is required";
    }

    if (!data.numberOfGuests.trim()) {
      errors.numberOfGuests = "Number of guests is required";
    } else if (!/^\d+$/.test(data.numberOfGuests)) {
      errors.numberOfGuests = "Invalid number";
    }

    if (!data.occasion.trim()) {
      errors.occasion = "Occasion is required";
    }

    return errors;
  };

  return (
    <form
      className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md mt-10"
      onSubmit={handleSubmit}
    >
      <div className="mb-4">
        <label
          htmlFor="firstName"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          First Name:
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
          Last Name:
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

      {/* ... (similar styling for other form fields) */}

      <div className="mb-4">
        <label
          htmlFor="occasion"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Occasion:
        </label>
        <input
          type="text"
          id="occasion"
          name="occasion"
          value={formData.occasion}
          onChange={handleChange}
          className="border border-gray-300 p-2 w-full rounded-md"
        />
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

export default ResyForm;
