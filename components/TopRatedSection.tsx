"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const topRatedAnime = [
  {
    id: 1,
    title: "Fullmetal Alchemist: Brotherhood",
    rating: "9.8",
    year: "2009",
    episodes: 64,
    image: "/anime.png",
    genre: "Adventure, Drama",
  },
  {
    id: 2,
    title: "Attack on Titan",
    rating: "9.6",
    year: "2013",
    episodes: 75,
    image: "/anime.png",
    genre: "Action, Drama",
  },
  {
    id: 3,
    title: "Death Note",
    rating: "9.5",
    year: "2006",
    episodes: 37,
    image: "/anime.png",
    genre: "Thriller, Supernatural",
  },
  {
    id: 4,
    title: "One Piece",
    rating: "9.4",
    year: "1999",
    episodes: 1000,
    image: "/anime.png",
    genre: "Adventure, Comedy",
  },
];

function TopRatedSection() {
  return (
    <section id="top-rated" className="px-4 sm:px-6 lg:px-8">
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
              <span className="red-gradient">Top Rated</span> Anime
            </h2>
            <p className="text-xl text-gray-300">
              The highest rated anime series of all time
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden sm:block bg-gradient-to-r from-pink-500 to-purple-600 px-6 py-3 rounded-xl text-white font-medium hover:shadow-lg transition-all duration-200"
          >
            View Top 100
          </motion.button>
        </motion.div>

        {/* Top Rated Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {topRatedAnime.map((anime, index) => (
            <motion.div
              key={anime.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -5 }}
              className="group flex space-x-4 bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
            >
              {/* Image */}
              <div className="flex-shrink-0 relative w-24 h-32 rounded-xl overflow-hidden">
                <Image
                  src={anime.image}
                  alt={anime.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {/* Rating Badge */}
                <div className="absolute top-2 left-2 bg-yellow-500 text-black px-2 py-1 rounded-lg text-xs font-bold">
                  ⭐ {anime.rating}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 space-y-3">
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors line-clamp-2">
                    {anime.title}
                  </h3>
                  <div className="flex items-center space-x-2 text-sm text-gray-400">
                    <span>{anime.year}</span>
                    <span>•</span>
                    <span>{anime.episodes} Episodes</span>
                  </div>
                  <p className="text-sm text-gray-500">{anime.genre}</p>
                </div>

                {/* Rating Display */}
                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Image
                        key={i}
                        src="/star.svg"
                        alt="star"
                        width={16}
                        height={16}
                        className="text-yellow-400"
                      />
                    ))}
                  </div>
                  <span className="text-yellow-400 font-semibold">
                    {anime.rating}/10
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2 pt-2">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 bg-gradient-to-r from-pink-500 to-purple-600 px-4 py-2 rounded-lg text-white text-sm font-medium hover:shadow-lg transition-all duration-200"
                  >
                    Watch Now
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 border border-gray-600 rounded-lg text-gray-300 text-sm hover:text-white hover:border-gray-500 transition-all duration-200"
                  >
                    + List
                  </motion.button>
                </div>
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
          View Top 100 Anime
        </motion.button>
      </div>
    </section>
  );
}

export default TopRatedSection;
