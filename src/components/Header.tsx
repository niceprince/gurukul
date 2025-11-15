"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { path: "/", label: "होम" },
    { path: "/anathalay", label: "अनाथालय" },
    { path: "/about", label: "हमारे बारे में" },
    { path: "/contact", label: "संपर्क" },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <header className="bg-gradient-to-br from-red-900 via-rose-800 to-red-900 sticky top-0 z-50 w-full backdrop-blur-sm border-rose-100 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-30">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-40 flex items-center justify-center transition-all duration-300">
              {/* <span className="text-white font-bold text-xl">ॐ</span> */}
              <Image
                src="/images/sri-premdarshnanad-gurukul-logo.svg"
                alt="Shri Premdarshanand Ved Vidhya Gurukulam"
                width="200"
                height="200"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`text-base font-medium transition-all duration-300 relative pb-1 ${
                  isActive(link.path)
                    ? "text-white"
                    : "text-yellow-400 hover:text-white"
                }`}
              >
                {link.label}
                {isActive(link.path) && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600 rounded-full"></span>
                )}
              </Link>
            ))}
          </nav>

          {/* CTA Button
          <div className="hidden md:block">
            <button className="bg-gradient-to-r from-red-600 to-rose-500 hover:from-red-700 hover:to-rose-600 text-white shadow-lg hover:shadow-xl transition-all duration-300">
              Enroll Now
            </button>
          </div> */}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-red-600 hover:bg-rose-50 rounded-lg transition-colors duration-200"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-rose-100">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-base font-medium px-4 py-2 rounded-lg transition-all duration-300 ${
                    isActive(link.path)
                      ? "text-red-600 bg-rose-50"
                      : "text-gray-700 hover:text-red-600 hover:bg-rose-50"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="px-4 pt-2">
                <button className="w-full bg-gradient-to-r from-red-600 to-rose-500 hover:from-red-700 hover:to-rose-600 text-white shadow-lg">
                  Enroll Now
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
