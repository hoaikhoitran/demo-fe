import React from "react";
import { motion } from "framer-motion";
import { Code2, Leaf, LineChart } from "lucide-react";
import Section from "../layout/Section";
import Card from "../ui/Card";
import Badge from "../ui/Badge";
import { fadeUp, hoverLift, staggerContainer } from "../../animations/variants";

const programs = [
  {
    id: 1,
    title: "Sustainable Technology",
    icon: Code2,
    badge: "Future‑ready skills",
    description:
      "Build climate‑aware digital products with modern stacks, lifecycle thinking, and low‑carbon architecture patterns.",
    bullets: [
      "Green software principles",
      "Impact‑driven product design",
      "Hands‑on capstone projects",
    ],
  },
  {
    id: 2,
    title: "Environmental Leadership",
    icon: Leaf,
    badge: "Lead with clarity",
    description:
      "Learn to drive sustainability roadmaps, influence stakeholders, and lead cross‑functional green initiatives.",
    bullets: [
      "Systems thinking & strategy",
      "Stakeholder storytelling",
      "Team facilitation labs",
    ],
  },
  {
    id: 3,
    title: "Green Entrepreneurship",
    icon: LineChart,
    badge: "Launch to impact",
    description:
      "Turn climate ideas into viable ventures with market validation, funding readiness, and ESG‑aligned business models.",
    bullets: [
      "Venture design sprints",
      "Impact modeling",
      "Investor‑ready pitch decks",
    ],
  },
];

const Programs: React.FC = () => {
  return (
    <Section
      id="programs"
      variant="default"
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
          <Badge>Signature Programs</Badge>
          <h2 className="heading-2">
            Programs crafted for{" "}
            <span className="text-emerald-600">high‑leverage green careers</span>
          </h2>
          <p className="body-text">
            From engineers to founders to policy leaders, phuocEco Academy
            equips you with the mindset and tools to design a regenerative
            future.
          </p>
        </div>

        <div className="grid gap-7 md:grid-cols-3">
          {programs.map((program) => {
            const Icon = program.icon;
            return (
              <motion.div
                key={program.id}
                variants={hoverLift}
                initial="rest"
                whileHover="hover"
                animate="rest"
              >
                <Card className="h-full">
                  <div className="flex items-center justify-between gap-3">
                    <div className="icon-pill bg-emerald-50">
                      <Icon className="h-5 w-5 text-emerald-600" />
                    </div>
                    <Badge variant="accent" className="text-[0.7rem]">
                      {program.badge}
                    </Badge>
                  </div>
                  <div className="space-y-2">
                    <h3 className="heading-3 text-lg text-gray-900">
                      {program.title}
                    </h3>
                    <p className="subtext">{program.description}</p>
                  </div>
                  <ul className="mt-2 space-y-1.5 text-sm text-gray-600">
                    {program.bullets.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </Section>
  );
};

export default Programs;

