import React from "react";
import type { CSSProperties } from "react";
import useParallax from "../../hooks/useParallax";
import useFadeInOnScroll from "../../hooks/useFadeInOnScroll.ts";

const Hero: React.FC = () => {
  const { offsetY: backgroundOffsetY } = useParallax({ multiplier: 0.25 });

  const { ref: visualRef, isVisible: visualVisible } = useFadeInOnScroll({
    rootMargin: "0px 0px -80px 0px",
    threshold: 0.2,
    once: true,
  });

  const { ref: contentRef, isVisible: contentVisible } = useFadeInOnScroll({
    rootMargin: "0px 0px -80px 0px",
    threshold: 0.25,
    once: true,
  });

  const fadeBaseClass =
    "transition-all duration-[700ms] will-change-transform will-change-opacity";

  const fadeStyle: CSSProperties = {
    transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-[#ecfffb] via-white to-[#d1faf5]"
    >
      {/* Parallax background circles */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div
          className="absolute -top-32 -left-24 h-72 w-72 rounded-full bg-[#00c9a7]/20 blur-3xl"
          style={{ transform: `translateY(${backgroundOffsetY * 0.6}px)` }}
        />
        <div
          className="absolute -bottom-32 -right-24 h-80 w-80 rounded-full bg-[#00c9a7]/16 blur-3xl"
          style={{ transform: `translateY(${backgroundOffsetY * 0.4}px)` }}
        />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-16 px-4 py-20 md:px-6 lg:flex-row lg:items-center lg:py-28">
        {/* Left: Content (matches reference layout) */}
        <div
          ref={contentRef}
          className={`${fadeBaseClass} ${
            contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          } max-w-xl`}
          style={fadeStyle}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#00c9a7]">
            Sustainable living, made simple
          </p>
          <h1 className="mt-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl lg:text-6xl">
            Sustainable Living Starts With{" "}
            <span className="text-[#00c9a7]">phuocEco</span>
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            Discover curated, eco‑friendly products that fit your life — from
            everyday essentials to future‑ready upgrades.
          </p>
          <p className="mt-4 max-w-lg text-sm text-gray-500">
            Every order is carefully vetted for impact, certified where it
            matters, and shipped with carbon‑offset delivery so you can feel
            good about every choice.
          </p>

          {/* Search-style CTA row */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-stretch">
            <div className="flex flex-1 items-center rounded-xl bg-white/80 px-4 py-3 shadow-sm ring-1 ring-gray-200 backdrop-blur-sm">
              <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-gray-100">
                <span className="text-xs text-gray-500">🔍</span>
              </div>
              <p className="text-xs text-gray-500">
                Discover eco collections and everyday essentials
              </p>
            </div>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-xl bg-[#00c9a7] px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#00b397] focus:outline-none focus:ring-2 focus:ring-[#00c9a7] focus:ring-offset-2"
            >
              Shop eco collections
            </button>
          </div>

          <div className="mt-4 flex flex-wrap gap-6 text-sm text-gray-600">
            <div>
              <p className="font-semibold text-gray-900">Carbon‑offset delivery</p>
              <p className="text-xs text-gray-500">on every qualifying order</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900">Eco‑certified partners</p>
              <p className="text-xs text-gray-500">carefully verified suppliers</p>
            </div>
          </div>
        </div>

        {/* Right: Stacked image mockups */}
        <div
          ref={visualRef}
          className={`${fadeBaseClass} ${
            visualVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          } flex justify-center lg:justify-end`}
          style={fadeStyle}
        >
          <div className="relative flex w-full max-w-md items-center justify-center">
            {/* Large image */}
            <div className="relative h-64 w-44 overflow-hidden rounded-3xl bg-gray-200 shadow-xl sm:h-72 sm:w-52 lg:h-80 lg:w-60">
              <img
                src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=600&q=80"
                alt="Group of people collaborating with laptops"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Secondary image */}
            <div className="relative ml-4 h-52 w-36 overflow-hidden rounded-3xl bg-gray-200 shadow-xl sm:h-64 sm:w-40 lg:h-72 lg:w-44">
              <img
                src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=600&q=80"
                alt="Learners collaborating in library"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Floating benefit card */}
            <div className="absolute -bottom-6 right-0 w-52 rounded-2xl bg-white px-4 py-3 text-xs shadow-xl sm:-bottom-8 sm:right-2">
              <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#00c9a7]">
                Benefits
              </p>
              <ul className="space-y-1 text-[11px] text-gray-600">
                <li>Carbon‑offset delivery on every qualifying order</li>
                <li>Eco‑certified partners and verified suppliers</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* SVG wave divider */}
      <div className="mt-10">
        <svg
          className="block w-full"
          viewBox="0 0 1440 120"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            d="M0,64L48,80C96,96,192,128,288,138.7C384,149,480,139,576,117.3C672,96,768,64,864,58.7C960,53,1056,75,1152,90.7C1248,107,1344,117,1392,122.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;

