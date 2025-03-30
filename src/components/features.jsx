import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content = [
  {
    title: "Advanced Data Analysis",
    description:
      "In-depth market analysis for informed trading strategies, powered by AI-driven insights that help you stay ahead of trends and make data-backed decisions.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="https://cdn.prod.website-files.com/6776795150d75a7996a767bd/67a6073aea8c593ba34fe0b3_advanced-data-analysis-p-1080.avif"
          className=" object-cover rounded-lg"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Pre-Market Briefs",
    description:
      "Start each trading day with a comprehensive, AI-curated pre-market briefing that highlights key market trends, potential opportunities, and economic announcements.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="https://cdn.prod.website-files.com/6776795150d75a7996a767bd/6776795150d75a7996a76879_pre-market-briefs.avif"
          className=" object-cover rounded-lg"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "“What If” Simulations - coming soon",
    description:
      "Test various market scenarios and visualize potential impacts on your trading strategies with our innovative 'What If' simulation tool.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="https://cdn.prod.website-files.com/6776795150d75a7996a767bd/6776795150d75a7996a76882_what-if-simulations.avif"
          className=" object-cover rounded-lg"
          alt="linear board demo"
        />
      </div>
    ),
  },
];

function features() {
  return (
    <div className="w-full bg-background py-4 my-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <StickyScroll content={content} />
      </div>
    </div>
  );
}

export default features;
