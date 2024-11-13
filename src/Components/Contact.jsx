import React, { useState } from "react";
import Footer from "./Footer";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "", // New state for subject
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name) errors.name = "Name is required";
    if (!formData.email) errors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      errors.email = "Email is invalid";
    if (!formData.subject) errors.subject = "Subject is required"; // Validation for subject
    if (!formData.message) errors.message = "Message is required";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      setFormSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" }); // Reset subject
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <section className="container mx-auto p-6 bg-gray-100 rounded-lg shadow-lg min-h-screen flex flex-col">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Side: Contact Info */}
          <div>
            <h2 className="text-3xl font-bold mb-4 text-blue-700">
              Get in Touch
            </h2>
            <p className="text-gray-700 mb-6">
              Visit our head office or contact us today:
            </p>
            <p className="text-gray-900 font-semibold">Head Office</p>
            <p>Shivaji park, adjacent to BOB Bank, New Delhi, 110026</p>
            <p className="text-gray-900 mt-2">Email: adding@gmai.com</p>
            <p className="text-gray-900">Contact Here: (+91) 9773649449</p>
            <p className="text-gray-900">
              Hours: Monday to Saturday, 9:00 AM - 5:00 PM
            </p>
          </div>

          {/* Right Side: Google Maps iframe */}
          <div className="map mt-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.5649317659213!2d77.12945157445415!3d28.67274287564279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03bb57a793cb%3A0xe9b6864808ad068b!2sShivaji%20Park%2C%20West%20Punjabi%20Bagh%2C%20Punjabi%20Bagh%2C%20Delhi!5e0!3m2!1sen!2sin!4v1731402987570!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Muzaffarpur Location"
            ></iframe>
          </div>
        </div>

        {/* Contact Form */}
        <div className="mt-8">
          {formSubmitted && (
            <p className="text-green-600 font-semibold mb-4">
              Thanks for contacting us! We’ll resolve your query soon.
            </p>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block font-medium mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded ${
                  errors.name ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
            </div>

            <div>
              <label className="block font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>

            <div>
              <label className="block font-medium mb-1">Subject</label>{" "}
              {/* Subject field */}
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded ${
                  errors.subject ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.subject && (
                <p className="text-red-500 text-sm">{errors.subject}</p>
              )}
            </div>

            <div>
              <label className="block font-medium mb-1">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className={`w-full px-4 py-2 border rounded ${
                  errors.message ? "border-red-500" : "border-gray-300"
                }`}
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-700 text-white py-2 rounded hover:bg-blue-600 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Contact;
