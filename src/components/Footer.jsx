import React, { useState } from "react";
import { Link } from "react-router-dom";

function Footer() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <footer className="w-full pb-10 bg-black">
      <div className="w-full px-24">
        {/* Separator line with padding */}
        <div className="px-[10%] mb-24">
          <div className="border-t border-neutral-800" />
        </div>

        <div className="grid grid-cols-12 gap-4">
          {/* Newsletter Section */}
          <div className="col-span-4">
            <h3 className="mb-4 text-xl font-medium text-white">
              Join Our Newsletter
            </h3>
            <p className="mb-6 text-neutral-400">
              Be the first to know about updates, trading strategies, and
              feature releases – straight to your inbox.
            </p>
            <div className="flex gap-2 mb-4">
              <input
                type="email"
                placeholder="Email address"
                className="bg-transparent border border-neutral-800 rounded-lg px-4 py-2 text-white flex-1 focus:outline-none focus:border-[#8a41e7]"
              />
              <button className="px-6 py-2 text-black transition-colors bg-white rounded-lg hover:bg-neutral-200 whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <div className="flex gap-2 text-sm text-neutral-400">
              <span className="text-white">•</span>
              <p>
                By subscribing, you agree to our{" "}
                <Link to="/privacy" className="text-white hover:underline">
                  privacy policy
                </Link>{" "}
                and provide consent to receive updates from our company.
              </p>
            </div>
          </div>

          {/* Spacing */}
          <div className="col-span-2" />

          {/* Navigation Columns */}
          <div className="col-span-2">
            <h4 className="mb-4 text-sm font-medium uppercase text-neutral-500">
              General
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/features"
                  className="text-white hover:text-[#8a41e7] transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-white hover:text-[#8a41e7] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-white hover:text-[#8a41e7] transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/demo"
                  className="text-white hover:text-[#8a41e7] transition-colors">
                  Book a Demo
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-2">
            <h4 className="mb-4 text-sm font-medium uppercase text-neutral-500">
              Additional
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/privacy"
                  className="text-white hover:text-[#8a41e7] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-white hover:text-[#8a41e7] transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-2">
            <h4 className="mb-4 text-sm font-medium uppercase text-neutral-500">
              Follow us
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://discord.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#8a41e7] transition-colors">
                  Discord
                </a>
              </li>
              <li>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#8a41e7] transition-colors">
                  X
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#8a41e7] transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#8a41e7] transition-colors">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Full-width container for ALPHATRADE image */}
      <div
        className="relative w-full mt-24 overflow-hidden group"
        onMouseMove={handleMouseMove}>
        <img
          src="https://cdn.prod.website-files.com/6776795150d75a7996a767bd/6776795150d75a7996a7680f_alphatradeai-text-logo.svg"
          alt="ALPHATRADE"
          className="w-full opacity-10 [filter:invert(60%)] transition-all duration-700"
          draggable={false}
        />
        <div
          className="absolute inset-0 transition-opacity duration-700 opacity-0 group-hover:opacity-100"
          style={{
            background: `radial-gradient(circle 150px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.15), transparent)`,
            maskImage: `url(${encodeURI(
              "https://cdn.prod.website-files.com/6776795150d75a7996a767bd/6776795150d75a7996a7680f_alphatradeai-text-logo.svg"
            )})`,
            WebkitMaskImage: `url(${encodeURI(
              "https://cdn.prod.website-files.com/6776795150d75a7996a767bd/6776795150d75a7996a7680f_alphatradeai-text-logo.svg"
            )})`,
            maskSize: "100% 100%",
            WebkitMaskSize: "100% 100%",
            mixBlendMode: "plus-lighter",
          }}
        />
      </div>
    </footer>
  );
}

export default Footer;
