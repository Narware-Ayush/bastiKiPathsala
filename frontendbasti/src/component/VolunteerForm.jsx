// src/components/VolunteerForm.js
import React, { useState } from "react";

export default function VolunteerForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    availability: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Volunteer Form Submitted:", formData);
    alert("Thank you for signing up as a volunteer! We will get in touch soon.");
    setFormData({ name: "", email: "", phone: "", availability: "", message: "" });
  };

  return (
    <div>
    <section className="bg-white py-16 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 2xl:px-60 w-full">
      <div className="w-full mx-auto border border-green-600 rounded-lg shadow-lg p-6 sm:p-10">
        <h2 className="text-3xl sm:text-4xl font-semibold text-center text-green-800 mb-10">
          Join Us as a Volunteer
        </h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div className="flex flex-col">
            <label className="mb-2 text-gray-700 font-medium">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="px-4 py-3 border border-green-600 rounded focus:outline-none focus:ring-2 focus:ring-green-300"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-2 text-gray-700 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="px-4 py-3 border border-green-600 rounded focus:outline-none focus:ring-2 focus:ring-green-300"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-2 text-gray-700 font-medium">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="px-4 py-3 border border-green-600 rounded focus:outline-none focus:ring-2 focus:ring-green-300"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-2 text-gray-700 font-medium">Availability (Days/Time)</label>
            <input
              type="text"
              name="availability"
              value={formData.availability}
              onChange={handleChange}
              placeholder="e.g. Weekends, Evenings"
              className="px-4 py-3 border border-green-600 rounded focus:outline-none focus:ring-2 focus:ring-green-300"
            />
          </div>

          <div className="md:col-span-2 flex flex-col">
            <label className="mb-2 text-gray-700 font-medium">Why do you want to volunteer?</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
              className="px-4 py-3 border border-green-600 rounded resize-none focus:outline-none focus:ring-2 focus:ring-green-300"
            ></textarea>
          </div>

          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full bg-green-700 hover:bg-green-800 text-white py-3 px-6 rounded font-semibold transition"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </section>
    </div>
  );
}
