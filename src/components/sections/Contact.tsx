import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import Section from "../layout/Section";
import { fadeUp, staggerContainer } from "../../animations/variants";
import mapImage from "../../assets/map.png";

const Contact: React.FC = () => {
  return (
    <Section
      id="contact"
      variant="muted"
      variants={fadeUp}
    >
      <motion.div
        className="grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:items-start"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Contact info */}
        <motion.div className="space-y-6" variants={fadeUp}>
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#00c9a7]">
              Contact
            </p>
            <h2 className="heading-2">Let’s design your learning path</h2>
            <p className="body-text">
              Tell us about your team, goals, or upcoming initiative. We’ll
              recommend the best programs for you or your organization.
            </p>
          </div>

          <div className="space-y-4 text-sm text-gray-700">
            <div className="flex items-start gap-3">
              <div className="icon-pill bg-[#00c9a7]/10">
                <MapPin className="h-4 w-4 text-[#00c9a7]" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-medium text-gray-900">
                  S1.01 Vinhomes Grand Park
                </span>
                <span>District 9, Ho Chi Minh City</span>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Toa+S1.01+Vinhomes+Grand+Park+Quan+9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#00c9a7] hover:text-[#00b397]"
                >
                  Xem trên Google Maps
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="icon-pill bg-[#00c9a7]/10">
                <Phone className="h-4 w-4 text-[#00c9a7]" />
              </div>
              <a
                href="tel:0983131727"
                className="font-medium text-gray-900 hover:text-[#00b397]"
              >
                0983 131 727
              </a>
            </div>

            <div className="flex items-center gap-3">
              <div className="icon-pill bg-[#00c9a7]/10">
                <Mail className="h-4 w-4 text-[#00c9a7]" />
              </div>
              <a
                href="mailto:tranhuuphuoccp@gmail.com"
                className="font-medium text-gray-900 hover:text-[#00b397]"
              >
                tranhuuphuoccp@gmail.com
              </a>
            </div>

            {/* Google Map image */}
            <div className="mt-4 max-w-md overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
              <img
                src={mapImage}
                alt="phuocEco Academy location on Google Maps"
                className="h-56 w-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Contact form (UI only) */}
        <motion.div
          className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
          variants={fadeUp}
        >
          <form className="space-y-4" aria-label="Contact form">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <label
                  htmlFor="name"
                  className="text-xs font-medium uppercase tracking-[0.16em] text-gray-600"
                >
                  Full name
                </label>
                <input
                  id="name"
                  type="text"
                  className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm outline-none transition-colors focus:border-[#00c9a7] focus:ring-1 focus:ring-[#00c9a7]"
                  placeholder="Your name"
                />
              </div>
              <div className="space-y-1.5">
                <label
                  htmlFor="email"
                  className="text-xs font-medium uppercase tracking-[0.16em] text-gray-600"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm outline-none transition-colors focus:border-[#00c9a7] focus:ring-1 focus:ring-[#00c9a7]"
                  placeholder="Work email"
                />
              </div>
            </div>
            <div className="space-y-1.5">
              <label
                htmlFor="message"
                className="text-xs font-medium uppercase tracking-[0.16em] text-gray-600"
              >
                What are you looking for?
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm outline-none transition-colors focus:border-[#00c9a7] focus:ring-1 focus:ring-[#00c9a7]"
                placeholder="E.g. program for a team of 10, in‑house workshop, learning roadmap consultation..."
              />
            </div>
            <button
              type="button"
              className="ui-button ui-button--md ui-button--primary w-full"
            >
              Submit
            </button>
            <p className="subtext text-[11px]">
              By submitting this form, you agree that phuocEco Academy may
              contact you and send information related to our learning programs.
            </p>
          </form>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default Contact;

