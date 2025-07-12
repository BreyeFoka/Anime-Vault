"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const trendingAnime = [
  {
    id: 1,
    title: "Jujutsu Kaisen",
    episodes: 24,
    rating: "8.9",
    image: "/anime.png",
    rank: 1,
  },
  {
    id: 2,
    title: "My Hero Academia",
    episodes: 138,
    rating: "8.7",
    image: "/anime.png",
    rank: 2,
  },
  {
    id: 3,
    title: "Tokyo Revengers",
    episodes: 24,
    rating: "8.5",
    image: "/anime.png",
    rank: 3,
  },
  {
    id: 4,
    title: "Chainsaw Man",
    episodes: 12,
    rating: "8.8",
    image: "/anime.png",
    rank: 4,
  },
  {
    id: 5,
    title: "Spy x Family",
    episodes: 12,
    rating: "9.0",
    image: "/anime.png",
    rank: 5,
  },
];

function TrendingSection() {
  return (
    <section id="trending" className="px-4 sm:px-6 lg:px-8">
      <div className="space-y-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-between"
        >
          <div className="space-y-2">
            <h2 className="text-4xl sm:text-5xl font-bold text-white">
              <span className="red-gradient">Trending</span> Now
            </h2>
            <p className="text-xl text-gray-300">
              The hottest anime series this week
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden sm:block bg-gradient-to-r from-pink-500 to-purple-600 px-6 py-3 rounded-xl text-white font-medium hover:shadow-lg transition-all duration-200"
          >
            View All
          </motion.button>
        </motion.div>

        {/* Trending List */}
        <div className="space-y-4">
          {trendingAnime.map((anime, index) => (
            <motion.div
              key={anime.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, x: 10 }}
              className="group flex items-center space-x-6 bg-gradient-to-r from-gray-800/30 to-transparent p-4 rounded-xl border border-gray-700/30 hover:border-purple-500/50 transition-all duration-300"
            >
              {/* Rank */}
              <div className="flex-shrink-0">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${
                    anime.rank <= 3
                      ? "bg-gradient-to-br from-yellow-400 to-orange-500 text-black"
                      : "bg-gray-700 text-white"
                  }`}
                >
                  {anime.rank}
                </div>
              </div>

              {/* Image */}
              <div className="flex-shrink-0 relative w-16 h-20 rounded-lg overflow-hidden">
                <Image
                  src={anime.image}
                  alt={anime.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="flex-1 space-y-1">
                <h3 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors">
                  {anime.title}
                </h3>
                <div className="flex items-center space-x-4 text-sm text-gray-400">
                  <span>{anime.episodes} Episodes</span>
                  <span>•</span>
                  <div className="flex items-center space-x-1">
                    <Image
                      src="/star.svg"
                      alt="rating"
                      width={14}
                      height={14}
                    />
                    <span className="text-yellow-400">{anime.rating}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex-shrink-0 flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 bg-purple-600 rounded-lg text-white hover:bg-purple-700 transition-colors"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 bg-gray-700 rounded-lg text-white hover:bg-gray-600 transition-colors"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile View All Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="sm:hidden w-full bg-gradient-to-r from-pink-500 to-purple-600 px-6 py-3 rounded-xl text-white font-medium hover:shadow-lg transition-all duration-200"
        >
          View All Trending
        </motion.button>
      </div>
    </section>
  );
}

export default TrendingSection;
