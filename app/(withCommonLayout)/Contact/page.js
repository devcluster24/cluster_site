"use client";

import { useState } from "react";
import { FaPhone, FaSpinner } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { InputField } from "../component/Contact/InputField";
import { ContactInfo } from "../component/Contact/ContactInfo";
import Swal from "sweetalert2";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage("");

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_API}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        Swal.fire(
          "Message Send",
          "Your message has been sent successfully!.",
          "success"
        );
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        Swal.fire(
          "Message Not Send",
          "Something went wrong. Please try again.",
          "error"
        );
      }
    } catch (error) {
      Swal.fire(
        "Network Error",
        "Something went wrong. Please try again.",
        "error"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-20 bg-[#f6f5fb]">
      <div>
        <h2 className="text-white lg:text-4xl font-bold text-center py-5 lg:py-16 bg-[#ff5400]">
          Contact Us
        </h2>
      </div>
      <div className="Container">
        <div className="lg:flex gap-10">
          {/* Contact Information */}
          <ContactInfo
            icon={<FaPhone />}
            title="Phone / Fax"
            details={["+880 1997-496517"]}
          />
          <ContactInfo
            icon={<MdEmail />}
            title="E-mail"
            details={["info@dev-cluster.com", "career@dev-cluster.com"]}
          />
          <ContactInfo
            icon={<FaLocationDot />}
            title="Location"
            details={["House 93, Indira Road, Farmget, Dhaka, Bangladesh"]}
          />
        </div>

        {/* Contact Form */}
        <div className="w-full p-5 pt-20 flex justify-center items-center">
          <form
            onSubmit={handleSubmit}
            className="rounded px-4 md:px-8 pt-6 pb-8 mb-4 space-y-4 md:space-y-8 shadow-2xl border border-border bg-white"
          >
            <h1 className="text-text font-bold text-center text-2xl">
              Contact Us
            </h1>

            <div className="mb-4 lg:flex gap-10">
              <InputField
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
              />
              <InputField
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                type="email"
              />
            </div>

            <div className="mb-4 lg:flex gap-10">
              <InputField
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
              />
              <InputField
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
              />
            </div>

            <div className="mb-4">
              <textarea
                rows={4}
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="bg-transparent border-none rounded w-full py-2 px-3 text-text leading-tight focus:outline-none border-b-2 border-b-blue500 p-3 md:p-5"
              />
              <hr className="text-primary" />
            </div>

            {responseMessage && (
              <p className="text-center text-primary font-semibold">
                {responseMessage}
              </p>
            )}

            <div className="flex items-center justify-center md:justify-between">
              <button
                type="submit"
                disabled={loading}
                className="border transition ease-in-out hover:bg-primary duration-300 border-primary shadow-2xl text-primary hover:text-[#ffff] text-sm font-semibold px-4 md:px-5 py-2 flex items-center gap-1 mt-2 text-center"
              >
                {loading ? (
                  <p className="flex gap-2 justify-center items-center">
                    Sending <FaSpinner className="animate-spin text-lg" />
                  </p>
                ) : (
                  "Send Quote"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
