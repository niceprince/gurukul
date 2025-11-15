import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";
import { schoolInfo } from "@/mock/mock";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-red-900 via-rose-800 to-red-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Image
                src="/images/sri-premdarshnanad-gurukul-logo.svg"
                alt="Shri Premdarshanand Ved Vidhya Gurukulam"
                width="200"
                height="200"
                style={{ width: "100%", height: "auto" }}
              />
              {/* <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                <span className="text-yellow-300 font-bold text-lg">ॐ</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">{schoolInfo.name}</h3>
                <p className="text-xs text-rose-200">Gurukul</p>
              </div> */}
            </div>
            <p className="text-sm text-rose-100 leading-relaxed">
              🕉 श्री प्रेमदर्शनानन्द वेद विद्या गुरुकुलम् <br />
              अनाम नारायण सेवा गुरुकुलम् ट्रस्ट द्वारा संचालित
            </p>
            <p className="text-sm text-rose-100 leading-relaxed">
              पता: श्री शिव मन्दिर, ग्रीन एनक्लेव, चिपियाना बुजुर्ग, गौतम बुद्ध
              नगर – 201009, उ.प्र.
            </p>
            <p className="text-sm text-rose-100 leading-relaxed">
              Ph.: 9520559292, 7409272967, 8595600468
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-yellow-300">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-rose-100 hover:text-white transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-rose-100 hover:text-white transition-colors duration-200"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-rose-100 hover:text-white transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-rose-100 hover:text-white transition-colors duration-200"
                >
                  Admissions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-yellow-300">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone size={16} className="mt-1 text-rose-300" />
                <span className="text-sm text-rose-100">
                  {schoolInfo.phone}
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail size={16} className="mt-1 text-rose-300" />
                <span className="text-sm text-rose-100">
                  {schoolInfo.email}
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={16} className="mt-1 text-rose-300" />
                <span className="text-sm text-rose-100">
                  {schoolInfo.address}
                </span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-yellow-300">
              Follow Us
            </h4>
            <div className="flex space-x-4 mb-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300"
              >
                <Youtube size={18} />
              </a>
            </div>
            <p className="text-sm text-rose-100">
              Stay connected for updates and events
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-rose-700/50">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-rose-200">
              © 2025 श्री प्रेमदर्शनानन्द वेद विद्या गुरुकुलम् All rights
              reserved.
            </p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-sm text-rose-200 hover:text-white transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-sm text-rose-200 hover:text-white transition-colors duration-200"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
