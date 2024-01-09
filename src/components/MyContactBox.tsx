"use client";
import React, { useState } from "react";
import { client } from "../../sanity/lib/client";
import { ContactFormProps } from "../../types"; // Update this import to your contact form props type

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Create a new contact form submission object
    const newSubmission = {
      _type: "contactFormSubmission", // Update this to match your Sanity schema
      name,
      email,
      message,
    };

    try {
      // Send the form data to your Sanity.io API
      await client.create(newSubmission);

      // Clear the form fields
      setName("");
      setEmail("");
      setMessage("");

      // Show a confirmation message
      setShowConfirmation(true);

      // Hide the confirmation message after 3 seconds
      setTimeout(() => setShowConfirmation(false), 3000);
    } catch (error) {
      console.error("Error submitting contact form:", error);
      // Handle errors if needed
    }
  };

  return (
    <div className="">
      {showConfirmation && (
        <div className="alert-success text-lg font-bold text-green-500">
          Contact form submitted successfully!
        </div>
      )}

      <h1 className="lg:text-4xl text-3xl font-bold my-5 text-gray-100">
        Contact Us
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4 lg:w-2/3">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full p-2 bg-gray-200 text-gray-700 placeholder:text-gray-500 rounded focus:outline-none focus:ring-2 focus:ring-gray-700"
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full p-2 bg-gray-200 text-gray-700 placeholder:text-gray-500 rounded focus:outline-none focus:ring-2 focus:ring-gray-700"
        />

        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="w-full p-2 bg-gray-200 text-gray-700 placeholder:text-gray-500 rounded focus:outline-none focus:ring-2 focus:ring-gray-700"
        />

        <button
          type="submit"
          className="w-56 p-2 text-lg bg-green-500 text-white rounded font-semibold hover:bg-green-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
