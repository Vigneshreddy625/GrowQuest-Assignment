"use client";
import React, { useState } from 'react';

export default function HomePage() {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-50 to-white">
      <header className="shadow-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <img
            src="https://growquest.in/wp-content/uploads/2024/01/growquest-logo-main.png"
            alt="GrowQuest Logo"
            className="h-12 w-48 md:w-auto"
          />
          <nav className="hidden md:flex space-x-6 text-gray-700 items-center">
            <a href="#about" className="hover:text-blue-600">
              About Us
            </a>
            <a href="#services" className="hover:text-blue-600">
              Services
            </a>
            <a href="#contact" className="hover:text-blue-600">
              Contact
            </a>
            <div className="relative ml-4 flex items-center gap-2 pl-2 border-l-2 border-gray-400 text-sm cursor-pointer">
              <img
                className="w-8 h-8 rounded-full"
                src="https://via.placeholder.com/150"
                alt="User Avatar"
              />
              <div className="flex flex-col text-black text-sm">
                <p className="font-medium text-center md:text-start text-xs md:text-sm">Vignesh Reddy</p>
                <p className="text-gray-600 text-xs md:text-sm">vigneshreddy@growquest.in</p>
              </div>
            </div>
          </nav>
          <div className="md:hidden ml-4 relative">
            <div className="flex items-center gap-2 pl-2 border-l-2 border-gray-400 text-sm cursor-pointer"
              onClick={toggleDropdown}>
              <img
                className="w-8 h-8 rounded-full"
                src="https://via.placeholder.com/150"
                alt="User Avatar"
              />
            </div>
            {showDropdown && (
              <div className="absolute right-0 mt-12 w-48 bg-gray-700 rounded-lg shadow-lg py-2">
                <div className="px-4 py-2 flex flex-col justify-center items-center gap-4">
                  <p className="font-medium text-center md:text-start text-xs md:text-sm">Vignesh Reddy</p>
                  <p className="text-white text-xs md:text-sm">vigneshreddy@growquest.in</p>
                  <a href="#about" className="block text-white hover:text-blue-600">
                    About Us
                  </a>
                  <a href="#services" className="block text-white hover:text-blue-600">
                    Services
                  </a>
                  <a href="#contact" className="block text-white hover:text-blue-600">
                    Contact
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>
      <main>
        <section className="h-96 flex items-center justify-center">
          <div className="p-10 rounded-lg text-center text-gray-700">
            <h1 className="text-5xl md:text-6xl font-bold">Welcome to GrowQuest Consulting</h1>
            <p className="text-2xl md:text-3xl mt-4">Scaling your startup's ARR with outcome selling</p>
          </div>
        </section>
        <section id="about" className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-gray-700 text-center">About Us</h2>
            <p className="mt-6 text-gray-700 text-center max-w-2xl mx-auto">
              GrowQuest Consulting helps B2B startups scale their Annual Recurring Revenue (ARR) through a unique approach known as outcome selling.
              We focus on customer discovery, outcome selling, predictable revenue, and GTM & incentives to help you succeed.
            </p>
          </div>
        </section>
        <section id="services" className="bg-green-500 py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-white text-center">Our Services</h2>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="p-8 bg-white rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
                <h3 className="text-2xl font-semibold text-gray-800">Customer Discovery</h3>
                <p className="mt-4 text-gray-600">Uncover real customer pain points and focus on the right prospects.</p>
              </div>
              <div className="p-8 bg-white rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
                <h3 className="text-2xl font-semibold text-gray-800">Outcome Selling</h3>
                <p className="mt-4 text-gray-600">Emphasize value and outcomes to avoid price wars and win more deals.</p>
              </div>
              <div className="p-8 bg-white rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
                <h3 className="text-2xl font-semibold text-gray-800">Predictable Revenue</h3>
                <p className="mt-4 text-gray-600">Establish scalable processes for sales teams to improve productivity.</p>
              </div>
              <div className="p-8 bg-white rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
                <h3 className="text-2xl font-semibold text-gray-800">GTM & Incentives</h3>
                <p className="mt-4 text-gray-600">Craft and align go-to-market strategies and incentives for success.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="py-10">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-gray-800 text-center">Contact Us</h2>
            <p className="mt-6 text-gray-700 text-center max-w-xl mx-auto">We'd love to hear from you! Reach out to us to learn more about how we can help your startup scale.</p>
            <div className="mt-8 flex justify-center">
              <a href="mailto:info@growquest.in" className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300">Email Us</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}