import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white p-8">
      {/* Social Media Icons */}
      <div className=" justify-center space-x-4 mb-8">
        <a href="#" className="text-2xl">
          <FaFacebook />
        </a>
        <a href="#" className="text-2xl">
          <FaTwitter />
        </a>
        <a href="#" className="text-2xl">
          <FaInstagram />
        </a>
      </div>

      {/* Contact Information */}
      <div className="text-center mb-8">
        <p className="text-lg">
          <FaEnvelope className="inline-block mr-2" />
          info@example.com
        </p>
        <p className="text-lg">
          <FaPhone className="inline-block mr-2" />
          +1 (123) 456-7890
        </p>
      </div>

      {/* Navigation Menu */}
      <nav className="flex justify-center space-x-4">
        <a href="#" className="hover:text-gray-400">
          Home
        </a>
        <a href="#" className="hover:text-gray-400">
          About
        </a>
        <a href="#" className="hover:text-gray-400">
          Services
        </a>
        <a href="#" className="hover:text-gray-400">
          Contact
        </a>
      </nav>

      {/* Copyright */}
      <div className="text-center mt-8">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
