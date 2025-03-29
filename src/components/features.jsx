import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content = [
  {
    title: "Advanced Data Analysis",
    description:
      "In-depth market analysis for informed trading strategies, powered by AI-driven insights that help you stay ahead of trends and make data-backed decisions.",
    content: (
      <img
        className="tab-image"
        src="https://cdn.prod.website-files.com/6776795150d75a7996a767bd/67a6073aea8c593ba34fe0b3_advanced-data-analysis-p-1080.avif"
        alt="AlphaTradeAI 'what if' simulations "
      />
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
          className="h-full w-full object-cover"
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
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
];

function features() {
  return (
    <div
      className="w-full h-[30rem] bg-background py-4 my-16"
      style={{
        scrollbarWidth: "none" /* Firefox */,
        msOverflowStyle: "none" /* IE and Edge */,
        "::-webkit-scrollbar": {
          display: "none",
        } /* Chrome, Safari and Opera */,
      }}>
      <StickyScroll content={content} />
    </div>
  );
}

export default features;
