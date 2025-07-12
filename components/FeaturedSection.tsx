"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const featuredAnime = [
  {
    id: 1,
    title: "Attack on Titan",
    description:
      "Humanity fights for survival against giant humanoid Titans that have brought civilization to the brink of extinction.",
    image: "/anime.png",
    rating: "9.0",
    genre: "Action, Drama",
    year: "2023",
  },
  {
    id: 2,
    title: "Demon Slayer",
    description:
      "A young boy becomes a demon slayer to save his sister and avenge his family.",
    image: "/anime.png",
    rating: "8.7",
    genre: "Action, Supernatural",
    year: "2023",
  },
  {
    id: 3,
    title: "One Piece",
    description:
      "Follow Monkey D. Luffy on his quest to become the Pirate King.",
    image: "/anime.png",
    rating: "9.2",
    genre: "Adventure, Comedy",
    year: "2023",
  },
];

function FeaturedSection() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 pt-20">
      <div className="space-y-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            <span className="red-gradient">Featured</span> This Week
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Don&apos;t miss these trending anime series that everyone&apos;s
            talking about
          </p>
        </motion.div>

        {/* Featured Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {featuredAnime.map((anime, index) => (
            <motion.div
              key={anime.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl overflow-hidden border border-gray-700/50 backdrop-blur-sm"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={anime.image}
                  alt={anime.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                {/* Rating Badge */}
                <div className="absolute top-4 right-4 bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                  ⭐ {anime.rating}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                    {anime.title}
                  </h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <span>{anime.year}</span>
                    <span>•</span>
                    <span>{anime.genre}</span>
                  </div>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed">
                  {anime.description}
                </p>

                <div className="flex space-x-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 bg-gradient-to-r from-pink-500 to-purple-600 px-4 py-2 rounded-lg text-white font-medium hover:shadow-lg transition-all duration-200"
                  >
                    Watch Now
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 border border-gray-600 rounded-lg text-gray-300 hover:text-white hover:border-gray-500 transition-all duration-200"
                  >
                    + List
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedSection;
