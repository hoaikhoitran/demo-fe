import React from "react";
import { Star, Quote } from "lucide-react";
import type { Testimonial } from "../types";

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Linh Nguyen",
    role: "Environmental Blogger",
    avatar: "https://i.pravatar.cc/80?img=47",
    rating: 5,
    review:
      "phuocEco completely changed how I shop. Every product I've ordered has been high quality, genuinely eco-certified, and delivered faster than expected. Highly recommend!",
  },
  {
    id: 2,
    name: "Minh Tran",
    role: "Software Engineer",
    avatar: "https://i.pravatar.cc/80?img=12",
    rating: 5,
    review:
      "I was skeptical that sustainable products could be affordable. phuocEco proved me wrong. The prices are great, packaging is minimal, and the customer service is stellar.",
  },
  {
    id: 3,
    name: "Sarah Miller",
    role: "Wellness Coach",
    avatar: "https://i.pravatar.cc/80?img=32",
    rating: 5,
    review:
      "From bamboo kitchenware to organic cleaning supplies — phuocEco has it all. I love that every purchase offsets carbon. It feels great knowing I'm making a real difference.",
  },
];

interface StarRatingProps {
  rating: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  return (
    <div className="flex gap-1" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
        />
      ))}
    </div>
  );
};

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  const { name, role, avatar, rating, review } = testimonial;
  return (
    <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl border border-gray-100 hover:border-red-200 transition-all duration-300 hover:-translate-y-1 flex flex-col gap-5 h-full">
      {/* Quote icon */}
      <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center">
        <Quote className="w-5 h-5 text-red-500" />
      </div>

      {/* Review text */}
      <p className="text-gray-600 leading-relaxed text-base flex-1">
        "{review}"
      </p>

      {/* Star rating */}
      <StarRating rating={rating} />

      {/* Author */}
      <div className="flex items-center gap-3 pt-2 border-t border-gray-100">
        <img
          src={avatar}
          alt={`${name} avatar`}
          className="w-11 h-11 rounded-full object-cover shadow-sm ring-2 ring-red-100"
        />
        <div>
          <p className="font-bold text-gray-900 text-sm">{name}</p>
          <p className="text-gray-500 text-xs">{role}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-red-50 border border-red-200 text-red-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
            Customer Stories
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            Loved by <span className="text-red-600">Eco Warriors</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Thousands of customers trust phuocEco to make greener choices every
            day. Here's what some of them say.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
