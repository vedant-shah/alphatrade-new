"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const StickyScroll = ({ content, contentClassName }) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    // target: ref
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "#000000", // slate-900
    "#000000", // black
    "#000000", // neutral-900
  ];

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="relative flex flex-col h-auto lg:h-[80vh] lg:flex-row justify-start overflow-y-auto rounded-md scrollbar-hide"
      style={{
        scrollbarWidth: "none",
        msOverflowStyle: "none",
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
      ref={ref}>
      <div className="relative flex items-start w-full lg:w-1/2 p-4 lg:p-8">
        <div className="w-full">
          {content.map((item, index) => (
            <div
              key={item.title + index}
              className="lg:min-h-[80vh] flex flex-col py-8 lg:py-6 lg:justify-center">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-3xl sm:text-2xl lg:text-2xl font-bold text-slate-100 lg:opacity-[inherit] opacity-100">
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="mt-3 lg:mt-4 text-sm lg:text-base text-slate-300 max-w-[90%] lg:max-w-lg lg:opacity-[inherit] opacity-100">
                {item.description}
              </motion.p>
              {/* Show image below content on mobile */}
              <div className="mt-6 block lg:hidden w-full">
                <div className="w-full h-[300px] rounded-lg overflow-hidden">
                  {React.isValidElement(item.content)
                    ? React.cloneElement(item.content, {
                        className: cn(
                          "w-full h-full object-contain",
                          item.content.props.className
                        ),
                      })
                    : item.content}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Only show sticky container on desktop */}
      <div
        className={cn(
          "hidden lg:block sticky top-0 w-full lg:w-1/2 h-[35vh] lg:h-[80vh] overflow-hidden rounded-lg",
          contentClassName
        )}>
        <div className="relative w-full h-full">
          <div className="absolute inset-0 flex items-center justify-center p-3 lg:p-6">
            {React.isValidElement(content[activeCard].content)
              ? React.cloneElement(content[activeCard].content, {
                  className: cn(
                    "w-full h-full object-contain max-w-[90%] max-h-[90%]",
                    content[activeCard].content.props.className
                  ),
                })
              : content[activeCard].content}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
