"use client";
// Import necessary modules
import React, { useState, FormEvent, ChangeEvent } from 'react';


// Interface for contact data
interface ContactData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Contact component
const Contact: React.FC = () => {
  // State for form data
  const [data, setData] = useState<ContactData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // Handle form input changes
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      // Send email to the server
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // Clear form data on successful submission
        setData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });

        // Display success toast
       
      } else {
        // Display error toast on submission failure
       
      }
    } catch (error) {
      console.error('Error sending the message:', error);
      // Display error toast on unexpected errors

    }
  };

  // Return JSX for the form
  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto my-8">
      {/* Form inputs */}
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-semibold mb-1">
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={data.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-semibold mb-1">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={data.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="subject" className="block text-sm font-semibold mb-1">
          Subject:
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={data.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="message" className="block text-sm font-semibold mb-1">
          Message:
        </label>
        <textarea
          id="message"
          name="message"
          value={data.message}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded"
        />
      </div>

      {/* Button for form submission */}
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Submit
      </button>
    </form>
  );
};

export default Contact;
