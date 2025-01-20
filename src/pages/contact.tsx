"use client";

import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const webhookUrl = "https://discordapp.com/api/webhooks/1330608742722441247/BbdnEX88oexQDK8ytwYFtADBCUobn2sBEBIlj2UbgB3avrH506CKQppRPYA_hZ4LVWuv";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSuccess(false);
    setError(false);

    const timestamp = new Date().toLocaleString();

    const discordMessage = {
      content: null,
      embeds: [
        {
          title: "📩 New Inquiry Received",
          description: `**Name:** ${formData.name}\n**Email:** ${formData.email}\n**Phone:** ${formData.phone}\n**Subject:** ${formData.subject}\n**Message:**\n${formData.message}`,
          color: 5814783,
          footer: {
            text: `Received on ${timestamp}`,
          },
        },
      ],
    };

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(discordMessage),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    }
  };

  return (
    <div
      id="contact"
      className="min-h-screen text-white py-20 px-8 md:px-20 flex items-center justify-center"
    >
      <div className="max-w-4xl w-full bg-[#212327] p-8 md:p-12 rounded-3xl shadow-lg border border-gray-700">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-400">
            Have an inquiry or just want to say hi? Fill out the form below, and I’ll get back to you.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-gray-400 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-[#131516] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#BBFF00] text-gray-300"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-400 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-[#131516] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#BBFF00] text-gray-300"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-gray-400 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-[#131516] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#BBFF00] text-gray-300"
                placeholder="Enter your phone number"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-gray-400 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-[#131516] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#BBFF00] text-gray-300"
                placeholder="Enter the subject"
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-400 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-[#131516] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#BBFF00] text-gray-300"
              placeholder="Enter your message"
              rows={5}
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-8 py-3 bg-[#BBFF00] text-black font-medium rounded-full shadow-lg hover:bg-[#7b9929] transition"
            >
              Send Message
            </button>
          </div>
          {success && (
            <p className="text-green-500 mt-4 text-center">Message sent successfully!</p>
          )}
          {error && (
            <p className="text-red-500 mt-4 text-center">Something went wrong. Please try again.</p>
          )}
        </form>
      </div>
    </div>
  );
}
