import React from "react";
import {
  Facebook,
  Instagram,
  Leaf,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";
import type { FooterLink } from "../../types";
import Container from "./Container";

const quickLinks: FooterLink[] = [
  { label: "Home", href: "#home" },
  { label: "Why phuocEco", href: "#why-choose" },
  { label: "Products", href: "#why-choose" },
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
    className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-gray-300 hover:text-white transition-colors"
  >
    {children}
  </a>
);

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-white text-gray-700">
      <div className="border-t border-gray-100">
        <Container className="py-14">
          <div className="rounded-3xl bg-slate-50/80 px-6 py-10 shadow-[0_18px_45px_rgba(15,23,42,0.06)] ring-1 ring-gray-100 md:px-10">
            <div className="grid gap-10 md:grid-cols-4">
            {/* Brand */}
            <div className="space-y-5 md:col-span-2 lg:col-span-1">
              <a
                href="#home"
                className="inline-flex items-center gap-2"
                aria-label="phuocEco home"
              >
                <div className="w-9 h-9 rounded-xl bg-[#00c9a7] flex items-center justify-center">
                  <Leaf className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg font-semibold tracking-tight text-gray-900">
                  phuoc<span className="text-[#00c9a7]">Eco</span>
                </span>
              </a>
              <p className="subtext text-gray-500">
                Empowering sustainable lifestyles with carefully curated,
                eco‑friendly products. Small choices, big impact.
              </p>
              <div className="flex flex-wrap gap-3">
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

            {/* Quick links */}
            <div className="space-y-4">
              <h3 className="heading-3 text-sm text-gray-900">Navigation</h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={`${link.href}-${link.label}`}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div className="space-y-4">
              <h3 className="heading-3 text-sm text-gray-900">Legal</h3>
              <ul className="space-y-2">
                {legalLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h3 className="heading-3 text-sm text-gray-900">Contact</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start gap-3">
                  <div className="icon-pill bg-gray-100">
                    <MapPin className="w-4 h-4 text-[#00c9a7]" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span>S1.01 Vinhomes Grand Park</span>
                    <span>District 9, Ho Chi Minh City</span>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Toa+S1.01+Vinhomes+Grand+Park+Quan+9"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#00c9a7] hover:text-[#00b397]"
                    >
                      View on Google Maps
                    </a>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <div className="icon-pill bg-gray-100">
                    <Phone className="w-4 h-4 text-[#00c9a7]" />
                  </div>
                  <a
                    href="tel:0983131727"
                    className="hover:text-gray-900 transition-colors"
                  >
                    0983 131 727
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <div className="icon-pill bg-gray-100">
                    <Mail className="w-4 h-4 text-[#00c9a7]" />
                  </div>
                  <a
                    href="mailto:tranhuuphuoccp@gmail.com"
                    className="hover:text-gray-900 transition-colors"
                  >
                    tranhuuphuoccp@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        </Container>
      </div>

      <Container className="py-5 flex flex-col gap-2 items-center justify-between md:flex-row text-xs text-gray-500">
        <p>© {currentYear} phuocEco. All rights reserved.</p>
        <p>Designed for a cleaner, greener future.</p>
      </Container>
    </footer>
  );
};

export default Footer;

