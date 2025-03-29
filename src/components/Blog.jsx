import React from "react";

const BlogCard = ({ category, date, title, description, image, author }) => {
  return (
    <div className="group cursor-pointer">
      <div className="relative overflow-hidden rounded-lg mb-4">
        <img
          src={image}
          alt={title}
          className="w-full h-[200px] object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-4">
          <span className="text-xs font-medium bg-neutral-800 text-white px-3 py-1 rounded-full">
            {category}
          </span>
          <span className="text-xs text-neutral-400">{date}</span>
        </div>
        <h3 className="text-2xl font-medium text-white group-hover:text-[#8a41e7] transition-colors">
          {title.length > 60 ? `${title.slice(0, 60)}...` : title}
        </h3>
        <p className="text-sm text-neutral-400">
          {description.length > 120
            ? `${description.slice(0, 120)}...`
            : description}
        </p>
        <div>
          <p className="text-xs text-neutral-500">BY {author}</p>
        </div>
      </div>
    </div>
  );
};

const blogPosts = [
  {
    category: "TRADING STRATEGIES",
    date: "NOVEMBER 5, 2024",
    title:
      "Accumulation, Manipulation, and Distribution (AMD): Mastering the Market Cycle",
    description:
      "Successful trading requires more than simply identifying trends and patterns; it demands an understanding of the underlying processes that shape market movements.",
    image:
      "https://cdn.prod.website-files.com/6776795150d75a7996a767e3/6776795150d75a7996a76881_accumulation-manipulation-and-distribution-amd-mastering-the-phases-of-market-movement.avif",
    author: "NOOR MAHOMED AYOB",
  },
  {
    category: "TRADING STRATEGIES",
    date: "NOVEMBER 9, 2024",
    title:
      "The Interbank Price Delivery Algorithm (IPDA): Decoding Market Mechanics",
    description:
      "In financial markets, price movements are commonly attributed to the forces of buying and selling. However, ICT (Inner Circle Trader) concepts reveal deeper mechanics.",
    image:
      "https://cdn.prod.website-files.com/6776795150d75a7996a767e3/6776795150d75a7996a768a1_the-interbank-price-delivery-algorithm-ipda-decoding-market-control.avif",
    author: "NOOR MAHOMED AYOB",
  },
  {
    category: "TRADING STRATEGIES",
    date: "NOVEMBER 10, 2024",
    title: "Unveiling ICT Concepts: A new Lens on Market Mechanics",
    description:
      "Trading is often misunderstood as a game of buyers and sellers fighting for dominance. While this view explains market movements superficially, ICT concepts offer deeper insights.",
    image:
      "https://cdn.prod.website-files.com/6776795150d75a7996a767e3/6776795150d75a7996a768be_unveiling-ict-concepts-a-new-lense-on-market-mechanics.avif",
    author: "NOOR MAHOMED AYOB",
  },
];

function Blog() {
  return (
    <div className="w-full bg-black py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center mb-16">
          <div>
            <div className="text-sm text-[#fff] mb-3">
              <span className="text-sm text-[#8a41e7] mb-3 me-3">●</span>
              Blog
            </div>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-white">
              From Market Trends to
              <br />
              Winning Strategies
            </h2>
          </div>
          <button className="px-6 py-2.5 rounded-lg bg-neutral-900 text-white hover:bg-neutral-800 transition-colors">
            View Blog
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;
