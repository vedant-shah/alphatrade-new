import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const faqItems = [
  {
    question: "What is Alpha Trade AI?",
    answer:
      "The Analytics Journal tracks your trades, calculates key metrics like Sharpe ratios and risk-reward ratios, and provides AI-powered feedback to improve your trading performance.",
  },
  {
    question: "What is included in the Analytics Journal?",
    answer:
      "The Analytics Journal tracks your trades, calculates key metrics like Sharpe ratios and risk-reward ratios, and provides AI-powered feedback to improve your trading performance.",
  },
  {
    question: "Who can use Alpha Trade AI?",
    answer:
      "Alpha Trade AI is built for traders of all levels—from beginners looking to learn to professionals seeking an edge in the market.",
  },
  {
    question: "Can I track my trades with Alpha Trade AI?",
    answer:
      "Yes, the Analytics Journal allows you to monitor your trades, analyze performance, and gain actionable insights to improve your strategy.",
  },
  {
    question: "How does the Pre-Market Brief work?",
    answer:
      "Join our Discord community, provide proof of purchase, and gain access to the Pre-Market Brief along with other exclusive resources.",
  },
  {
    question: "Is there a trial version available?",
    answer:
      "Yes, Alpha Trade AI offers a 7-day free trial so you can explore the platform and experience its features before committing.",
  },
  {
    question: "What if I need support or have questions?",
    answer:
      "Our customer support team is available to help. You can reach out via our Discord or contact us through the platform for assistance.",
  },
];

function FAQ() {
  return (
    <div className="w-full bg-black py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div className="order-2 md:order-1">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index + 1}`}
                  className="border-b border-neutral-800">
                  <AccordionTrigger className="text-white hover:text-[#8a41e7] transition-colors text-left">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-neutral-400">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="order-1 md:order-2">
            <div className="text-sm text-[#fff] mb-3">
              <span className="text-sm text-[#8a41e7] mb-3 me-3">●</span>
              Most Common Questions
            </div>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-neutral-400">
              Find answers to common questions about our trading journal and how
              AlphaTrade AI can address your specific trading needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
