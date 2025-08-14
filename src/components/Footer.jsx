import React from "react";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin, FaLocationDot, FaPhone, FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import facebookIcon from "../assets/social-links/1.png";
import instagramIcon from "../assets/social-links/2.png"
import linkedinIcon from "../assets/social-links/3.png"
import twitterIcon from "../assets/social-links/4.png"

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    "Residential Construction",
    "Commercial Projects",
    "Renovations & Remodeling",
    "Interior Design",
  ];

  const socialLinks = [
    { name: "Facebook", icon: facebookIcon, href: "https://www.facebook.com/" },
    { name: "Instagram", icon: instagramIcon, href: "https://www.instagram.com/" },
    { name: "LinkedIn", icon: linkedinIcon, href: "https://www.linkedin.com/" },
    { name: "Twitter", icon: twitterIcon, href: "https://x.com/" },
  ];

  return (
    <footer className="bg-[#1a1a1a] text-white">
      <div className="container py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="footer-about">
            <h3 className="text-2xl font-bold mb-4">
              <img className='w-[200px]' src="/logo-white.png" alt="" />
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Building dreams with quality, integrity, and innovation. Your
              trusted construction partner for over 15+ years.
            </p>
            <div className="flex space-x-5">
              {socialLinks.map((social, index) => (
                <a
                  target="_blank"
                  key={index}
                  href={social.href}
                  title={social.name}
                >
                  <img className="max-md:w-7 w-9 hover:scale-110 transition-all duration-200" src={social.icon} alt={social.name} />
                </a>
              ))}
            </div>
          </div>

          <div className="footer-links">
            <h4 className="text-lg font-semibold mb-4 text-yellow-500">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-[#0083cf] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-services">
            <h4 className="text-lg font-semibold mb-4 text-yellow-500">
              Our Services
            </h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#services" className="text-gray-300 text-sm">{service}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-contact">
            <h4 className="text-lg font-semibold mb-4 text-yellow-500">
              Contact Info
            </h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start space-x-2">
                <span className="text-red-500 text-xl"><FaLocationDot /></span>
                <span className="text-sm">
                  123 Main Street
                  <span className="block">Mumbai, Maharashtra 400001</span>
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-[#0083cf] text-xl"><FaPhone /></span>
                <span className="text-sm">+91 9292929292</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-yellow-500 text-xl"><MdEmail /></span>
                <span className="text-sm">info@buildpro.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} BuildPro Constructions. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-400 hover:text-yellow-500 text-sm transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-yellow-500 text-sm transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
