import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Input } from "./ui/input";
import { Link } from "react-router-dom";

const Footer = () => {
  const quickLinks = [
    { label: "Home", link: "/" },
    { label: "About", link: "/about" },
    { label: "Product", link: "/product" },
  ];

  const contacts = [
    { icon: MapPin, text: "123 Fashion St, New York" },
    { icon: Phone, text: "+1 (555) 123-4567" },
    { icon: Mail, text: "support@stylehub.com" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">
      {/* Layer 1: Brand and tagline */}
      <div className="border-b border-gray-700 py-8 text-center">
        <h2 className="text-3xl font-bold text-white">StyleHub</h2>
        <p className="text-gray-400 mt-2 text-sm">
          Fashion for every season. Trendy. Affordable. Sustainable.
        </p>
      </div>

      {/* Layer 2: Links, Contact, Newsletter */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-16 py-10">
        {/* Column 1: Navigation */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {quickLinks.map((quickLink, index) => (
              <li key={index}>
                <Link to={quickLink.link} className="hover:text-white">
                  {quickLink.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 2: Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            {contacts.map((contact, index) => (
              <li key={index} className="flex items-center gap-2">
                <contact.icon size={16} /> {contact.text}
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Join Our Newsletter
          </h3>
          <p className="text-sm text-gray-400 mb-3">
            Get the latest updates on new arrivals and exclusive discounts.
          </p>
          <form className="flex">
            <Input
              type="email"
              placeholder="Your email"
              className="w-full px-3 py-2 rounded-none rounded-l-md text-gray-900 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-pink-500 hover:bg-pink-600 text-white px-4 rounded-r-md font-medium"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Layer 3: Social icons and copyright */}
      <div className="border-t border-gray-700 py-4 flex flex-col md:flex-row items-center justify-between px-6 md:px-16 text-sm">
        <p className="text-gray-400 text-center md:text-left">
          © {new Date().getFullYear()} StyleHub. All rights reserved.
        </p>
        <div className="flex gap-4 mt-3 md:mt-0">
          <a href="#" className="hover:text-white">
            <Facebook size={18} />
          </a>
          <a href="#" className="hover:text-white">
            <Instagram size={18} />
          </a>
          <a href="#" className="hover:text-white">
            <Twitter size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
