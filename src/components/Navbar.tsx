import React, { useState } from "react";
import { Menu, X, Leaf } from "lucide-react";
import Button from "./Button";
import type { NavLink } from "../types";

const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#features" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = (): void => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-2 group"
            aria-label="phuocEco home"
          >
            <div className="w-9 h-9 bg-red-600 rounded-xl flex items-center justify-center shadow-md group-hover:bg-red-700 transition-colors duration-200">
              <Leaf className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-extrabold text-red-600 tracking-tight">
              phuocEco
            </span>
          </a>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-gray-600 font-medium hover:text-red-600 transition-colors duration-200 text-sm relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300" />
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:flex">
            <Button variant="primary" size="sm" ariaLabel="Get Started">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            className="md:hidden p-2 rounded-xl text-gray-600 hover:text-red-600 hover:bg-red-50 transition-colors duration-200 cursor-pointer"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <ul className="flex flex-col px-4 py-4 gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="block px-4 py-3 text-gray-700 font-medium rounded-xl hover:bg-red-50 hover:text-red-600 transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <Button
                variant="primary"
                size="sm"
                className="w-full"
                ariaLabel="Get Started"
              >
                Get Started
              </Button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
