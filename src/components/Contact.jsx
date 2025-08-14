import React, { useState } from "react";
import { FaLocationDot, FaPhone, FaClock } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
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
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="contact-section py-16 bg-gray-100">
      <div className="container">
        <h2 className="text-4xl font-bold mb-12 text-[#0083cf]">
          Contact <span className="text-black">Us</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="contact-info lg:border-r lg:border-[black]">
            <h3 className="text-2xl font-semibold mb-6 text-black">
              Get In Touch
            </h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="text-red-600 text-2xl">
                  <FaLocationDot />
                </div>
                <div>
                  <h4 className="font-semibold text-black">Address</h4>
                  <p className="text-gray-600">
                    123 Main Street,
                    <span className="block">Aurangabad, Maharashtra 431001,</span>
                    <span className="block">India</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="text-[#0083cf] text-2xl">
                  <FaPhone />
                </div>
                <div>
                  <h4 className="font-semibold text-black">Phone</h4>
                  <p className="text-gray-600">+91 9292929292</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="text-yellow-500 text-2xl">
                  <MdEmail />
                </div>
                <div>
                  <h4 className="font-semibold text-black">Email</h4>
                  <p className="text-gray-600">info@buildpro.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="text-black text-2xl">
                  <FaClock />
                </div>
                <div>
                  <h4 className="font-semibold text-black">Working Hours</h4>
                  <p className="text-gray-600">
                    Monday - Friday: 9:00 AM - 6:00 PM
                    <span className="block">Saturday: 9:00 AM - 3:00 PM</span>
                    <span className="block">Sunday: Closed</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form">
            <h3 className="text-2xl font-semibold mb-6 text-black">
              Send us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6 text-black">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="number"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                    placeholder="+91 9292929292"
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Service Needed *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                  >
                    <option value="">Select a Service</option>
                    <option value="residential">Residential Construction</option>
                    <option value="commercial">Commercial Projects</option>
                    <option value="renovation">Renovations & Remodeling</option>
                    <option value="interior">Interior Design</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#0083cf] hover:bg-yellow-500 hover:text-black text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
