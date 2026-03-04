import React from "react";
import { Users, ArrowRight } from "lucide-react";
import Button from "./Button";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen pt-16 flex items-center bg-white overflow-hidden"
    >
      <div className="max-w-[80rem] w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16 lg:py-24">
          {/* Left – Image */}
          <div className="relative flex justify-center order-2 lg:order-1">
            {/* Background shape */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-red-100 to-red-200 opacity-70" />
            </div>

            {/* Image */}
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl w-64 h-80 md:w-80 md:h-96">
              <img
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=640&q=80"
                alt="Eco-friendly lifestyle – lush green plants"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating badge */}
            <div className="absolute bottom-4 left-4 md:bottom-8 md:left-0 z-20 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3 border border-red-100">
              <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Users className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <p className="text-base font-extrabold text-gray-900 leading-none">
                  1000+
                </p>
                <p className="text-xs text-gray-500 mt-0.5">Happy Customers</p>
              </div>
            </div>
          </div>

          {/* Right – Content */}
          <div className="flex flex-col gap-6 order-1 lg:order-2 text-center lg:text-left">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200 text-red-700 text-sm font-semibold px-4 py-2 rounded-full w-fit mx-auto lg:mx-0">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              Eco-Friendly & Sustainable
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight">
              Sustainable Living Starts With{" "}
              <span className="text-red-600">phuocEco</span>
            </h1>

            {/* Sub-headline */}
            <p className="text-xl md:text-2xl font-medium text-gray-600">
              Eco-friendly solutions for a greener future.
            </p>

            {/* Description */}
            <p className="text-base text-gray-500 leading-relaxed max-w-lg mx-auto lg:mx-0">
              We believe small choices make a big difference. phuocEco brings
              you certified, affordable eco-products that help you live
              sustainably without compromising quality or convenience. Join
              thousands of conscious consumers making the planet better, one
              purchase at a time.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="primary" size="lg" ariaLabel="Shop Now">
                Shop Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="secondary" size="lg" ariaLabel="Learn More">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
