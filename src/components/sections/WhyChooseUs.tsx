import React from "react";
import { motion } from "framer-motion";
import { Globe2, GraduationCap, Sparkles } from "lucide-react";
import Section from "../layout/Section";
import Card from "../ui/Card";
import Badge from "../ui/Badge";
import { fadeUp, hoverLift, staggerContainer } from "../../animations/variants";

const reasons = [
  {
    id: 1,
    icon: GraduationCap,
    title: "Senior‑level mentors",
    description:
      "Learn directly from practitioners who ship climate‑tech products, lead ESG roadmaps, and advise green startups.",
  },
  {
    id: 2,
    icon: Globe2,
    title: "Global, remote‑first",
    description:
      "Live online sessions, async projects, and cross‑timezone collaboration with peers across Asia and beyond.",
  },
  {
    id: 3,
    icon: Sparkles,
    title: "Portfolio‑ready outcomes",
    description:
      "Graduate with tangible case studies, venture concepts, and product demos that tell a compelling green story.",
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <Section
      id="why-us"
      variant="muted"
      variants={fadeUp}
    >
      <motion.div
        className="space-y-10"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="max-w-2xl space-y-4">
          <Badge>Why phuocEco Academy</Badge>
          <h2 className="heading-2">
            Built for ambitious{" "}
            <span className="text-emerald-600">climate‑conscious professionals</span>
          </h2>
          <p className="body-text">
            We design every cohort to be deeply practical, community‑driven, and
            tailored to the realities of building in emerging markets.
          </p>
        </div>

        <div className="grid gap-7 md:grid-cols-3">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.id}
                variants={hoverLift}
                initial="rest"
                whileHover="hover"
                animate="rest"
              >
                <Card className="h-full">
                  <div className="icon-pill mb-3 bg-emerald-50">
                    <Icon className="h-5 w-5 text-emerald-600" />
                  </div>
                  <h3 className="heading-3 text-lg text-gray-900">
                    {reason.title}
                  </h3>
                  <p className="subtext mt-2">{reason.description}</p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </Section>
  );
};

export default WhyChooseUs;

