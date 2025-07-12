"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { getStreamingServices, StreamingService } from "@/app/action";

export interface AnimeProp {
  id: string;
  name: string;
  image: {
    original: string;
  };
  kind: string;
  episodes: number;
  episodes_aired: number;
  score: string;
}

interface Prop {
  anime: AnimeProp;
  index: number;
}

const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function AnimeCard({ anime, index }: Prop) {
  const [showStreamingModal, setShowStreamingModal] = useState(false);
  const [streamingServices, setStreamingServices] = useState<
    StreamingService[]
  >([]);

  const handleWatchClick = async () => {
    const services = await getStreamingServices(anime.name);
    setStreamingServices(services);
    setShowStreamingModal(true);
  };

  return (
    <motion.div
      className="group relative bg-gradient-to-br from-gray-800/30 to-gray-900/50 rounded-2xl overflow-hidden border border-gray-700/30 hover:border-purple-500/50 backdrop-blur-sm transition-all duration-300"
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{
        delay: index * 0.1,
        ease: "easeOut",
        duration: 0.6,
      }}
      viewport={{ amount: 0 }}
      whileHover={{ y: -8, scale: 1.02 }}
    >
      {/* Image Container */}
      <div className="relative w-full h-[280px] overflow-hidden">
        <Image
          src={`https://shikimori.one${anime.image.original}`}
          alt={anime.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

        {/* Score Badge */}
        <div className="absolute top-3 right-3 bg-yellow-500 text-black px-2 py-1 rounded-lg text-sm font-bold flex items-center space-x-1">
          <Image src="/star.svg" alt="star" width={14} height={14} />
          <span>{anime.score}</span>
        </div>

        {/* Hover Actions */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="flex space-x-3">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-white/20 backdrop-blur-sm p-3 rounded-full border border-white/30 hover:bg-white/30 transition-all duration-200"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-white/20 backdrop-blur-sm p-3 rounded-full border border-white/30 hover:bg-white/30 transition-all duration-200"
            >
              <svg
                className="w-6 h-6 text-white"
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
        </div>
      </div>

      {/* Content */}
      <div className="p-5 space-y-4">
        {/* Title and Type */}
        <div className="space-y-2">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-bold text-white text-lg line-clamp-2 group-hover:text-purple-300 transition-colors leading-tight">
              {anime.name}
            </h3>
            <div className="flex-shrink-0 bg-purple-600/20 border border-purple-500/30 px-2 py-1 rounded-lg">
              <span className="text-purple-300 text-xs font-medium uppercase tracking-wide">
                {anime.kind}
              </span>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1">
            <Image
              src="/episodes.svg"
              alt="episodes"
              width={18}
              height={18}
              className="opacity-70"
            />
            <span className="text-gray-300 text-sm font-medium">
              {anime.episodes || anime.episodes_aired} eps
            </span>
          </div>

          <div className="flex items-center space-x-1">
            <Image src="/star.svg" alt="rating" width={16} height={16} />
            <span className="text-yellow-400 text-sm font-bold">
              {anime.score}
            </span>
          </div>
        </div>

        {/* Action Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleWatchClick}
          className="w-full bg-gradient-to-r from-pink-500 to-purple-600 px-4 py-3 rounded-xl text-white font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-200 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0"
        >
          Watch Now
        </motion.button>

        {/* Streaming Services Modal */}
        {showStreamingModal && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-gray-800 rounded-2xl p-6 max-w-md w-full mx-4 border border-gray-700"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white">
                  Watch {anime.name}
                </h3>
                <button
                  onClick={() => setShowStreamingModal(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-3">
                {streamingServices.length > 0 ? (
                  streamingServices.map((service, idx) => (
                    <motion.a
                      key={idx}
                      href={service.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center justify-between p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
                    >
                      <span className="text-white font-medium">
                        {service.name}
                      </span>
                      <span className="text-purple-400 text-sm">Watch →</span>
                    </motion.a>
                  ))
                ) : (
                  <div className="text-center py-8">
                    <p className="text-gray-400 mb-4">
                      No streaming services found for this anime.
                    </p>
                    <motion.a
                      href={`https://www.google.com/search?q=${encodeURIComponent(
                        anime.name + " watch online"
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      className="inline-block bg-purple-600 px-6 py-3 rounded-lg text-white font-medium hover:bg-purple-700 transition-colors"
                    >
                      Search for Streaming Options
                    </motion.a>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default AnimeCard;
