import React from "react";
import { cn } from "../lib/utils";

const BentoCard = ({ feature, className }) => {
  const isFullWidth = className.includes("md:col-span-6");

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-black p-8",
        "group border-neutral-800",
        "border-r border-b",
        className
      )}>
      <div
        className={cn(
          "relative z-10 h-full",
          isFullWidth ? "flex flex-row gap-8" : "flex flex-col"
        )}>
        <div className={cn(isFullWidth ? "w-1/2" : "w-full")}>
          <div className="mb-2 text-xs font-light uppercase tracking-wide text-white">
            <span className="text-sm text-blue-400 mb-3 me-3">●</span>
            {feature.tag}
          </div>
          <h3 className="mb-4 text-2xl font-medium text-white">
            {feature.title}
          </h3>
          <p className="text-sm text-neutral-300 max-w-md">
            {feature.description}
          </p>
        </div>
        <div className={cn("relative", isFullWidth ? "flex-1" : "flex-1 mt-8")}>
          {/* Image container with gradient overlay */}
          <div className="absolute inset-0 w-full h-full">
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent z-10" />
            <img
              src={feature.image}
              alt={feature.title}
              className="absolute inset-0 w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const features = [
  {
    tag: "Api Integration",
    title: "MetaTrader API Integration",
    description:
      "Access a world of trading opportunities with seamless MetaTrader API integration, providing enterprise clients with real-time insights and connectivity to a vast network of brokers.",
    className:
      "col-span-1 md:col-span-3 h-[400px] md:[&:nth-child(2)]:border-r-0",
    image:
      "https://cdn.prod.website-files.com/6776795150d75a7996a767bd/6776795150d75a7996a76886_alphatradeai-metatrader.avif",
  },
  {
    tag: "Analysis",
    title: "Pre-Market Briefs",
    description:
      "Prepare your strategies with early insights on market trends, economic data, and key events shaping the trading day.",
    className: "col-span-1 md:col-span-3 h-[400px]",
    image:
      "https://cdn.prod.website-files.com/6776795150d75a7996a767bd/6776795150d75a7996a76887_pre-market-brief-graphic.avif",
  },
  {
    tag: "Insights",
    title: "Advanced Charting & What If Simulations",
    description:
      "Use detailed charts and scenario simulations to explore the potential impacts of various market conditions on your investments.",
    className: "col-span-1 md:col-span-6 h-[300px] border-b-0",
    image:
      "https://cdn.prod.website-files.com/6776795150d75a7996a767bd/6776795150d75a7996a7688a_what-if-simulation-graphic.avif",
  },
];

function Services() {
  return (
    <div className="relative z-20 py-20 max-w-6xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-4">
          A Trading Journal Streamlined For You
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-6 bg-black border-t border-l border-neutral-800 mx-auto">
        {features.map((feature) => (
          <BentoCard
            key={feature.title}
            feature={feature}
            className={feature.className}
          />
        ))}
      </div>
    </div>
  );
}

export default Services;
