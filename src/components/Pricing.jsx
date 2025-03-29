import React from "react";
import { cn } from "../lib/utils";

const PricingCard = ({ plan, isAnnual }) => {
  const price = isAnnual ? "410.00" : "29.99";
  const period = isAnnual ? "/year" : "/month";

  return (
    <div
      className={cn(
        "relative flex flex-col p-8 bg-black rounded-lg",
        isAnnual ? "border border-white" : "border border-neutral-800"
      )}>
      <div className="mb-5">
        <h3 className="text-xl font-medium text-white mb-3">{plan.name}</h3>
        <div className="flex items-baseline text-white">
          <span className="text-4xl font-bold tracking-tight">€{price}</span>
          <span className="ml-1 text-xl font-semibold">{period}</span>
        </div>
        {isAnnual && (
          <div className="mt-1">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#8a41e7]/20 text-[#8a41e7]">
              Save 16%
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-4 flex-1">
        {plan.features.map((feature, index) => (
          <div key={index} className="flex items-center">
            <svg
              className="w-5 h-5 text-[#8a41e7] mr-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span className="text-sm text-neutral-300">{feature}</span>
          </div>
        ))}
      </div>

      <button
        className={cn(
          "mt-8 w-full py-2 px-4 rounded-lg transition-colors",
          isAnnual
            ? "bg-[#8a41e7] text-white hover:bg-[#8a41e7]/90"
            : "border-2 border-[#8a41e7] text-white hover:bg-[#8a41e7]/10"
        )}>
        Get Started
      </button>
    </div>
  );
};

const plans = [
  {
    name: "Monthly Plan",
    features: [
      "Access to Advanced Trading Analytics",
      "AI-Driven Feedback and Risk Profiling",
      "Comprehensive Fundamental Analysis Breakdowns",
      "Exclusive Pre-Market Newsletter",
      "Entry to Alpha Trade AI's Exclusive Discord Community",
    ],
  },
  {
    name: "Annual Plan",
    features: [
      "Access to Advanced Trading Analytics",
      "AI-Driven Feedback and Risk Profiling",
      "Comprehensive Fundamental Analysis Breakdowns",
      "Exclusive Pre-Market Newsletter",
      "Entry to Alpha Trade AI's Exclusive Discord Community",
    ],
  },
];

function Pricing() {
  return (
    <div className="relative z-20 py-20 max-w-6xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-4">
          Flexible Plans for Every Trader
        </h2>
        <p className="text-neutral-400 max-w-2xl mx-auto">
          Whether you're just starting or an experienced trader, our plans
          provide the tools you need to excel.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <PricingCard plan={plans[0]} isAnnual={false} />
        <PricingCard plan={plans[1]} isAnnual={true} />
      </div>
    </div>
  );
}

export default Pricing;
