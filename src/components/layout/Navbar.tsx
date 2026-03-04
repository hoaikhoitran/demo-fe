import React, { useState } from "react";
import { Leaf, Menu, PhoneCall, X } from "lucide-react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import type { NavLink } from "../../types";
import Container from "./Container";
import { navbarScrollVariant } from "../../animations/variants";

const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "Programs", href: "#programs" },
  { label: "Why Us", href: "#why-us" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 8);
  });

  const toggleMenu = (): void => setIsMenuOpen((open) => !open);
  const closeMenu = (): void => setIsMenuOpen(false);

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50 border-b border-gray-100/60 backdrop-blur-md"
      variants={navbarScrollVariant}
      animate={isScrolled ? "scrolled" : "initial"}
      initial="initial"
    >
      <Container>
        <nav
          className="flex h-[72px] items-center justify-between"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-2"
            aria-label="phuocEco Academy home"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#00c9a7] shadow-md">
              <Leaf className="h-5 w-5 text-white" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-xs font-medium uppercase tracking-[0.18em] text-gray-500">
                phuocEco
              </span>
              <span className="text-sm font-semibold tracking-tight text-gray-900">
                Academy
              </span>
            </div>
          </a>

          {/* Desktop navigation */}
          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="group relative text-sm font-medium text-gray-600 transition-colors duration-200 hover:text-gray-900"
                >
                  {link.label}
                  <span className="pointer-events-none absolute inset-x-0 -bottom-1 h-0.5 origin-left scale-x-0 bg-[#00c9a7] transition-transform duration-200 group-hover:scale-x-100" />
                </a>
              </li>
            ))}
          </ul>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Desktop call-to-action */}
            <a
              href="tel:0983131727"
              className="hidden items-center gap-2 rounded-full bg-[#00c9a7] px-4 py-2 text-xs font-semibold text-white shadow-sm transition-transform transition-colors duration-200 hover:scale-[1.03] hover:bg-[#00b397] md:inline-flex"
            >
              <PhoneCall className="h-4 w-4" />
              Consult Now
            </a>

            {/* Mobile menu toggle */}
            <button
              type="button"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white/80 text-gray-700 shadow-sm backdrop-blur-sm transition-colors md:hidden hover:bg-white"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </nav>
      </Container>

      {/* Mobile nav */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="border-t border-gray-100 bg-white md:hidden"
          >
            <Container className="py-3">
              <ul className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={closeMenu}
                      className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <li className="pt-2">
                  <a
                    href="tel:0983131727"
                    onClick={closeMenu}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#00c9a7] px-4 py-2 text-sm font-semibold text-white shadow-sm transition-transform duration-200 hover:scale-[1.03] hover:bg-[#00b397]"
                  >
                    <PhoneCall className="h-4 w-4" />
                    Gọi tư vấn
                  </a>
                </li>
              </ul>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;

