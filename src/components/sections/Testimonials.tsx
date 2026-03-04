import React from "react";
import { Quote } from "lucide-react";
import Section from "../layout/Section";
import Card from "../ui/Card";
import Badge from "../ui/Badge";
import type { Testimonial } from "../../types";

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Linh Nguyen",
    role: "Product Manager, Climate‑Tech",
    avatar: "https://i.pravatar.cc/80?img=47",
    rating: 5,
    review:
      "The Academy completely reframed how I design features. Every sprint now includes measurable sustainability impact, not just metrics.",
  },
  {
    id: 2,
    name: "Minh Tran",
    role: "Founder, Green Startup",
    avatar: "https://i.pravatar.cc/80?img=12",
    rating: 5,
    review:
      "Within three months we reshaped our business model with a stronger ESG narrative and landed two strategic pilot partners.",
  },
  {
    id: 3,
    name: "Sarah Miller",
    role: "UX Lead, EdTech",
    avatar: "https://i.pravatar.cc/80?img=32",
    rating: 5,
    review:
      "I left with a portfolio of green case studies and a global network of peers who genuinely care about climate innovation.",
  },
  {
    id: 4,
    name: "Nguyen Thi Hoa",
    role: "BA, Product Owner",
    avatar: "https://cdn.hnou.edu.vn/wp-content/uploads/2025/10/anh-gai-xinh-vu-to-viet-nam-1.jpg",
    rating: 5,
    review:
      "The Academy completely reframed how I design features. Every sprint now includes measurable sustainability impact, not just metrics.",
  },{
    id: 5,
    name: "Khoi Tran",
    role: "Product Manager, Dev-Ops",
    avatar: "https://scontent.fhan3-4.fna.fbcdn.net/v/t39.30808-1/489745900_1115007503729568_111929768717516772_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=104&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeG1SZhJfaJD8kAQ08FZ6kGue8K5BAn7PnN7wrkECfs-c1G8ewwzLU7rb6OrLcgED0MRbQNCsPHmTujAGAI7WkAo&_nc_ohc=ejXlwMVHUDwQ7kNvwENiAGl&_nc_oc=AdlZs4aQ9A4gk6esVOqQgIGmGNXJkLegumb4q-nrVQz22D_7-JDyxzMYRhEfd9CmBq8&_nc_zt=24&_nc_ht=scontent.fhan3-4.fna&_nc_gid=_qohxRYZXQYBoTPODxr6yw&_nc_ss=8&oh=00_AfwuiSCYkfwul0pRxBHPMZPN7c5IGIBBsTytymz-BnpAyQ&oe=69ADAACA",
    rating: 5,
    review:
      "The Academy completely reframed how I design features. Every sprint now includes measurable sustainability impact, not just metrics.",
  },
];

const Testimonials: React.FC = () => {
  const rollingTestimonials = [...testimonials, ...testimonials];

  return (
    <Section
      id="testimonials"
      variant="default"
    >
      <div className="space-y-10">
        <div className="max-w-2xl space-y-4">
          <Badge>Community Voices</Badge>
          <h2 className="heading-2">
            Trusted by{" "}
            <span className="text-[#00c9a7]">learners building the future</span>
          </h2>
          <p className="body-text">
            Hear from professionals who used phuocEco Academy to accelerate
            their careers, ventures, and impact.
          </p>
        </div>

        <div className="relative -mx-4 overflow-hidden px-4">
          <div className="flex gap-6">
            <div className="testimonials-marquee">
              {rollingTestimonials.map((testimonial) => (
                <div
                  key={`track1-${testimonial.id}-${testimonial.name}`}
                  className="testimonials-marquee-item"
                >
                  <Card className="h-full">
                    <div className="mb-3 flex items-center justify-between">
                      <div className="icon-pill bg-[#00c9a7]/10">
                        <Quote className="h-5 w-5 text-[#00c9a7]" />
                      </div>
                      <span className="text-xs font-medium text-[#00c9a7]">
                        {testimonial.rating.toFixed(1)} / 5.0
                      </span>
                    </div>
                    <p className="body-text text-sm text-gray-600">
                      “{testimonial.review}”
                    </p>
                    <div className="mt-4 flex items-center gap-3 pt-3">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="h-10 w-10 rounded-full object-cover"
                      />
                      <div>
                        <p className="text-sm font-semibold text-gray-900">
                          {testimonial.name}
                        </p>
                        <p className="text-xs text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>

            <div className="testimonials-marquee testimonials-marquee--slow">
              {rollingTestimonials.map((testimonial) => (
                <div
                  key={`track2-${testimonial.id}-${testimonial.name}`}
                  className="testimonials-marquee-item"
                >
                  <Card className="h-full">
                    <div className="mb-3 flex items-center justify-between">
                      <div className="icon-pill bg-[#00c9a7]/10">
                        <Quote className="h-5 w-5 text-[#00c9a7]" />
                      </div>
                      <span className="text-xs font-medium text-[#00c9a7]">
                        {testimonial.rating.toFixed(1)} / 5.0
                      </span>
                    </div>
                    <p className="body-text text-sm text-gray-600">
                      “{testimonial.review}”
                    </p>
                    <div className="mt-4 flex items-center gap-3 pt-3">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="h-10 w-10 rounded-full object-cover"
                      />
                      <div>
                        <p className="text-sm font-semibold text-gray-900">
                          {testimonial.name}
                        </p>
                        <p className="text-xs text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Testimonials;

