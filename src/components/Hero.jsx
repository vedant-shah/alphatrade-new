import React from "react";
import { WavyBackground } from "./ui/wavy-background";
import { Cover } from "./ui/cover";
import { FlipWords } from "./ui/flipwords";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

function Hero() {
  const stats = [
    { value: "5x Faster", label: "Analysis time" },
    { value: "24/7", label: "Customer support" },
    { value: "10x", label: "Advanced analytics tools" },
    { value: "99.9%", label: "Reliable uptime" },
  ];

  const StatItem = ({ value, label }) => (
    <div className="flex flex-col items-center">
      <p className="text-xl text-white font-hv-medium">{value}</p>
      <p className="text-xs text-gray-400 font-hv-medium">{label}</p>
    </div>
  );

  return (
    <>
      <WavyBackground className="flex flex-col items-center justify-center w-screen min-h-screen mx-auto overflow-x-hidden max-w-screen">
        <p className="text-2xl text-center text-white md:text-4xl lg:text-7xl font-hv-black">
          <Cover>Supercharge</Cover> Your <br /> Investment Approach
        </p>
        <p className="mt-4 text-base text-center text-white md:text-lg font-hv-medium">
          <FlipWords
            words={[
              "Trade like the pros.",
              "Invest like an institution.",
              "Welcome to Alpha Trade AI.",
            ]}
          />
        </p>
        <div className="flex flex-col items-center w-full max-w-2xl gap-8 p-3 my-10 md:flex-row">
          <div className="flex items-center w-full gap-3 md:w-auto">
            <Input
              type="email"
              className="me-2"
              placeholder="Enter your email"
            />
            <Button variant="default">Get Started</Button>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex -space-x-3">
              {/* Replace these placeholder images with your actual image URLs */}
              <img
                src="https://cdn.prod.website-files.com/6776795150d75a7996a767bd/6776795150d75a7996a76812_alphatradeai-client-1.webp
"
                alt="user"
                className="object-cover w-8 h-8 rounded-full border-1 border-background"
              />
              <img
                src="https://cdn.prod.website-files.com/6776795150d75a7996a767bd/6776795150d75a7996a76814_alphatradeai-client-2.webp"
                alt="user"
                className="object-cover w-8 h-8 rounded-full border-1 border-background"
              />
              <img
                src="https://cdn.prod.website-files.com/6776795150d75a7996a767bd/6776795150d75a7996a76813_alphatradeai-client-3.webp"
                alt="user"
                className="object-cover w-8 h-8 rounded-full border-1 border-background"
              />
            </div>
            <p className="text-sm text-white font-hv-medium">
              Trusted by over <span className="text-primary">+1K</span> people
              globally.
            </p>
          </div>
        </div>
        <div className="relative w-full max-w-4xl overflow-hidden mt-14">
          <div className="ticker-wrapper">
            <div className="ticker">
              <div className="flex items-center gap-16 px-4 whitespace-nowrap">
                {stats.map((stat, i) => (
                  <StatItem key={i} {...stat} />
                ))}
                {stats.map((stat, i) => (
                  <StatItem key={i + "dup"} {...stat} />
                ))}
                {stats.map((stat, i) => (
                  <StatItem key={i + "dup2"} {...stat} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </WavyBackground>

      {/* Dashboard Preview Section */}
      <div className="w-full px-4 py-24 bg-background">
        <div className="flex flex-col items-center justify-between gap-12 mx-auto max-w-7xl lg:flex-row">
          <div className="flex-1">
            <img
              src="https://cdn.prod.website-files.com/6776795150d75a7996a767bd/67a6073a409763a370364baa_alphatradeai-dashboard.avif"
              alt="AlphaTrade AI Dashboard"
              className="w-full transition-transform duration-500 shadow-2xl rounded-2xl hover:scale-105"
              draggable={false}
            />
          </div>
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl leading-tight text-white md:text-4xl lg:text-5xl font-hv-black">
              Harnessing AI for Smarter Trading Decisions
            </h2>
            <p className="max-w-xl text-lg text-gray-400 font-hv-medium">
              Effortless setup, powerful tools, and insights tailored to your
              goals.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
