import React, { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000); // Reset after 5 seconds
      setFormData({ name: "", email: "", message: "" });
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {submitted && <p className="text-green-600">Thank you! Your message has been sent.</p>}
      
      <div>
        <label className="block text-lg font-medium mb-1" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />
      </div>

      <div>
        <label className="block text-lg font-medium mb-1" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />
      </div>

      <div>
        <label className="block text-lg font-medium mb-1" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          placeholder="Write your message here"
          className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />
      </div>

      <button
        type="submit"
        className="bg-indigo-600 text-white font-medium px-6 py-2 rounded-lg hover:bg-indigo-700 transition duration-300"
      >
        Submit
      </button>
    </form>
  );
}

export default ContactForm;
