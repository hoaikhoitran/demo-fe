import React from "react";
import { ShieldCheck, Banknote, Zap, type LucideIcon } from "lucide-react";

interface FeatureItem {
  id: number;
  Icon: LucideIcon;
  title: string;
  description: string;
  iconBg: string;
  iconColor: string;
}

const features: FeatureItem[] = [
  {
    id: 1,
    Icon: ShieldCheck,
    title: "Eco Certified Products",
    description:
      "Every product in our store carries internationally recognized eco-certifications, ensuring you get genuinely sustainable goods backed by rigorous third-party standards.",
    iconBg: "bg-red-100",
    iconColor: "text-red-600",
  },
  {
    id: 2,
    Icon: Banknote,
    title: "Affordable Sustainability",
    description:
      "Going green should never break the bank. phuocEco offers competitive pricing on all eco-friendly products, making sustainable living accessible to everyone.",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
  },
  {
    id: 3,
    Icon: Zap,
    title: "Fast & Carbon-Offset Delivery",
    description:
      "We ship fast and offset every delivery's carbon footprint, so your order arrives quickly without adding to the planet's burden.",
    iconBg: "bg-rose-100",
    iconColor: "text-rose-600",
  },
];

interface FeatureCardProps {
  feature: FeatureItem;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature }) => {
  const { Icon, title, description, iconBg, iconColor } = feature;
  return (
    <div className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-xl border border-gray-100 hover:border-red-200 transition-all duration-300 hover:-translate-y-1 flex flex-col gap-5 h-full">
      <div
        className={`w-14 h-14 rounded-2xl ${iconBg} flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300`}
      >
        <Icon className={`w-7 h-7 ${iconColor}`} />
      </div>
      <div className="flex flex-col gap-2 flex-1">
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-red-50 border border-red-200 text-red-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            Everything You Need to{" "}
            <span className="text-red-600">Go Green</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            From certified products to fast delivery, we've built phuocEco to
            make sustainable choices effortless.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {features.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
