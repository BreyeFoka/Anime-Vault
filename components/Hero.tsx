"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

function Hero() {
  const [searchTerm, setSearchTerm] = useState("");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-red-900/20" />
      <div className="absolute inset-0 bg-[url('/hero.png')] bg-center bg-cover bg-no-repeat opacity-10" />

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full blur-xl opacity-30 animate-pulse" />
      <div className="absolute bottom-40 right-20 w-32 h-32 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full blur-xl opacity-20 animate-pulse delay-1000" />
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-gradient-to-br from-red-500 to-orange-600 rounded-full blur-xl opacity-25 animate-pulse delay-500" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-0">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[80vh]"
        >
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div variants={itemVariants} className="space-y-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center space-x-3"
              >
                <Image
                  src="/logo.svg"
                  alt="Anime Vault Logo"
                  width={60}
                  height={60}
                  className="object-contain"
                />
                <div className="text-2xl font-bold text-white">
                  Anime <span className="red-gradient">Vault</span>
                </div>
              </motion.div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Discover the <span className="red-gradient">Ultimate</span>
                <br />
                Anime Experience
              </h1>

              <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                Dive into a world of endless entertainment with our curated
                collection of anime series, movies, and exclusive content. Your
                journey starts here.
              </p>
            </motion.div>

            {/* Search Bar */}
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search for anime..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-sm transition-all duration-200"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="absolute inset-y-0 right-0 pr-2 flex items-center"
                >
                  <div className="bg-gradient-to-r from-pink-500 to-purple-600 px-6 py-2 rounded-lg text-white font-medium hover:shadow-lg transition-all duration-200">
                    Search
                  </div>
                </motion.button>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-pink-500 to-purple-600 px-8 py-4 rounded-xl text-white font-semibold hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300"
              >
                Explore Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="border border-gray-600 px-8 py-4 rounded-xl text-white font-semibold hover:bg-gray-800/50 hover:border-gray-500 transition-all duration-300"
              >
                Watch Trailer
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-6 pt-8"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-white">10K+</div>
                <div className="text-gray-400 text-sm">Anime Series</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">1M+</div>
                <div className="text-gray-400 text-sm">Happy Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">50+</div>
                <div className="text-gray-400 text-sm">Categories</div>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Hero Image */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative w-full h-[70vh] lg:h-[80vh]">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-3xl blur-3xl transform rotate-6" />

              {/* Main Image */}
              <div className="relative h-full rounded-3xl overflow-hidden border border-gray-700/50 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm">
                <Image
                  src="/anime.png"
                  alt="Featured Anime"
                  fill
                  className="object-cover"
                  priority
                />

                {/* Overlay with play button */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-center justify-center">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-white/20 backdrop-blur-sm p-6 rounded-full border border-white/30 hover:bg-white/30 transition-all duration-300"
                  >
                    <svg
                      className="w-8 h-8 text-white ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-gray-400 text-center"
        >
          <div className="text-sm mb-2">Scroll to explore</div>
          <svg
            className="w-6 h-6 mx-auto"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
