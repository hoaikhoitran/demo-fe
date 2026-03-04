import React from "react";
import {
  Leaf,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import type { FooterLink } from "../types";

const quickLinks: FooterLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#features" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const legalLinks: FooterLink[] = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Cookie Policy", href: "#" },
];

interface SocialIconProps {
  href: string;
  ariaLabel: string;
  children: React.ReactNode;
}

const SocialIcon: React.FC<SocialIconProps> = ({
  href,
  ariaLabel,
  children,
}) => (
  <a
    href={href}
    aria-label={ariaLabel}
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 bg-white/10 hover:bg-red-600 rounded-xl flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300"
  >
    {children}
  </a>
);

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-gray-900 text-white">
      {/* Main footer content */}
      <div className="max-w-[80rem] w-full mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="flex flex-col gap-5 lg:col-span-1">
            <a
              href="#home"
              className="flex items-center gap-2 group"
              aria-label="phuocEco home"
            >
              <div className="w-9 h-9 bg-red-600 rounded-xl flex items-center justify-center shadow-md">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-extrabold text-white">
                phuocEco
              </span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering sustainable lifestyles with certified eco-friendly
              products. Together we can make the planet greener, one choice at a
              time.
            </p>
            {/* Social icons */}
            <div className="flex gap-3 flex-wrap">
              <SocialIcon href="#" ariaLabel="Facebook">
                <Facebook className="w-4 h-4" />
              </SocialIcon>
              <SocialIcon href="#" ariaLabel="Instagram">
                <Instagram className="w-4 h-4" />
              </SocialIcon>
              <SocialIcon href="#" ariaLabel="Twitter">
                <Twitter className="w-4 h-4" />
              </SocialIcon>
              <SocialIcon href="#" ariaLabel="YouTube">
                <Youtube className="w-4 h-4" />
              </SocialIcon>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-5">
            <h3 className="text-white font-bold text-base">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-red-400 transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-5">
            <h3 className="text-white font-bold text-base">Legal</h3>
            <ul className="flex flex-col gap-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-red-400 transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-5">
            <h3 className="text-white font-bold text-base">Contact Us</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-red-400" />
                </div>
                <span className="text-gray-400 text-sm leading-relaxed">
                  123 Green Street, Eco City, Vietnam
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-red-400" />
                </div>
                <a
                  href="tel:+84901234567"
                  className="text-gray-400 text-sm hover:text-red-400 transition-colors duration-200"
                >
                  +84 90 123 4567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-red-400" />
                </div>
                <a
                  href="mailto:hello@phuoceco.com"
                  className="text-gray-400 text-sm hover:text-red-400 transition-colors duration-200"
                >
                  hello@phuoceco.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[80rem] w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © {currentYear} phuocEco. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm text-center sm:text-right">
            Made with ❤️ for a greener planet
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
